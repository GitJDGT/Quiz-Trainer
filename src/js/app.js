var App = {
    currentQuestionAnswered: false,
    importedQuestions: null,

    init() {
        UI.init();
        this.bindEvents();
        UI.showScreen('welcome');
    },

    bindEvents() {
        UI.onStart(function() { App.startQuiz(); });
        UI.onImport(function(files) { App.importQuestionsFromFolder(files); });
        UI.onStartImported(function() { App.startQuiz(); });
        UI.onCancelImport(function() { App.cancelImport(); });
        UI.onAnswer(function() { App.submitAnswer(); });
        UI.onNext(function() { App.nextQuestion(); });
        UI.onAbort(function() { App.abortQuiz(); });
        UI.onRestart(function() { App.restartQuiz(); });
        UI.onExport(function() { App.exportQuestions(); });
        UI.onErrorHome(function() { App.goHome(); });
        UI.onOptionSelect(function(optionId) { App.onOptionSelected(optionId); });
    },

    startQuiz() {
        this.currentQuestionAnswered = false;
        var result;

        if (this.importedQuestions) {
            result = QuizEngine.initWithQuestions(this.importedQuestions);
        } else {
            result = QuizEngine.init();
        }

        if (!result.success) {
            UI.showError(result.message);
            return;
        }

        var question = QuizEngine.getCurrentQuestion();
        
        if (!question) {
            UI.showError('No se encontraron preguntas en el banco de datos.');
            return;
        }

        this.updateStats();
        UI.showQuestion(question, QuizEngine.getCurrentQuestionNumber(), QuizEngine.getTotalQuestions());
    },

    importQuestionsFromFolder(files) {
        var jsonFile = null;
        var fallbackJsonFile = null;
        var imagesMap = {};

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileName = file.name.toLowerCase();

            if (fileName.endsWith('.json')) {
                if (fileName === 'questions.json') {
                    jsonFile = file;
                } else if (fileName !== 'metadata.json' && !fallbackJsonFile) {
                    fallbackJsonFile = file;
                }
            } else if (fileName.endsWith('.png') || fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.gif') || fileName.endsWith('.webp')) {
                imagesMap[file.name] = URL.createObjectURL(file);
            }
        }

        if (!jsonFile && fallbackJsonFile) {
            jsonFile = fallbackJsonFile;
        }

        if (!jsonFile) {
            UI.showError('No se encontró un archivo JSON de preguntas en la carpeta seleccionada.');
            return;
        }

        var reader = new FileReader();

        reader.onload = function(event) {
            var jsonString = event.target.result;
            var result = QuestionRepository.importQuestions(jsonString);

            if (result.success) {
                App.importedQuestions = result.questions;
                UI.clearImportedImages();
                UI.setImportedImages(imagesMap);

                var imageCount = Object.keys(imagesMap).length;
                var message = 'Banco de preguntas importado correctamente. ' + result.count + ' preguntas cargadas.';
                if (imageCount > 0) {
                    message += ' ' + imageCount + ' imágenes encontradas.';
                }
                UI.showImportConfirm(message);
            } else {
                App.cleanupImages(imagesMap);
                UI.showError('Error al importar: ' + result.message);
            }
        };

        reader.onerror = function() {
            App.cleanupImages(imagesMap);
            UI.showError('Error al leer el archivo JSON.');
        };

        reader.readAsText(jsonFile);
    },

    cleanupImages(imagesMap) {
        var keys = Object.keys(imagesMap);
        for (var i = 0; i < keys.length; i++) {
            URL.revokeObjectURL(imagesMap[keys[i]]);
        }
    },

    cancelImport() {
        this.importedQuestions = null;
        UI.clearImportedImages();
        UI.showScreen('welcome');
    },

    exportQuestions() {
        var result = QuestionRepository.exportQuestions();

        if (!result.success) {
            UI.showError(result.message);
            return;
        }

        var blob = new Blob([result.data], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'quiz-trainer-questions.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    onOptionSelected(optionId) {
        if (this.currentQuestionAnswered) {
            return;
        }

        UI.enableAnswerButton();
        UI.highlightSelectedOption(optionId);
    },

    submitAnswer() {
        if (this.currentQuestionAnswered) {
            return;
        }

        var selectedOption = UI.getSelectedOption();

        if (!selectedOption) {
            return;
        }

        var question = QuizEngine.getCurrentQuestion();

        if (!question) {
            return;
        }

        var isCorrect = selectedOption === question.correctAnswer;

        this.currentQuestionAnswered = true;

        QuizEngine.recordAnswer(isCorrect);
        this.updateStats();

        UI.disableOptions();
        UI.disableAnswerButton();
        UI.enableNextButton();
        UI.showFeedback(isCorrect);
    },

    nextQuestion() {
        this.currentQuestionAnswered = false;
        var moved = QuizEngine.moveToNextQuestion();

        if (!moved) {
            this.showFinalResults();
            return;
        }

        var question = QuizEngine.getCurrentQuestion();

        if (!question) {
            this.showFinalResults();
            return;
        }

        UI.showQuestion(question, QuizEngine.getCurrentQuestionNumber(), QuizEngine.getTotalQuestions());
    },

    showFinalResults() {
        var total = QuizEngine.getTotalQuestions();
        var correct = QuizEngine.getCorrectAnswers();
        var incorrect = QuizEngine.getIncorrectAnswers();
        var percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        UI.showResults(total, correct, incorrect, percentage);
    },

    updateStats() {
        var correct = QuizEngine.getCorrectAnswers();
        var incorrect = QuizEngine.getIncorrectAnswers();
        var progress = QuizEngine.getProgressPercentage();
        UI.updateStats(correct, incorrect, progress);
    },

    abortQuiz() {
        this.currentQuestionAnswered = false;
        this.importedQuestions = null;
        UI.clearImportedImages();
        QuizEngine.reset();
        UI.showScreen('welcome');
    },

    restartQuiz() {
        this.currentQuestionAnswered = false;
        this.importedQuestions = null;
        UI.clearImportedImages();
        QuizEngine.reset();
        UI.showScreen('welcome');
    },

    goHome() {
        this.currentQuestionAnswered = false;
        this.importedQuestions = null;
        UI.clearImportedImages();
        UI.showScreen('welcome');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    App.init();
});

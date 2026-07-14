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
        UI.onImport(function(file) { App.importQuestions(file); });
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

    importQuestions(file) {
        var reader = new FileReader();

        reader.onload = function(event) {
            var jsonString = event.target.result;
            var result = QuestionRepository.importQuestions(jsonString);

            if (result.success) {
                App.importedQuestions = result.questions;
                UI.showImportConfirm('Banco de preguntas importado correctamente. ' + result.count + ' preguntas cargadas.');
            } else {
                UI.showError('Error al importar: ' + result.message);
            }
        };

        reader.onerror = function() {
            UI.showError('Error al leer el archivo. Asegúrate de que sea un archivo válido.');
        };

        reader.readAsText(file);
    },

    cancelImport() {
        this.importedQuestions = null;
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
        QuizEngine.reset();
        UI.showScreen('welcome');
    },

    restartQuiz() {
        this.currentQuestionAnswered = false;
        this.importedQuestions = null;
        QuizEngine.reset();
        UI.showScreen('welcome');
    },

    goHome() {
        this.currentQuestionAnswered = false;
        this.importedQuestions = null;
        UI.showScreen('welcome');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    App.init();
});

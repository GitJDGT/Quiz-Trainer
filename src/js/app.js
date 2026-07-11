var App = {
    currentQuestionAnswered: false,

    init() {
        UI.init();
        this.bindEvents();
        UI.showScreen('welcome');
    },

    bindEvents() {
        UI.onStart(function() { App.startQuiz(); });
        UI.onAnswer(function() { App.submitAnswer(); });
        UI.onNext(function() { App.nextQuestion(); });
        UI.onRestart(function() { App.restartQuiz(); });
        UI.onRetry(function() { App.startQuiz(); });
        UI.onOptionSelect(function(optionId) { App.onOptionSelected(optionId); });
    },

    startQuiz() {
        this.currentQuestionAnswered = false;
        var result = QuizEngine.init();

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

    onOptionSelected(optionId) {
        if (this.currentQuestionAnswered) {
            return;
        }

        UI.showAnswerButton();
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
        UI.hideAnswerButton();
        UI.showFeedback(isCorrect);
        UI.showNextButton();
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

    restartQuiz() {
        this.currentQuestionAnswered = false;
        QuizEngine.reset();
        UI.showScreen('welcome');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    App.init();
});

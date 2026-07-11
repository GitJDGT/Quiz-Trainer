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
            UI.showResults();
            return;
        }

        var question = QuizEngine.getCurrentQuestion();

        if (!question) {
            UI.showResults();
            return;
        }

        UI.showQuestion(question, QuizEngine.getCurrentQuestionNumber(), QuizEngine.getTotalQuestions());
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

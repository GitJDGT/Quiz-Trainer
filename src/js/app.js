var App = {
    init() {
        UI.init();
        this.bindEvents();
        UI.showScreen('welcome');
    },

    bindEvents() {
        UI.onStart(function() { App.startQuiz(); });
        UI.onNext(function() { App.nextQuestion(); });
        UI.onRestart(function() { App.restartQuiz(); });
        UI.onRetry(function() { App.startQuiz(); });
    },

    startQuiz() {
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

    nextQuestion() {
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
        QuizEngine.reset();
        UI.showScreen('welcome');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    App.init();
});

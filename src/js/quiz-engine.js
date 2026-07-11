var QuizEngine = {
    init() {
        var result = QuestionRepository.loadQuestions();
        
        if (!result.success) {
            return { success: false, message: result.message };
        }

        SessionManager.init(result.questions);
        
        return { success: true };
    },

    getCurrentQuestion() {
        return SessionManager.getCurrentQuestion();
    },

    hasNextQuestion() {
        return SessionManager.hasNextQuestion();
    },

    moveToNextQuestion() {
        return SessionManager.moveToNextQuestion();
    },

    isSessionComplete() {
        return SessionManager.isSessionComplete();
    },

    getTotalQuestions() {
        return SessionManager.getTotalQuestions();
    },

    getCurrentQuestionNumber() {
        return SessionManager.getCurrentQuestionNumber();
    },

    reset() {
        SessionManager.reset();
    }
};

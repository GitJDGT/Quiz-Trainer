var QuizEngine = {
    init() {
        var result = QuestionRepository.loadQuestions();
        
        if (!result.success) {
            return { success: false, message: result.message };
        }

        SessionManager.init(result.questions);
        
        return { success: true };
    },

    initWithQuestions(questions) {
        if (!questions || questions.length === 0) {
            return { success: false, message: 'No se proporcionaron preguntas válidas.' };
        }

        SessionManager.init(questions);
        
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

    recordAnswer(isCorrect) {
        SessionManager.recordAnswer(isCorrect);
    },

    getCorrectAnswers() {
        return SessionManager.getCorrectAnswers();
    },

    getIncorrectAnswers() {
        return SessionManager.getIncorrectAnswers();
    },

    getAnsweredQuestions() {
        return SessionManager.getAnsweredQuestions();
    },

    getProgressPercentage() {
        return SessionManager.getProgressPercentage();
    },

    reset() {
        SessionManager.reset();
    }
};

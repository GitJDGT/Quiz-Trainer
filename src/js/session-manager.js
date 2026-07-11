const SessionManager = {
    currentQuestionIndex: 0,
    questions: [],

    init(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
    },

    getCurrentQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            return null;
        }
        return this.questions[this.currentQuestionIndex];
    },

    getTotalQuestions() {
        return this.questions.length;
    },

    getCurrentQuestionNumber() {
        return this.currentQuestionIndex + 1;
    },

    reset() {
        this.currentQuestionIndex = 0;
        this.questions = [];
    }
};

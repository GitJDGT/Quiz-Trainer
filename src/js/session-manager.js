var SessionManager = {
    currentQuestionIndex: 0,
    questions: [],
    correctAnswers: 0,
    incorrectAnswers: 0,

    init(questions) {
        this.questions = this.shuffleQuestions(questions);
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
    },

    shuffleQuestions(questions) {
        var shuffled = questions.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled;
    },

    getCurrentQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            return null;
        }
        return this.questions[this.currentQuestionIndex];
    },

    hasNextQuestion() {
        return this.currentQuestionIndex < this.questions.length - 1;
    },

    moveToNextQuestion() {
        if (this.hasNextQuestion()) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    },

    isSessionComplete() {
        return this.currentQuestionIndex >= this.questions.length;
    },

    getTotalQuestions() {
        return this.questions.length;
    },

    getCurrentQuestionNumber() {
        return this.currentQuestionIndex + 1;
    },

    recordAnswer(isCorrect) {
        if (isCorrect) {
            this.correctAnswers++;
        } else {
            this.incorrectAnswers++;
        }
    },

    getCorrectAnswers() {
        return this.correctAnswers;
    },

    getIncorrectAnswers() {
        return this.incorrectAnswers;
    },

    getAnsweredQuestions() {
        return this.correctAnswers + this.incorrectAnswers;
    },

    getProgressPercentage() {
        if (this.questions.length === 0) {
            return 0;
        }
        return Math.round((this.getAnsweredQuestions() / this.questions.length) * 100);
    },

    reset() {
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
    }
};

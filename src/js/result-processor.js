const ResultProcessor = {
    calculateResults() {
        return {
            totalQuestions: 0,
            correctAnswers: 0,
            incorrectAnswers: 0,
            percentage: 0
        };
    },

    formatResults(results) {
        return {
            total: results.totalQuestions,
            correct: results.correctAnswers,
            incorrect: results.incorrectAnswers,
            percentage: `${results.percentage}%`
        };
    }
};

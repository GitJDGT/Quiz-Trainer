var UI = {
    elements: {
        welcomeScreen: null,
        questionScreen: null,
        resultsScreen: null,
        errorScreen: null,
        startButton: null,
        answerButton: null,
        nextButton: null,
        restartButton: null,
        retryButton: null,
        questionImage: null,
        questionStatement: null,
        optionsContainer: null,
        feedbackMessage: null,
        currentQuestion: null,
        totalQuestions: null,
        correctCount: null,
        incorrectCount: null,
        progressPercentage: null,
        progressBarFill: null,
        finalTotal: null,
        finalCorrect: null,
        finalIncorrect: null,
        finalPercentage: null,
        errorMessage: null
    },

    init() {
        this.elements.welcomeScreen = document.getElementById('welcome-screen');
        this.elements.questionScreen = document.getElementById('question-screen');
        this.elements.resultsScreen = document.getElementById('results-screen');
        this.elements.errorScreen = document.getElementById('error-screen');
        this.elements.startButton = document.getElementById('start-button');
        this.elements.answerButton = document.getElementById('answer-button');
        this.elements.nextButton = document.getElementById('next-button');
        this.elements.restartButton = document.getElementById('restart-button');
        this.elements.retryButton = document.getElementById('retry-button');
        this.elements.questionImage = document.getElementById('question-image');
        this.elements.questionStatement = document.getElementById('question-statement');
        this.elements.optionsContainer = document.getElementById('options-container');
        this.elements.feedbackMessage = document.getElementById('feedback-message');
        this.elements.currentQuestion = document.getElementById('current-question');
        this.elements.totalQuestions = document.getElementById('total-questions');
        this.elements.correctCount = document.getElementById('correct-count');
        this.elements.incorrectCount = document.getElementById('incorrect-count');
        this.elements.progressPercentage = document.getElementById('progress-percentage');
        this.elements.progressBarFill = document.querySelector('.progress-bar-fill');
        this.elements.finalTotal = document.getElementById('final-total');
        this.elements.finalCorrect = document.getElementById('final-correct');
        this.elements.finalIncorrect = document.getElementById('final-incorrect');
        this.elements.finalPercentage = document.getElementById('final-percentage');
        this.elements.errorMessage = document.getElementById('error-message');
    },

    showScreen(screenName) {
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.questionScreen.classList.remove('active');
        this.elements.resultsScreen.classList.remove('active');
        this.elements.errorScreen.classList.remove('active');

        switch (screenName) {
            case 'welcome':
                this.elements.welcomeScreen.classList.add('active');
                break;
            case 'question':
                this.elements.questionScreen.classList.add('active');
                break;
            case 'results':
                this.elements.resultsScreen.classList.add('active');
                break;
            case 'error':
                this.elements.errorScreen.classList.add('active');
                break;
        }
    },

    showError(message) {
        this.elements.errorMessage.textContent = message;
        this.showScreen('error');
    },

    showQuestion(question, questionNumber, totalQuestions) {
        this.elements.currentQuestion.textContent = questionNumber;
        this.elements.totalQuestions.textContent = totalQuestions;

        this.elements.questionStatement.textContent = question.statement;

        if (question.image) {
            this.elements.questionImage.innerHTML = '<img src="assets/question-banks/images/' + question.image + '" alt="Imagen de la pregunta">';
            this.elements.questionImage.style.display = 'block';
        } else {
            this.elements.questionImage.innerHTML = '';
            this.elements.questionImage.style.display = 'none';
        }

        this.renderOptions(question.options);
        this.hideFeedback();
        this.enableAnswerButton();
        this.hideAnswerButton();
        this.hideNextButton();
        this.enableOptions();

        this.showScreen('question');
    },

    renderOptions(options) {
        this.elements.optionsContainer.innerHTML = '';

        options.forEach(function(option) {
            var optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = '<input type="radio" name="answer" id="option-' + option.id + '" value="' + option.id + '">' +
                '<label for="option-' + option.id + '">' + option.text + '</label>';
            this.elements.optionsContainer.appendChild(optionElement);
        }.bind(this));
    },

    getSelectedOption() {
        var selected = this.elements.optionsContainer.querySelector('input[name="answer"]:checked');
        return selected ? selected.value : null;
    },

    showAnswerButton() {
        this.elements.answerButton.style.display = 'inline-block';
    },

    hideAnswerButton() {
        this.elements.answerButton.style.display = 'none';
    },

    enableAnswerButton() {
        this.elements.answerButton.disabled = false;
    },

    disableAnswerButton() {
        this.elements.answerButton.disabled = true;
    },

    showNextButton() {
        this.elements.nextButton.style.display = 'inline-block';
    },

    hideNextButton() {
        this.elements.nextButton.style.display = 'none';
    },

    showFeedback(isCorrect) {
        this.elements.feedbackMessage.textContent = isCorrect ? 'Correcto' : 'Incorrecto';
        this.elements.feedbackMessage.className = 'feedback-message ' + (isCorrect ? 'feedback-correct' : 'feedback-incorrect');
        this.elements.feedbackMessage.style.display = 'block';
    },

    hideFeedback() {
        this.elements.feedbackMessage.style.display = 'none';
        this.elements.feedbackMessage.textContent = '';
        this.elements.feedbackMessage.className = 'feedback-message';
    },

    updateStats(correct, incorrect, progress) {
        this.elements.correctCount.textContent = correct;
        this.elements.incorrectCount.textContent = incorrect;
        this.elements.progressPercentage.textContent = progress + '%';
        this.elements.progressBarFill.style.width = progress + '%';
    },

    disableOptions() {
        var options = this.elements.optionsContainer.querySelectorAll('.option');
        options.forEach(function(option) {
            option.style.pointerEvents = 'none';
        });
    },

    enableOptions() {
        var options = this.elements.optionsContainer.querySelectorAll('.option');
        options.forEach(function(option) {
            option.style.pointerEvents = 'auto';
            option.classList.remove('selected');
        });
    },

    highlightSelectedOption(optionId) {
        var options = this.elements.optionsContainer.querySelectorAll('.option');
        options.forEach(function(option) {
            option.classList.remove('selected');
            var radio = option.querySelector('input[type="radio"]');
            if (radio && radio.value === optionId) {
                option.classList.add('selected');
            }
        });
    },

    showResults(total, correct, incorrect, percentage) {
        this.elements.finalTotal.textContent = total;
        this.elements.finalCorrect.textContent = correct;
        this.elements.finalIncorrect.textContent = incorrect;
        this.elements.finalPercentage.textContent = percentage + '%';
        this.elements.progressBarFill.style.width = '100%';
        this.showScreen('results');
    },

    onStart(callback) {
        this.elements.startButton.addEventListener('click', callback);
    },

    onAnswer(callback) {
        this.elements.answerButton.addEventListener('click', callback);
    },

    onNext(callback) {
        this.elements.nextButton.addEventListener('click', callback);
    },

    onRestart(callback) {
        this.elements.restartButton.addEventListener('click', callback);
    },

    onRetry(callback) {
        this.elements.retryButton.addEventListener('click', callback);
    },

    onOptionSelect(callback) {
        this.elements.optionsContainer.addEventListener('change', function(event) {
            if (event.target.name === 'answer') {
                callback(event.target.value);
            }
        });
    }
};

const UI = {
    elements: {
        welcomeScreen: null,
        questionScreen: null,
        errorScreen: null,
        startButton: null,
        retryButton: null,
        questionImage: null,
        questionStatement: null,
        optionsContainer: null,
        currentQuestion: null,
        totalQuestions: null,
        progressBarFill: null,
        errorMessage: null
    },

    init() {
        this.elements.welcomeScreen = document.getElementById('welcome-screen');
        this.elements.questionScreen = document.getElementById('question-screen');
        this.elements.errorScreen = document.getElementById('error-screen');
        this.elements.startButton = document.getElementById('start-button');
        this.elements.retryButton = document.getElementById('retry-button');
        this.elements.questionImage = document.getElementById('question-image');
        this.elements.questionStatement = document.getElementById('question-statement');
        this.elements.optionsContainer = document.getElementById('options-container');
        this.elements.currentQuestion = document.getElementById('current-question');
        this.elements.totalQuestions = document.getElementById('total-questions');
        this.elements.progressBarFill = document.querySelector('.progress-bar-fill');
        this.elements.errorMessage = document.getElementById('error-message');
    },

    showScreen(screenName) {
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.questionScreen.classList.remove('active');
        this.elements.errorScreen.classList.remove('active');

        switch (screenName) {
            case 'welcome':
                this.elements.welcomeScreen.classList.add('active');
                break;
            case 'question':
                this.elements.questionScreen.classList.add('active');
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

        const progressPercentage = ((questionNumber - 1) / totalQuestions) * 100;
        this.elements.progressBarFill.style.width = `${progressPercentage}%`;

        this.elements.questionStatement.textContent = question.statement;

        if (question.image) {
            this.elements.questionImage.innerHTML = '<img src="assets/question-banks/images/' + question.image + '" alt="Imagen de la pregunta">';
            this.elements.questionImage.style.display = 'block';
        } else {
            this.elements.questionImage.innerHTML = '';
            this.elements.questionImage.style.display = 'none';
        }

        this.renderOptions(question.options);

        this.showScreen('question');
    },

    renderOptions(options) {
        this.elements.optionsContainer.innerHTML = '';

        options.forEach(function(option) {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = '<input type="radio" name="answer" id="option-' + option.id + '" value="' + option.id + '">' +
                '<label for="option-' + option.id + '">' + option.text + '</label>';
            this.elements.optionsContainer.appendChild(optionElement);
        }.bind(this));
    },

    onStart(callback) {
        this.elements.startButton.addEventListener('click', callback);
    },

    onRetry(callback) {
        this.elements.retryButton.addEventListener('click', callback);
    }
};

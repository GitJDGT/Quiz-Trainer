var UI = {
    elements: {
        welcomeScreen: null,
        importConfirmScreen: null,
        questionScreen: null,
        resultsScreen: null,
        errorScreen: null,
        startButton: null,
        importButton: null,
        fileInput: null,
        startImportedButton: null,
        cancelImportButton: null,
        importConfirmMessage: null,
        answerButton: null,
        nextButton: null,
        abortButton: null,
        restartButton: null,
        exportButton: null,
        errorHomeButton: null,
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

    selectedOptionIndex: -1,
    escPressCount: 0,
    escPressTimer: null,

    init() {
        this.elements.welcomeScreen = document.getElementById('welcome-screen');
        this.elements.importConfirmScreen = document.getElementById('import-confirm-screen');
        this.elements.questionScreen = document.getElementById('question-screen');
        this.elements.resultsScreen = document.getElementById('results-screen');
        this.elements.errorScreen = document.getElementById('error-screen');
        this.elements.startButton = document.getElementById('start-button');
        this.elements.importButton = document.getElementById('import-button');
        this.elements.fileInput = document.getElementById('file-input');
        this.elements.startImportedButton = document.getElementById('start-imported-button');
        this.elements.cancelImportButton = document.getElementById('cancel-import-button');
        this.elements.importConfirmMessage = document.getElementById('import-confirm-message');
        this.elements.answerButton = document.getElementById('answer-button');
        this.elements.nextButton = document.getElementById('next-button');
        this.elements.abortButton = document.getElementById('abort-button');
        this.elements.restartButton = document.getElementById('restart-button');
        this.elements.exportButton = document.getElementById('export-button');
        this.elements.errorHomeButton = document.getElementById('error-home-button');
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

        this.setupKeyboardNavigation();
    },

    setupKeyboardNavigation() {
        document.addEventListener('keydown', function(event) {
            var activeScreen = document.querySelector('.screen.active');
            
            if (!activeScreen) return;

            if (activeScreen.id === 'question-screen') {
                this.handleQuestionScreenKeyboard(event);
            }
        }.bind(this));
    },

    handleQuestionScreenKeyboard(event) {
        var options = this.elements.optionsContainer.querySelectorAll('.option');
        var isAnswered = this.elements.answerButton.disabled && this.elements.nextButton.disabled === false;

        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                if (!isAnswered) {
                    this.selectPreviousOption(options);
                }
                break;

            case 'ArrowDown':
            case 'ArrowRight':
                event.preventDefault();
                if (!isAnswered) {
                    this.selectNextOption(options);
                }
                break;

            case 'Enter':
                event.preventDefault();
                if (!isAnswered && !this.elements.answerButton.disabled) {
                    this.elements.answerButton.click();
                } else if (isAnswered && !this.elements.nextButton.disabled) {
                    this.elements.nextButton.click();
                }
                break;

            case 'Escape':
                event.preventDefault();
                this.escPressCount++;
                
                if (this.escPressTimer) {
                    clearTimeout(this.escPressTimer);
                }

                if (this.escPressCount >= 2) {
                    this.escPressCount = 0;
                    this.elements.abortButton.click();
                } else {
                    this.escPressTimer = setTimeout(function() {
                        this.escPressCount = 0;
                    }.bind(this), 500);
                }
                break;
        }
    },

    selectPreviousOption(options) {
        if (options.length === 0) return;

        if (this.selectedOptionIndex <= 0) {
            this.selectedOptionIndex = options.length - 1;
        } else {
            this.selectedOptionIndex--;
        }

        this.selectOptionByIndex(options, this.selectedOptionIndex);
    },

    selectNextOption(options) {
        if (options.length === 0) return;

        if (this.selectedOptionIndex >= options.length - 1) {
            this.selectedOptionIndex = 0;
        } else {
            this.selectedOptionIndex++;
        }

        this.selectOptionByIndex(options, this.selectedOptionIndex);
    },

    selectOptionByIndex(options, index) {
        if (index < 0 || index >= options.length) return;

        var radio = options[index].querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event('change', { bubbles: true }));
        }
    },

    showScreen(screenName) {
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.importConfirmScreen.classList.remove('active');
        this.elements.questionScreen.classList.remove('active');
        this.elements.resultsScreen.classList.remove('active');
        this.elements.errorScreen.classList.remove('active');

        switch (screenName) {
            case 'welcome':
                this.elements.welcomeScreen.classList.add('active');
                break;
            case 'import-confirm':
                this.elements.importConfirmScreen.classList.add('active');
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

    showImportConfirm(message) {
        this.elements.importConfirmMessage.textContent = message;
        this.showScreen('import-confirm');
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
        this.disableNextButton();
        this.enableOptions();
        this.selectedOptionIndex = -1;

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

    enableAnswerButton() {
        this.elements.answerButton.disabled = false;
    },

    disableAnswerButton() {
        this.elements.answerButton.disabled = true;
    },

    enableNextButton() {
        this.elements.nextButton.disabled = false;
    },

    disableNextButton() {
        this.elements.nextButton.disabled = true;
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
        options.forEach(function(option, index) {
            option.classList.remove('selected');
            var radio = option.querySelector('input[type="radio"]');
            if (radio && radio.value === optionId) {
                option.classList.add('selected');
                this.selectedOptionIndex = index;
            }
        }.bind(this));
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

    onImport(callback) {
        this.elements.importButton.addEventListener('click', function() {
            this.elements.fileInput.click();
        }.bind(this));

        this.elements.fileInput.addEventListener('change', function(event) {
            var file = event.target.files[0];
            if (file) {
                callback(file);
            }
            event.target.value = '';
        });
    },

    onStartImported(callback) {
        this.elements.startImportedButton.addEventListener('click', callback);
    },

    onCancelImport(callback) {
        this.elements.cancelImportButton.addEventListener('click', callback);
    },

    onAnswer(callback) {
        this.elements.answerButton.addEventListener('click', callback);
    },

    onNext(callback) {
        this.elements.nextButton.addEventListener('click', callback);
    },

    onAbort(callback) {
        this.elements.abortButton.addEventListener('click', callback);
    },

    onRestart(callback) {
        this.elements.restartButton.addEventListener('click', callback);
    },

    onExport(callback) {
        this.elements.exportButton.addEventListener('click', callback);
    },

    onErrorHome(callback) {
        this.elements.errorHomeButton.addEventListener('click', callback);
    },

    onOptionSelect(callback) {
        this.elements.optionsContainer.addEventListener('change', function(event) {
            if (event.target.name === 'answer') {
                callback(event.target.value);
            }
        });
    }
};

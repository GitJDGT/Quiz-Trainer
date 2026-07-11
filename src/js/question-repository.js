var QuestionRepository = {
    questions: [],

    loadQuestions() {
        try {
            var data = QuestionsData;
            var validationResult = this.validateQuestions(data);

            if (!validationResult.isValid) {
                throw new Error(validationResult.message);
            }

            this.questions = data;
            return { success: true, questions: this.questions };
        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    validateQuestions(data) {
        if (!Array.isArray(data)) {
            return { isValid: false, message: 'El banco de preguntas debe ser un arreglo.' };
        }

        if (data.length === 0) {
            return { isValid: false, message: 'El banco de preguntas está vacío.' };
        }

        for (var i = 0; i < data.length; i++) {
            var question = data[i];
            var questionValidation = this.validateQuestion(question, i + 1);
            
            if (!questionValidation.isValid) {
                return questionValidation;
            }
        }

        return { isValid: true };
    },

    validateQuestion(question, index) {
        if (!question.id) {
            return { isValid: false, message: 'Pregunta ' + index + ": Falta el campo 'id'." };
        }

        if (!question.statement) {
            return { isValid: false, message: 'Pregunta ' + index + ": Falta el campo 'statement'." };
        }

        if (!Array.isArray(question.options) || question.options.length < 2) {
            return { isValid: false, message: 'Pregunta ' + index + ': Debe tener al menos 2 opciones.' };
        }

        if (!question.correctAnswer) {
            return { isValid: false, message: 'Pregunta ' + index + ": Falta el campo 'correctAnswer'." };
        }

        var optionIds = {};
        for (var j = 0; j < question.options.length; j++) {
            var option = question.options[j];
            
            if (!option.id) {
                return { isValid: false, message: 'Pregunta ' + index + ', Opción ' + (j + 1) + ": Falta el campo 'id'." };
            }

            if (!option.text) {
                return { isValid: false, message: 'Pregunta ' + index + ', Opción ' + (j + 1) + ": Falta el campo 'text'." };
            }

            if (optionIds[option.id]) {
                return { isValid: false, message: 'Pregunta ' + index + ": ID de opción duplicado '" + option.id + "'." };
            }

            optionIds[option.id] = true;
        }

        if (!optionIds[question.correctAnswer]) {
            return { isValid: false, message: 'Pregunta ' + index + ": 'correctAnswer' no coincide con ninguna opción." };
        }

        return { isValid: true };
    },

    getQuestions() {
        return this.questions;
    },

    getQuestionById(id) {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id === id) {
                return this.questions[i];
            }
        }
        return null;
    },

    getQuestionCount() {
        return this.questions.length;
    }
};

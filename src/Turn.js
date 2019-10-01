class Turn {
    constructor(personGuess, card) {
        this.personGuess = personGuess;
        this.card = card;   
    }

    returnGuess() {
        return this.personGuess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess() {
        return this.personGuess === this.card.correctAnswer;
    }

    giveFeedback() {
        if (this.evaluateGuess()) {
            return 'correct!'
        }
        return 'incorrect!'
    }
}


module.exports = Turn;
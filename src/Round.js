const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.currentCard = deck.cards[0];
        this.turnsCount = 0;
        this.incorrectGuesses = []
    }

    returnCurrentCard() {
        this.currentCard = this.deck[this.turnsCount]
        return this.currentCard;
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard)
        this.turnsCount++;
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        return turn.giveFeedback()
    }
    
    calculatePercentCorrect() {
        return ((this.incorrectGuesses.length/this.turnsCount) *100)
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly!`
    }
}

module.exports = Round;
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');


describe('Round', () => {

    let card1;
    let card2;
    let card3;
    let deck;
    let round;
    let turn;

    beforeEach(() => {
        card1 = new Card({
            'id': 1,
            'question': 'What allows you to define a set of related information using key-value pairs?',
            'answers': ['object', 'array', 'function'],
            'correctAnswer': 'object'
        });
        card2 = new Card({
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
        });
        card3 = new Card({
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        });
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        turn = new Turn('array', card1)
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should have a turn count with a default value of zero', () => {
        expect(round.turnsCount).to.equal(0)
    });

    it('should have an incorrect guesses property that is set to an empty array', () => {
        expect(round.incorrectGuesses).to.eql([])
    });

    it('should return the current card in the deck', () => {
        round.returnCurrentCard()
        expect(round.currentCard).to.equal(card1);
        round.takeTurn()
        round.returnCurrentCard()
        expect(round.currentCard).to.equal(card2);
        round.takeTurn()
        round.returnCurrentCard()
        expect(round.currentCard).to.equal(card3);
    });

    it('should update the turns count when taking a turn', () => {
        round.takeTurn('guess');
        expect(round.turnsCount).to.equal(1);
        round.takeTurn('guess');
        expect(round.turnsCount).to.equal(2);
    });

    it('should store incorrect guesses in an array by id', () => {
        round.takeTurn('guess');
        round.returnCurrentCard()
        expect(round.incorrectGuesses).to.eql([1]);
        round.takeTurn('potato');
        round.returnCurrentCard()
        expect(round.incorrectGuesses).to.eql([1,2]);
    });

    it('should calculate the percent of answers correct', () => {
        round.takeTurn('guess');
        round.returnCurrentCard()
        round.takeTurn('array');
        round.returnCurrentCard()
        round.takeTurn('mutator method');
        expect(round.calculatePercentCorrect()).to.equal('33');
    });

});
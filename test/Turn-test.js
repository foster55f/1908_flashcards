const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

    let card;
    let turn;

    beforeEach(() => {
        card = new Card({
            'id': 1,
            'question': 'What allows you to define a set of related information using key-value pairs?',
            'answers': ['object', 'array', 'function'],
            'correctAnswer': 'object'
        });
        turn = new Turn('array', card)
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should return a guess', () => {
        expect(turn.returnGuess()).to.equal('array');
    });
    
    it('should return a card', () => {
        console.log(card)
        expect(turn.returnCard()).to.eql(card);
    });

    it('should return false for answering incorrectly', () => {
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should return incorrect! for answering incorrectly and correct! for answering correct', () => {
        expect(turn.giveFeedback()).to.equal('incorrect!');
    });
});
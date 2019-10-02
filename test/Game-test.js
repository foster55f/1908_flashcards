const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

    let card;
    let turn;
    let deck;
    let round;
    let game;
  
  
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });
})
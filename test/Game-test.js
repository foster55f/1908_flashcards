const chai = require('chai');
const expect = chai.expect;


const Game = require('../src/Game');

describe('Game', () => {
    
    let game;
    
    beforeEach(() => {
        game = new Game()
    });
  
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should have a default value of 0 for the First Round', () => {
        expect(game.currentRound).to.eql(0)
    });
})
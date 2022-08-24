const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Game', () => {
  it ('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  let game;

  beforeEach(() => {
    game = new Game();
  })

  it ('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it ('should have the ability to keep track of the current round', () => {
    expect(game).to.have.property('currentRound');
  });

  it ('should have a start method', () => {
    expect(game).to.respondTo('start');
  });
});

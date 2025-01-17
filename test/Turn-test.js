const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', () => {

  let currentCard;
  let currentCard2;
  let turn;
  let turn2;
  let turn3;

  beforeEach(() => {
    currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    currentCard2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks')
    turn = new Turn('object', currentCard);
    turn2 = new Turn('array', currentCard);
    turn3 = new Turn('hooks', currentCard2);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a user guess and the current card in play', () => {
    expect(turn.guess).to.equal('object');
    expect(turn2.guess).to.equal('array');

    expect(turn.currentCard).to.equal(currentCard);
    expect(turn3.currentCard).to.equal(currentCard2)
  });

  it('should return the user guess', () => {
    expect(turn.returnGuess()).to.equal('object');
    expect(turn2.returnGuess()).to.equal('array');
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(currentCard);
    expect(turn3.returnCard()).to.equal(currentCard2);
  });

  it('should be able to evaluate whether a user guess is corret or incorrect', () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to give a user feedback on their guess', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});

const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  let card;
  let card2;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
  })

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store an id', function() {
    expect(card.id).to.equal(1);
    expect(card2.id).to.equal(2);
  });

  it('should store a question', function() {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card2.question).to.equal('What can you use to make unit testing code DRYer?');
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card2.answers).to.deep.equal(['hooks', 'assertion libraries', 'Mocha']);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
    expect(card2.correctAnswer).to.equal('hooks');
  });
});

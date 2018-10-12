var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('the calculator can add', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal)
  })

  it('the calculator can subtract', function(){
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(-3, calculator.runningTotal)
  })


  it('the calculator can multiply', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal)
  })


  it('the calculator can divide', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  })

  it('the calculator can not divide by zero', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(0);
    calculator.operatorClick('=');
    assert.equal('Not a number', calculator.runningTotal)
  })
  


});

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should concatenate multiple number button clicks', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('22')
  })


it('should chain multiple operations together', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('62')
})


it('should clear the running total without affecting the calculation', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number4')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#clear')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('20')
})


it('should have devide operations', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number8')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2')
})

it('should have subtract operations', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number8')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4')
})

it('should have multiply operations chained together', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number8')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('64')
})

it('should be able to show negative number', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-6')
})

it('should be able to show decimals', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
})


it('should be able to show very large numbers', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('100000000000000')
})

it('should not be able to devide by zero', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('Not a number')
})

});

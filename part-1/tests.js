const expect = require('chai').expect
const {month, reverseSentence} = require('./functions')

describe('Month function', function(){
  it('Should accept a date object', function(){
    let date = new Date(2017, 5, 19)
    expect(month(date)).to.eql('June')
  })
  it('Should not accept a string value as an argument', function(){
    let date = '2017, 5, 19'
    expect(month.bind(date)).to.throw(Error, 'Error: Invalid Input, type in a date object')
  })
})

describe('Reverse function', function(){
  it('Should accept a string argument', function(){
    let stringValue = 'The cat jumped over the dog.'
    expect(reverseSentence(stringValue)).to.eql("dog. the over jumped cat The")
  })
  it('Should not accept a number as an argument', function(){
    let argumentValue = 2
    expect(reverseSentence.bind(argumentValue)).to.throw(Error, 'Error: Invalid Input, type in a string value')
  })
})

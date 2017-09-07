const expect = require('chai').expect
const {month, reverseSentence, nameProps, filterBetween} = require('./functions')

describe('Month function', function(){
  it('Should accept a date object as an argument', function(){
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
    expect(reverseSentence(stringValue)).to.eql('dog. the over jumped cat The')
  })
  it('Should not accept a number as an argument', function(){
    const argumentValue = 2
    expect(reverseSentence.bind(argumentValue)).to.throw(Error, 'Error: Invalid Input, type in a string value')
  })
})

describe('Names of properties function', function(){
  it('Should accept an object argument', function(){
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
     }
     expect(nameProps(friend)).to.eql(['age', 'name', 'phone'])
  })
  it('Should not accept an array as an argument', function(){
    const argumentValue = []
    expect(nameProps.bind(argumentValue)).to.throw(Error, 'Error: Invalid Input, type in an object value')
  })
})

describe('Filter between function', function(){
  it('Should accept first argument as an array and two optional minimum and maximum values', function(){
    let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
     expect(filterBetween(arr, 'chimp', 'lobster')).to.eql(['dog', 'lion', 'cow'])
  })
  it('Should not accept a string as an argument', function(){
    const argumentValue = 'hello world'
    expect(filterBetween.bind(argumentValue)).to.throw(Error, 'Error: Invalid Input, type in an array value')
  })
})

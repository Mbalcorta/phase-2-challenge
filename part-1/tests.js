const expect = require('chai').expect
const {month} = require('./functions')

describe('Month function', function(){
  it('Should accept a date object', function(){
    let date = new Date(2017, 5, 19)
    expect(month(date)).to.eql('June')
  })
  it('Should not accept a string value as an argument', function(){
    let date = '2017, 5, 19'
    expect(month.bind(date)).to.throw(Error, "Invalid Input")
  })
})

'use strict'

const monthObj = {
  0:'January',
  1:'February',
  2:'March',
  3:'April',
  4:'May',
  5:'June',
  6:'July',
  7:'August',
  8:'September',
  9:'October',
  10:'November',
  11:'December'
}

const month = (date) => {
  if(date instanceof Date){
    const month = monthObj[date.getMonth()]
    return month
  } else {
    throw new Error('Error: Invalid Input, type in a date object')
  }
}

const reverseSentence = (string) => {
  if(typeof string === 'string'){
    const arrayOfWords = string.split(' ')
    const reversedString = []
    for(var i = arrayOfWords.length-1; i >= 0; i--){
      reversedString.push(arrayOfWords[i])
    }
    return reversedString.join(' ')
  } else {
    throw new Error('Error: Invalid Input, type in a string value')
  }
}

const nameProps = (obj) => {
  if(Object.prototype.toString.call(obj) === '[object Object]'){
    return Object.getOwnPropertyNames(obj).sort((a, b) => {
      return a > b
    })
  } else {
    throw new Error('Error: Invalid Input, type in an object value')
  }
}

const filterBetween = (array, min, max) => {
  if(Array.isArray(array)){
    const filteredArray = array.filter((eachString) => {
      return eachString > min && eachString < max
    })
    return filteredArray
  } else {
    throw new Error('Error: Invalid Input, type in an array value')
  }
}

module.exports = {month, reverseSentence, nameProps, filterBetween}
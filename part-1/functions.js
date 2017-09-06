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
    throw new Error("Invalid Input")
  }
}

module.exports = {month}
//const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  let letters = [...arrayOfString]
if(arrayOfString === null){
  return null
}else if(arrayOfString === undefined){
  return undefined
}else{
  return letters.length
}
}
console.log(getMaxLengthString(null))
console.log(getMaxLengthString(undefined))
console.log(getMaxLengthString(['hello']))
//module.exports = getMaxLengthString
//TESTT

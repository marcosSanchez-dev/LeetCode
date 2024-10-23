/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let stringArray = digits.join("")

  let intArray = parseInt(stringArray)

  intArray++

  let test = (element) => Number(element)

  return Array.from(String(intArray), test)
}

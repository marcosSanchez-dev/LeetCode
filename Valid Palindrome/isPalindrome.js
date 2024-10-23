var isPalindrome = function (s) {
  let strRegex = new RegExp(/^[a-z0-9]+$/i)
  let arrStr = s.split("")
  let arrFiltered = arrStr.filter((char) => strRegex.test(char))
  let toLower = arrFiltered.map((char) => char.toLowerCase())

  let i = 0
  let j = toLower.length - 1

  while (i <= j) {
    if (toLower[i] != toLower[j]) {
      return false
    }

    i++
    j--
  }
  return true
}

const result = isPalindrome("A man, a plan, a canal: Panama")

console.log(result)

/* let strRegex = new RegExp(/^[a-z0-9]+$/i)

let result = strRegex.test(string) */

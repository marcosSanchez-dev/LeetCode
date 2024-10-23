var myAtoi = function (s) {
  let deleteSignedness = ""
  let newS = ""
  let finalS = ""

  s = s.trim()

  if (s[0] === "-") {
    deleteSignedness = s.substring(1)
  } else {
    deleteSignedness = s
  }

  for (let char of deleteSignedness) {
    if (Number(char) !== 0) {
      newS += char
    }
  }

  for (let char of newS) {
    if (Number(char)) {
      finalS += char
    } else {
      return finalS
    }
  }
  
  if(Number(finalS)) return finalS

  return 0
}

const result = myAtoi(" ")

console.log(result)

var myAtoi = function (s) {
  s = s.trim()
  if (s.length == 0) return 0

  let i = 0
  let sign = 1

  if (s[0] == "-") {
    sign = -1
    i = 1
  } else if (s[0] == "+") {
    i = 1
  }

  let num = 0

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    num = num * 10 + (s[i] - "0")
    i++
  }

  const intMax = Math.pow(2, 31) - 1
  const intMin = -Math.pow(2, 31)
  num *= sign
  if (num > intMax) return intMax
  if (num < intMin) return intMin

  return num
}

const result = myAtoi("-91283472332")

console.log(result)

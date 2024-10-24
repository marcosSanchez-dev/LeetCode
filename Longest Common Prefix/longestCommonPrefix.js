var longestCommonPrefix = function (strs) {
  let newStr = ""

  if (strs.length == 1) return strs[0]
  if (strs.length == 0) return ""

  newStr = strs[0]

  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].indexOf(newStr) !== 0) {
        newStr = newStr.substring(0, newStr.length - 1)
      }
    }
  }
  return newStr
}

var firstUniqChar = function (s) {
  let obj = {}

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (obj[char]) {
      obj[char]++
    } else {
      obj[char] = 1
    }
  }
  
  for(let j = 0; j < s.length; j++){
  	if(obj[s[j]] == 1){
    	return j
    }
  }
  
  return -1
}

const result = firstUniqChar("loveleetcode")

console.log(result)

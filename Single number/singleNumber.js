var singleNumber = function(nums) {
  
  let temp = 0;
  
  for(let i = 0; i < nums.length - 1; i++){

    temp ^= nums[i]
    console.log('temp: ' + temp)
    
  }
  
  return temp;
    
};


const result = singleNumber([4,1,2,1,2]);

console.log('result: ' + result)

var moveZeroes = function (nums) {
  let lastNonCeroNumber = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonCeroNumber] = nums[i]
      lastNonCeroNumber++
    }
  }

  for (let i = lastNonCeroNumber; i < nums.length; i++) {
    nums[i] = 0
  }

  return nums
}

const result = moveZeroes([0, 1, 0, 3, 12])

console.log("result:", result)

/*
[0,1,0,3,12]
*/

/*

  let leftPointer = 0
  let rightPointer = nums.length - 1

  while (leftPointer < nums.length && rightPointer >= 0) {
    if (
      nums[leftPointer] == 0 &&
      nums[leftPointer + 1] !== 0 &&
      nums[leftPointer + 1] !== undefined
    ) {
      [nums[leftPointer], nums[leftPointer + 1]] = [
        nums[leftPointer + 1],
        nums[leftPointer],
      ]
    } else if (
      nums[rightPointer] != 0 &&
      nums[rightPointer] != undefined &&
      nums[rightPointer - 1] == 0
    ) {
      ;[nums[rightPointer], nums[rightPointer - 1]] = [
        nums[rightPointer - 1],
        nums[rightPointer],
      ]
    }

    leftPointer++
    rightPointer--
  }


*/

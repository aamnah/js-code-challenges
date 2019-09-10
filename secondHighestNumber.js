/*
Given an array of numbers, find the second highest number
*/
function getSecondLargest(nums) {
  let distinctNums = []
  nums.map(num => {
    if (!distinctNums.includes(num)) {
      distinctNums.push(num)
    }
  })

  // by default the sort function converts to strings and compares
  // if you provide a sort function it can convert numbers
  // instead of strings
  let sortedArray = distinctNums.sort((a, b) => a - b)

  let secondHighest
  if (sortedArray.length === 1) {
    secondHighest = sortedArray[0]
  } else {
    secondHighest = sortedArray[sortedArray.length - 2]
  }
  return secondHighest
}

getSecondLargest([1, 0, 9, 9, 8, 10, 9, 6, 5, 8, 7, 6, 5, 10])
getSecondLargest([9, 5, 7, 1])
getSecondLargest([9, 0, 8, 2, 3])
getSecondLargest([1, 2, 3, 4, 5])
getSecondLargest([1])
getSecondLargest([1, 1, , 1])

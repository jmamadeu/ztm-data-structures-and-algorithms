function mergeSortedArray(array1, array2) {
  let mergedArray = []

  let count1 = 0
  let count2 = 0

  while (count1 <= array1.length && count2 <= array2.length) 
  {
    // 3 / 2 = 6
    if(array1[count1] > array2[count2]) {
      mergedArray.push(array2[count2])
      count2++
    }else if(array1[count1] < array2[count2]) {
      mergedArray.push(array1[count1])
      count1++
    }else {
      mergedArray.push(array1[count1])
      count1++
      count2++
    }
  }
  return mergedArray
}

console.log(mergeSortedArray([0,3,4,31], [4,6,30]))
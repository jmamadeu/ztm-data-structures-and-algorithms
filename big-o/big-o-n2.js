const elements = ["a", "b", "c", "d", "e"]

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairs(elements) // O (n * n) => O(n^2) Quadratic Time
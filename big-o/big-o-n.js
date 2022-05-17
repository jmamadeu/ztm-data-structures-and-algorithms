const elements = Array(10000).fill("nemo")

function findANemo(array) {
  const before = performance.now()
  for (let i = 0; i < array.length; i++) {
    if(array[i] === "nemo") {
      console.log("Found Nemo")
    }
    
  }
  const after = performance.now()

  console.log(`it took ${after - before}s` )
}

findANemo(elements) // Big(n) - Linear 

const boxes = [12,2,3,4]
const boxes2 = [1,2]

function printElements(first, last ) {

  for(let i = 0; i < first.length; i++) {
    console.log(i, "first loop")
  }


  for(let i = 0; i < last.length; i++) {
    console.log(i, "last loop")
  }
}

printElements(boxes, boxes2) // O(a + b)
// Reverse string

// hi

function reverseString(string) {
  let other = []
  string = string.split("")
  for(let i = string.length - 1; i >= 0; i--) {

    other[string.length - 1 - i] = string[i]
  }

  return other.join("")
}

let str = "Hi My name is!"

console.log(reverseString(str))
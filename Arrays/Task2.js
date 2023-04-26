// function num(numbers){
//   let temp = numbers.slice(1)
//     temp.push(numbers[0])
//     return temp
//   //   return[...numbers.slice(1),numbers[0]]
//
// }
//
// let arr = [1,2,3,4,5]
// console.log(num(arr))

// option 2

function num(numbers){
  let temp = numbers[0]
  for (let i= 0; i<arr.length - 1; i++){
    numbers[i] = numbers[i + 1]
  }
  numbers[numbers.length - 1] = temp
  return numbers
}

let arr = [1,2,3,4,5]
console.log(num(arr))


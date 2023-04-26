function num(numbers){
  let temp = numbers.slice(1)
    temp.push(numbers[0])
    return temp
  //   return[...numbers.slice(1),numbers[0]]

}

let arr = [1,2,3,4,5]
console.log(num(arr))
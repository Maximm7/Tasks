function sumNum(array){
    let sum = 0
    for (let i = 0; i<arr.length; i++){
        sum += array[i]
    }

    sum = sum / array.length
    return sum.toFixed(2)
}
let arr = [1,2,3,4,5,6]
console.log(sumNum(arr))
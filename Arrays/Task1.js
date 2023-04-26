// function sumNum(array){
//     let sum = 0
//     for (let i = 0; i<arr.length; i++){
//         sum += array[i]
//     }
//
//     sum = sum / array.length
//     return sum.toFixed(2)
// }
//
// let arr = [1,2,3,4,5,6]
// console.log(sumNum(arr))


// option 2: with map-reduce

// function sumNum(array){
//     return (array.reduce((acc,value)=>acc+=value,0)/array.length).toFixed(2)
// }
// let arr = [1,2,3,4,5,6]
// console.log(sumNum(arr))


// option 3: with forEach
function sumNum(array){
    let sum = 0
    array.forEach((num)=>{
        sum+=num
    })
    return (sum / arr.length).toFixed(2)
}

let arr = [1,2,3,4,5,6]
console.log(sumNum(arr))
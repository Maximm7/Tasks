// function sumNum(array){
//     let sum = 0
//     for (let i = 0; i<arr.length; i++){
//         sum += array[i]
//     }
//     sum = sum / array.length
//     return sum.toFixed(2)
// }
// let arr = [1,2,3,4,5,6]
// console.log(sumNum(arr))


//______________________


// function num(numbers){
//   let temp = numbers.slice(1)
//     temp.push(numbers[0])
//     return temp
//   //   return[...numbers.slice(1),numbers[0]]
// }
//
// let arr = [1,2,3,4,5]
// console.log(num(arr))

//______________________

// function info (employees){
//
//     return employees.map(employee => `Name: ${employee.name}, age: ${employee.age}`);
// }
// let employees = [
//     {name: 'John', age: 23},
//     {name: 'Alex', age: 25},
//     {name: 'Alice',age: 21}
// ]
//
// console.log(info(employees))

//_________________________

// function sumSalaries(salar){
//     let sum = 0
//     Object.keys(salar).forEach(el=>{
//         sum+=salar[el]
//     })
//     return sum
//     // return Object.keys(salar).reduce((acc,value)=>acc+=salar[value],0)
// }
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// console.log(sumSalaries(salaries))

//_________________________

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if(typeof obj[key] == 'number'){
//             obj[key] *= 2
//         }
//     }
//     return obj
// }
//
//
//
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// }
// multiplyNumeric(menu)
// console.log(menu)



//__________________________



// const ladder = {
//     step: 0,
//     showStep: function (){
//         console.log(`Вы находитесь на ступенке ${this.step}`)
//     },
//     up: function (){
//         this.step++
//     },
//     down: function (){
//         this.step--
//     }
// }
//
// ladder.showStep()
// ladder.up()
// ladder.up()
// ladder.up()
// ladder.showStep()
// ladder.up()
// ladder.up()
// ladder.showStep()






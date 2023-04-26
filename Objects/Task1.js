function sumSalaries(salar){
    let sum = 0
    Object.keys(salar).forEach(el=>{
        sum+=salar[el]
    })
    return sum
    // return Object.keys(salar).reduce((acc,value)=>acc+=salar[value],0)
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(sumSalaries(salaries))
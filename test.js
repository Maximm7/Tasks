// function makeUser (name, age){
//     return {
//        name,
//        age
//     }
// }
//
// let user = makeUser('John', 30)
// console.log(`My name is ${user.name}, I am ${user.age} years old!`)

// let user = {
//     name: 'John',
//     age: 25,
//     isAdmin: true
// }
//
// for (let key in user){
//     console.log(key)
//     console.log(user[key])
// }


// function isEmpty(obj){
//     for (let key in obj){
//         return false
//     }
//     return true
// }
//
// let schedule = {}
// console.log(isEmpty(schedule))
//
// schedule['8:30'] = 'get up'
//
// console.log(isEmpty(schedule))


class Person{

    constructor(name ='Anonim',age=18) {
        this.name = name
        this.age = age
    }
    showInfo(){
        console.log(`Меня зовут ${this.name}, мне ${this.age} лет`)
    }
}

class Worker extends Person{
    constructor(name,age,work) {
        super(name,age);
        this.work = work
    }

}

const men1 = new Person('Dima',21)
const men2 = new Person('Maxim',22)
const men3 = new Person()
const men4 = new Worker('Bob',43,'driver')
men4.showInfo()
men1.showInfo()
men2.showInfo()
men3.showInfo()
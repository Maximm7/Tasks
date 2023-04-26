function info (employees){

    return employees.map(employee => `Name: ${employee.name}, age: ${employee.age}`);
}
let employees = [
    {name: 'John', age: 23},
    {name: 'Alex', age: 25},
    {name: 'Alice',age: 21}
]

console.log(info(employees))



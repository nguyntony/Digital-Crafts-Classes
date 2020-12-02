const employees = require('./json/employees-array.json')

// write a fn that return the birthdate of the employee[0]

const getBirthdate = (i) => {
    const employee = employees[i]
    return `employee[${i}]'s birthdate is: ${employee.birthDate}`
}
console.log(getBirthdate(0))


const getJobArea = (i) => {
    const employee = employees[i]
    return `employee[${i}]'s job area is: ${employee.jobArea}`
}

console.log(getJobArea(0))


const getValueOf = (key, i) => {
    const employee = employees[i]
    return `key = ${[key]},\tvalue = ${employee[key]}`
}

console.log(getValueOf("suffix", 0))
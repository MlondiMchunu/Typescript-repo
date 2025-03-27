const birthdayGreeter = (name: string, age: number): string => {
    return `Happy birthday ${name}, you are ${age} years old`
}

const birthdayHero = "Mlo Dev"
const age = 30

console.log(birthdayGreeter(birthdayHero, age))


let stringOrNumber: string | number;
stringOrNumber = "mlo";
stringOrNumber = 30;
stringOrNumber = true

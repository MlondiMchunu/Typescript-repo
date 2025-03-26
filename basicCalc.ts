let string = "l";
let number = 2;
let result;

const calculate = (a, b) => {
if(Number.isInteger(a)===false || Number.isInteger(b)===false){
    throw new Error("Invalid type: a parameter is not an interger!!");
}
}
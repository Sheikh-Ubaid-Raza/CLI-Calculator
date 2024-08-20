#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([{
    name:"firstNumber",
    message:"Enter Your First Number: ",
    type:"input"
},{
    name:"secondNumber",
    message:"Enter Your Second Number: ",
    type:"input"
},{
    name:"operator",
    message:"Select one of the operator to perform action:",
    type:"list",
    choices:["Add","Subtract","Multiply","Divide","Modulus","Exponentiation"]
}])

if(answer.operator === "Add"){
    console.log(parseFloat(answer.firstNumber) + parseFloat(answer.secondNumber));
}else if(answer.operator === "Subtract"){
    console.log(`The Answer is ${answer.firstNumber - answer.secondNumber}`);
}else if(answer.operator === "Multiply"){
    console.log(`The Answer is ${answer.firstNumber * answer.secondNumber}`);
}else if(answer.operator === "Divide"){
    console.log(`The Answer is ${answer.firstNumber / answer.secondNumber}`);
}else if(answer.operator === "Modulus"){
    console.log(`The Answer is ${answer.firstNumber % answer.secondNumber}`);
}else if(answer.operator === "Exponentiation"){
    console.log(`The Answer is ${answer.firstNumber ** answer.secondNumber}`);
}else{
    console.log(`Please select valid operator.`);
    
}


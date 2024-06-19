#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
    { message: "Enter first number: ", type: "number", name: "firstnumber" },
    { message: "Enter second number: ", type: "number", name: "secondnumber" },
    {
      message: "choose one from the list to perform action",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);
  console.log(answer);
  
  if (answer.operator === "Addition") {
    console.log("Your value is", answer.firstnumber + answer.secondnumber);
  } else if (answer.operator === "Subtraction") {
    console.log("Your value is", answer.firstnumber - answer.secondnumber);
  } else if (answer.operator === "Multiplication") {
    console.log("Your value is", answer.firstnumber * answer.secondnumber);
  } else if (answer.operator === "Division") {
    console.log("Your value is", answer.firstnumber / answer.secondnumber);
  }else{
      console.log("Please select valid operator");
      
  }
  console.log("THE END");
  
import inquirer from "inquirer";
const response = await inquirer.prompt([
    {
        name: "Question1",
        type: "list",
        choices: [{ name: "Out of pocket", value: "a" }, { name: "Ojects of programing", value: "b" }, { name: "Object oriented programing", value: "c" }],
        message: "What is the full form of OOP",
    },
    {
        name: "Question2",
        type: "list",
        choices: [{ name: "Structure query language", value: "a" }, { name: "Structured query language", value: "b" }, { name: "Structed query language", value: "c" }],
        message: "SQL stand for ",
    },
    {
        name: "Question3",
        type: "list",
        choices: [{ name: "Current Procedural Terminology", value: "a" }, { name: "Current Programing Technologies", value: "b" }, { name: "Both a and b", value: "c" }],
        message: "CTP stand for",
    },
]);
// console.log(response.Question1, response.Question2, response.Question3);
// if (response.Question1 == "b" && response.Question2 == "c" && response.Question3 == "a") {
//     console.log("ALL answers are correct! \nYou win");
// } 
// else {
//     console.log("Not all answers are correct");
// }
let counter = 0;
let loop = 0;
while (loop < 3) {
    if (loop == 0) {
        response.Question1 == "b" ? counter++ : console.log(`Wrong answer of Q1`);
    }
    else if (loop == 1) {
        response.Question2 == "c" ? counter++ : console.log(`Wrong answer of Q2`);
    }
    else if (loop == 2) {
        response.Question3 == "a" ? counter++ : console.log(`Wrong answer of Q3`);
    }
    loop++;
}
counter == 3 ? console.log(`All answers are correct`) : console.log(`${counter} corrected out of 3`);

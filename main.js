// importing inquirer and chalk packages.
import inquirer from "inquirer";
import chalk from "chalk";
//  display colorful welcome and line welcome by repeat method.
console.log(chalk.bgBlackBright(" \n\t welcome to code with saleem "));
console.log("-".repeat(50));
// prompt the user to enter a sentence.
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: ",
    }
]);
// traiming and spliting words.
let words = answers.sentence.trim().split(" ");
//  Analysis of user input sentences .
console.log(words);
console.log(chalk.bgMagenta(`Total words counts: ${words.length}`));

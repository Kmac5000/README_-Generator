// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input([
const questions = [
  {
    type: "input",
    message: "What is your project title? (required)",
    name: "title",
    validate: (nameInput) => (nameInput ? true : "Must have a title"),
  },
  {
    type: "input",
    message: "Please give a description of your project (required)",
    name: "description",
    validate: (nameInput) => (nameInput ? true : "Must have description"),
  },
];

// TODO: Create a function to write README file
function writeToFile(response) {
  fs.writeFile("log.txt", response),
    (err) => {
      err ? console.log(err) : console.log("README Created");
    };
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions);
}

// Function call to initialize app
init();

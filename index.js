// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input([

const askQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project title? (required)",
        name: "title",
        validate: (name) => (name ? true : "Must have a title"),
      },
      {
        type: "input",
        message: "Please give a description of your project (required)",
        name: "description",
        validate: (nameInput) => (nameInput ? true : "Must have description"),
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Github user name?",
        name: "github",
      },
      {
        type: "input",
        message: "What needs to be installed for the user to run this program?",
        name: "install",
      },
      {
        type: "input",
        message: "What are the uses of your application?",
        name: "usage",
      },
      {
        type: "input",
        message: "Who has contributed to this project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "What tests have been done on your project?",
        name: "tests",
      },
      {
        type: "checkbox",
        message: "what license will you use?",
        name: "license",
        choices: ["Apache_2.0", "GPLv3", "MIT", "IPL_1.0"],
      },
    ])
    .then((response) => {
      console.log(response);
      fs.writeFile("README.md", generateMarkdown(response), (err) => {
        err ? console.log(err) : console.log("written");
        return `# ${response.title} ##description ${response.description}`;
      });
    });
};
// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  askQuestions();
}

// Function call to initialize app
init();

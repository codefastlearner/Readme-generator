const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

const userQuestion = () =>

inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "what is your project title?",
      },
      {
        name: "description",
        type: "input",
        message: "write description of your project?",
      },
      {
        name: "installation",
        type: "input",
        message: "what is your installation instruction?",
      },
      {
        name: "usage",
        type: "input",
        message: "how is your project used?",
      },
      {
        name: "license",
        type: "checkbox",        
        message: "which of these license did you apply to your project?",
        choices: ["APACHE", "TOMCAST", "MIDDLEWARE", "MIT", "NONE"]
      },
      {
        name: "contributor",
        type: "input",
        message: "list of contributors to your project (if any)?",
      },
      {
        name: "tests",
        type: "input",
        message: "how can your project be tested (if applicable)?",
      },
      {
        name: "github",
        type: "input",
        message: "what is your github username?",
      },
      {
        name: "email",
        type: "input",
        message: "what is your email address?",
      },
])

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Readme created successfully!");
      }
    });
  }

// function to initialize program
function init() {
    userQuestion().then((data) => writeToFile("sample.md", data));
}
// function call to initialize program
init();

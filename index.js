let fs = require("fs");
let inq = require("inquirer");
let genMarkDown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = {
  title: "What is the title of your project?",
  description: "Describe your project.",
  install: "What are your installation instructions?",
  usageInfo: "What is you usage information?",
  contributions: "What are you contribution guidelines?",
  instructions: "What are your application's instructions?",
  liscense: "Which liscense would you like to use?",
  tests: "What are your test questions?",
  github: "What is your github username?",
  email: "What is your email?",
  contactPref: "How would you like to be contacted?"
};

// prompt user with questions and caputre inputs
function init() {
  inq
    .prompt([
      {
        type: "input",
        message: questions.title,
        name: "title",
      },
      {
        type: "input",
        message: questions.description,
        name: "description",
      },
      {
        type: "input",
        message: questions.install,
        name: "install",
      },
      {
        type: "input",
        message: questions.usageInfo,
        name: "usageInfo",
      },
      {
        type: "input",
        message: questions.contributions,
        name: "contributions",
      },
      {
        type: "input",
        message: questions.instructions,
        name: "instructions",
      },
      {
        type: "list",
        message: questions.liscense,
        name: "liscense",
        choices: ["MIT", "Apachi"],
      },
      {
        type: "input",
        message: questions.tests,
        name: "tests",
      },
      {
        type: "input",
        message: questions.github,
        name: "github",
      },
      {
        type: "input",
        message: questions.email,
        name: "email",
      },
      {
        type: "input",
        message: questions.contactPref,
        name: "contactPref",
      },
    ])
    .then((response) => {
      fs.writeFile("./output/README.md", genMarkDown(response), (err) => {
        if (err) {
          throw err;
        }
      });
    });
}

// Function call to initialize app
init();

// Include packages needed for this application
let fs = require("fs");
let inq = require("inquirer");
let genMarkDown = require("./utils/generateMarkdown");
let test = require("./utils/generateMarkdown")

// Create an array of questions for user input
const questions = {
  title: "What is the title of your project?",
  description: "Describe your project.",
  install: "What are your installation instructions?",
  usageInfo: "What is you usage information?",
  contributions: "What are you contribution guidelines?",
  instructions: "What are your test instructions?",
};

// Create a function to initialize app
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
        choices: ['MIT','Apachi']
      },
    ])
    .then((response) => {
      fs.writeFile('./output/README.md', genMarkDown(response), (err) =>{
        if (err){
            console.log(err);
        } else {
            console.log('Success');
        }
      })
    // console.log("response:", response)
    });
}

function genLiscense(label,message,color){
  fetch()
}


// Function call to initialize app
init();

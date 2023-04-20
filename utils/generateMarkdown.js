// Create badge for liscense
function generateLiscense (liscense){
  return `![${liscense} liscense](https://img.shields.io/badge/Liscence-${liscense}-green)`
}
// Create a layout for README
function generateMarkdown(data) {
  return `
  # ${data.title} \n
  ## Description \n
  ${data.description} \n
  ## Table of Contents \n
  -[Installation](#installation)\n
  -[Usage](#usage) \n
  -[Contributions](#contributions) \n
  -[Liscense](#liscense) \n
  ## Installation \n
  ${data.install} \n
  ## Usage \n
  ${data.usageInfo} \n
  ## Contributions \n
  ${data.contributions} \n
  ## Instructions \n
  ${data.instructions} \n
  ## Liscense \n
  ${generateLiscense(data.liscense)} \n
  `;
}

module.exports = generateMarkdown;

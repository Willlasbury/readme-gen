// Create badge for liscense
function generateLiscense (liscense){
  return `![${liscense} liscense](https://img.shields.io/badge/Liscence-${liscense}-green)`
}
// Create a layout for README
function generateMarkdown(data) {
  return `
  # ${data.title}   ${generateLiscense(data.liscense)} \n
  ## Description \n
  ${data.description} \n
  ## Table of Contents \n
  -[Installation](#installation)\n
  -[Usage](#usage) \n
  -[Contributions](#contributions) \n
  -[Liscense](#liscense) \n
  -[Tests](#tests) \n
  -[Questions](#questions) \n
  ## Installation \n
  ${data.install} \n
  ## Usage \n
  ${data.usageInfo} \n
  ## Contributions \n
  ${data.contributions} \n
  ## Instructions \n
  ${data.instructions} \n
  ## Liscense \n
  This application is covered by ${data.liscense} liscence
  ## Tests \n
  ${data.tests} \n
  ## Questions \n
  [${data.github}](https://github.com/${data.github}) \n
  ${data.email} \n
  ${data.contactPref} \n
  `;
}


module.exports = generateMarkdown;

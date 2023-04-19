function generateLiscense (liscense){
  return `![${liscense} liscense](https://img.shields.io/badge/${liscense}-Liscence-green)`
}
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} \n
  ## Description \n
  ${data.description} \n
  ## Installation Instructions \n
  ${data.install} \n
  ## Usage Information \n
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

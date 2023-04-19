// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
  `;
}

module.exports = generateMarkdown;

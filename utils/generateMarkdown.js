// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  
${licBadge(data.license)}
  
  ## Description
  ---
  ${data.description}
  ## <ins>Table of Contents</ins>
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact](#questions)
  ***
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  This project is licensed under ${data.license}
  ## Contributing 
  ${data.contributors}
  ## Tests
  ${data.tests}
  ___
  ## Questions:
${data.email}\n 
https://github.com/${data.github}
`;
}

(module.exports = generateMarkdown), licBadge;

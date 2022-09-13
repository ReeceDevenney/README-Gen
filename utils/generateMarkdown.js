// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if(license === 'none') {
    return ''
  }
  return `![badmath](https://img.shields.io/badge/license-${license}-brightgreen)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `- [License](#license)`
  }
  return ''
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') {
    return ''
  }
    return `
  ## License

  Licensed und the ${license} license
    `
 }

// TODO: Create a function to generate markdown for README
generateMarkdown = (data) => {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  # table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Test
  ${data.test}

  # Questions
  [My Github](https://github.com/${data.username})

  for any addtional questions pleas contact me at ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

const renderTableInstallation = (confirmInstallation) => {

  if (!confirmInstallation) {
      return '';
  } else {
      return `- [Installation](#installation)`;
  }
};

const renderTableFeatures = (confirmFeatures) => {

  if (!confirmFeatures) {
      return '';
  } else {
      return `- [Features](#features)`;
  }
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return 'None';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents:
  ${renderTableInstallation(data.confirmInstallation)}
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderTableFeatures(data.confirmFeatures)}
  - [License](#license)

  ## Installation:
  In order to install the necessary dependencies, navigate to the console
  and run the following commands: 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Features
  ${data.features}
  
  ## License
  ${renderLicenseSection(license)}
  `;
}

module.exports = generateMarkdown;

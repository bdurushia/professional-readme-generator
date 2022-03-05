function renderImage(screenshot){
  let image = '';
  if (screenshot) {
    image = '![image](' + screenshot + ')';
  } else {
    image = '';
  }
  return image;
}

function renderScreenshot(confirmScreenshot, screenshot){
  if (!confirmScreenshot) {
    return '';
  } else {
    return `${renderImage(screenshot)}`
  }

}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![License](https://img.shields.io/badge/license-MIT-green)';
  } else if (license === 'APACHE 2.0') {
    badge = '![License](https://img.shields.io/badge/license-Apache%202-blue)';
  } else if (license === 'GPL 3.0') {
    badge = '![License](https://img.shields.io/badge/license-GPL-blue)';
  } else if (license === 'BSD 3') {
    badge = '![License](https://img.shields.io/badge/license-BSD-green)';
  } else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT'){
    licenseLink = 'This application is covered under the MIT License. [Click here to read more.](https://choosealicense.com/licenses/mit/)';
  } else if (license === 'APACHE 2.0'){
    licenseLink = 'This application is covered under the APACHE License. [Click here to read more.](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (license === 'GPL 3.0'){
    licenseLink = 'This application is covered under the GPL License. [Click here to read more.](https://choosealicense.com/licenses/gpl-3.0/)';
  } else if (license === 'BSD 3'){
    licenseLink = 'This application is covered under the BSD License. [Click here to read more.](https://choosealicense.com/licenses/isc/)';
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `No license.`;
  } else {
    return `${renderLicenseBadge(license)} \n\n ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [License](#license)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ---

  ## Contribution
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Credits
  - Built by: ${data.credits}

  - Technologies used: ${data.thirdParties}

  - [${data.tutorials}](${data.tutorials})

  ---

  ## Questions
  For any questions, please contact ${data.userName}.\n
  * Email: [${data.userEmail}](mailto:${data.userEmail})\n
  * GitHub: [${data.githubUserName}](https://github.com/${data.githubUserName})\n
  * GitHub Repository: [${data.title} Repo Link](${data.githubRepo})
  
  ---

  ${renderScreenshot(data.confirmScreenshot, data.screenshot)}
  `;
}

module.exports = generateMarkdown;

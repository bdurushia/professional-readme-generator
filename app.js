// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//  

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'TITLE: What is the title name of your project? (Required):\n',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'DESCRIPTION: Briefly describe the what, why, and how of your project. (Required):\n',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of your project.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'LICENSE: What license is used by your project? (Required):\n',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
            return true;
            } else {
                console.log('Please select one of the five options.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'INSTALLATION: Provide a step-by-step guide on how to get the application installed and running.\nBe sure to use back-ticks for lines of code or terminal commands:\n',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation guide.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'USAGE: Please add any examples for how to use this application:\n'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'TESTS: If you would like, you can write tests for your application. \n Then provide examples here:'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'CONTRIBUTION: Describe how someone can contribute to this project:\n'
    },
    {
        type: 'list-input',
        name: 'credits',
        message: 'CREDIT COLLABORATORS: List any collaborators on the project and/or list yourself:\n'
    },
    {
        type: 'list-input',
        name: 'thirdParties',
        message: 'CREDIT THIRD PARTIES: List any third-party assets used that require credit:\n',
    },
    {
        type: 'input',
        name: 'tutorials',
        message: 'CREDIT TUTORIALS: (If none were used, leave blank.) \n Please provide links to tutorials if you followed any:\n',
        filter: function(tutorialsInput) {
            if (!tutorialsInput) {
                return '';
            } else {
                return tutorialsInput;
            }
        }
    },
    {
        type: 'input',
        name: 'userName',
        message: 'NAME: What is your name?',
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log('Please provide your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'USERNAME: Provide your GitHub username:',
        validate: githubUserNameInput => {
            if (githubUserNameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'EMAIL: Provide your email address:',
        validate: userEmailInput => {
            if (userEmailInput) {
                return true;
            } else {
                console.log('Please provide an email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubRepo',
        message: 'REPO: Provide a link to your Github Repository for this application:',
        validate: githubRepoInput => {
            if (githubRepoInput) {
                return true;
            } else {
                console.log('Please provide a link to your Github Repository!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmScreenshot',
        message: 'SCREENSHOT: Would you like to add a screenshot of your application?',
        default: false
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'INSERT: Paste the link to your screenshot into the terminal.\nOr you may add it to the assets/images folder, then copy the relative filepath and paste it here:',
        when: ({ confirmScreenshot }) => confirmScreenshot
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve({
                ok: true,
                message: 'README.md file Created! It is located in the /dist folder.'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    const promptUser = () => {
        return inquirer.prompt(questions);
    }
    promptUser()
        .then(data => {
            console.log(data);
            return generateMarkdown(data); 
        })
        .then((fileName, data) => {
            return writeToFile(fileName, data);
        })
        .then(writeToFileResponse => {
            console.log(writeToFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
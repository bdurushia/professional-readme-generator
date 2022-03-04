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
        message: 'What is the title name of your project? (Required)',
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
        message: 'Briefly describe the what, why, and how of your project: (Required)',
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
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Are there any installation steps required to run the project?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step guide on how to get the application installed and running:',
        when: ({ confirmInstallation }) => confirmInstallation
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add any further instructions and examples for use. To add a screenshot, please copy the image into the assets/images folder.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators on the project and links to their GitHub profiles if any:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'If any third-party assets were used that require crediting, list them with the links to their web presence here:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide links to tutorials if you followed any:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is used by your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: licenseInput = () => {
            if (licenseInput) {
            return true;
            } else {
                console.log('Please select one of the five options.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Are there any feature you would like to list?',
        default: true
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here:',
        when: ({ confirmFeatures }) => confirmFeatures
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
                message: 'README.md file Created!'
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
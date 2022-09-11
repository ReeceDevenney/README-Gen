// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const promptinfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'what is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions of your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of your project?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are teh contribution guidelines of your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions of your project?',
        }
    ])
}

promptinfo()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

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
            message: 'What are the contribution guidelines of your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions of your project?',
        },
        
    ])
}



// TODO: Create a function to write README file
writeToFile = (data) => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err)
        }
    })
}

promptinfo()
.then(answers => {
    return generateMarkdown(answers)
})
.then(pageMD => {
    writeToFile(pageMD)
})

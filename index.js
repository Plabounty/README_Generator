const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
    inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Title?',
        },
        {
          type: 'input',
          name: 'table of contents',
          message: 'Table of Contents?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Description?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Installation Instructions?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Usage Information',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'Contributors?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Licenses?',
            choices: ('')
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your Github username?',
        },
      ])


// function to write README file
function writeToFile(answers) {
     return `Title:  ${answers.title}`
}




// function call to initialize program
questions()
  .then((answers) => writeFileAsync('test.md', writeToFile(answers)))
  .then(() => console.log('Successfully wrote to test.md'))
  .catch((err) => console.error(err));

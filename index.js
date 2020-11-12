const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Title?",
    },
    {
      type: "input",
      name: "description",
      message: "Description?",
    },
    {
      type: "input",
      name: "installation",
      message: "Installation Instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage Information",
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributors?",
    },
    {
      type: "input",
      name: "license",
      message: "Licenses?",
    },
    {
      type: "input",
      name: "questions",
      message: "Enter your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email?",
    },
  ]);

// function to write README file
const generateMarkdown = (answers) =>
   `# Title: ${answers.title}



   ### Table of Contents:

   * Description
   * Installation
   * Usage
   * Contributors
   * License
   * Questions
   
   ---
   


   ### Description: ${answers.description}

   ---


   ### Installation: ${answers.installation}

   ---

   ### Usage: ${answers.usage}

   ---


   ### Contributors: ${answers.contributing}

   ---

   ### License: ${answers.license}


   ---


   ### Questions: If you have any questions please contact me at ${answers.email}
   [${answers.questions}](https://github.com/Plabounty)`;

// function call to initialize program
questions()
  .then((answers) => writeFileAsync("test.md", generateMarkdown(answers)))
  .then(() => console.log("Successfully wrote to test.md"))
  .catch((err) => console.error(err));

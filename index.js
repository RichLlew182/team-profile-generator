const Employee = require('./lib/Employee.js')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const newEmployee = new Employee('Name', 'id', 'email')
const newManager = new Manager('Katie', '3456', 'katie@gmail.com', '0208 1234 5678');
const newEngineer = new Engineer('Richard', '1234', 'rich@gmail.com', 'RichLlew182');

newManager.printInfo();
console.log(newManager.getRole())



const questions = [{
    type: 'input',
    message: `Please enter your managers name`,
    name: 'managerName',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your manager's name `;
    }
  },
  {
    type: 'list',
    message: 'What do you want to do?',
    name: 'nextStep',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish Building the team']
  },
  {
    type: 'input',
    message: `Please add the Engineer's name`,
    name: 'engineerName',
    when: (answers) => {
      return answers.nextStep === 'Add an Engineer'
    },
  },
  {
    type: 'input',
    message: `Please add the Engineer's ID`,
    name: 'engineerId',
    when: (answers) => {
      return answers.nextStep === 'Add an Engineer'
    },
  },
  {
    type: 'input',
    message: `Please add the Engineer's email address`,
    name: 'engineerEmail',
    when: (answers) => {
      return answers.nextStep === 'Add an Engineer'
    },
  },
  {
    type: 'input',
    message: `Please add the Engineer's GitHub username`,
    name: 'engineerGitHub',
    when: (answers) => {
      return answers.nextStep === 'Add an Engineer'
    },
  },

  {
    type: 'input',
    message: `Please add the Intern's name`,
    name: 'internName',
    when: (answers) => {
      return answers.nextStep === 'Add an Intern'
    },
  },
  {
    type: 'input',
    message: `Please add the Intern's ID`,
    name: 'internId',
    when: (answers) => {
      return answers.nextStep === 'Add an Intern'
    },
  },
  {
    type: 'input',
    message: `Please add the Intern's email address`,
    name: 'internEmail',
    when: (answers) => {
      return answers.nextStep === 'Add an Intern'
    },
  },
  {
    type: 'input',
    message: `Please add the Intern's School`,
    name: 'internSchool',
    when: (answers) => {
      return answers.nextStep === 'Add an Intern'
    },
  },

];


// const team = [newManager, newEngineer, newIntern, newEmployee]

// console.log(team)


function writetoFile() {

  fs.writeFile(outputPath, (render(team)), (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Success!')
    }
  })

}

function init() {

  inquirer.prompt(questions)
    .then(answers => {

      const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      console.log(newIntern)

    })

}

init();
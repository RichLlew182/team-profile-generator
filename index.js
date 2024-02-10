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

const team = [];

function writeToFile(team) {

  fs.writeFile(outputPath, (render(team)), (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Success!')
    }
  })

}

const managerQsArray = [{
    type: 'input',
    message: `Manager Name:`,
    name: 'managerName',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your name `;
    }
  },
  {
    type: 'input',
    message: `Manager Employee ID: `,
    name: 'managerId',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your employee ID`;
    }
  },
  {
    type: 'input',
    message: `Manager Email:`,
    name: 'managerEmail',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your email address `;
    }
  },
  {
    type: 'input',
    message: `Manager Office Number:`,
    name: 'officeNumber',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your office number `;
    }
  },

]

const options = {
  type: 'list',
  message: 'What do you want to do?',
  name: 'nextStep',
  choices: ['Add an Engineer', 'Add an Intern', 'Finish Building the team']
}

function chooseOptions() {
  inquirer.prompt(options)
    .then(optionAnswer => {
      if (optionAnswer.nextStep === 'Add an Engineer') {

        // calls Engineer questions function
        engineerQuestions()

      } else if (optionAnswer.nextStep === 'Add an Intern') {

        // calls Intern questions function
        internQuestions()

      } else {
        // end questions and generate team
        console.log('Building team...')
        // console.log(team)
        writeToFile(team)
      }
    })

}

function managerQuestions() {

  inquirer.prompt(managerQsArray)
    .then(managerAnswers => {

      // create new Manager class with answers

      const newManager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.officeNumber);

      console.log('--------------------')
      console.log('Manager Added');
      console.log('--------------------')

      // Push new Engineer to team array
      team.push(newManager);

      // call function to start chooseOptions inquirer
      chooseOptions();

    })

}

const engineerQsArray = [{
    type: 'input',
    message: `Please add the Engineer's name`,
    name: 'engineerName',
  },
  {
    type: 'input',
    message: `Please add the Engineer's ID`,
    name: 'engineerId',
  },
  {
    type: 'input',
    message: `Please add the Engineer's email address`,
    name: 'engineerEmail',
  },
  {
    type: 'input',
    message: `Please add the Engineer's GitHub username`,
    name: 'engineerGitHub',
  },
]

function engineerQuestions() {

  inquirer.prompt(engineerQsArray)
    .then(engineerAnswers => {

      // create new Engineer class with answers

      const newEngineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGitHub);

      console.log('--------------------')
      console.log('New Engineer Created')
      console.log('--------------------')

      // Push new Engineer to team array
      team.push(newEngineer);

      // call function to start chooseOptions inquirer
      chooseOptions();

    })

}

const internQsArray = [

  {
    type: 'input',
    message: `Please add the Intern's name`,
    name: 'internName',
  },
  {
    type: 'input',
    message: `Please add the Intern's ID`,
    name: 'internId',
  },
  {
    type: 'input',
    message: `Please add the Intern's email address`,
    name: 'internEmail',
  },
  {
    type: 'input',
    message: `Please add the Intern's School`,
    name: 'internSchool',
  },

];

function internQuestions() {

  inquirer.prompt(internQsArray)
    .then(internAnswers => {

      // create new Manager class with answers

      const newIntern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);

      console.log('--------------------')
      console.log('New Intern Created');
      console.log('--------------------')

      // Push new Engineer to team array
      team.push(newIntern);

      // call function to start chooseOptions inquirer
      chooseOptions();

    })

}

managerQuestions()
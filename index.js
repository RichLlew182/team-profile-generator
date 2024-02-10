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
    message: `Manager name:`,
    name: 'managerName',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your name`;
    }
  },
  {
    type: 'input',
    message: `Manager employee ID number: `,
    name: 'managerId',
    validate: function (input) {
      if (input === '') {
        return `You must enter your employee ID number `;
      }
      if (!/^\d+$/.test(input)) {
        return `Please only use numbers for your employee ID`
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: `Manager email address:`,
    name: 'managerEmail',
    validate: function (input) {

      // If the input is an empty string, alert that user must enter an email address
      if (input === '') {
        return `You must enter your email address`;
      }

      // check if email is a valid email address
      else if (!/\S+@\S+\.\S+/.test(input)) {
        return `You must enter a valid email address`
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: `Manager office number:`,
    name: 'officeNumber',
    validate: function (input) {
      if (input === '') {
        return `You must enter your office number `;
      }
      if (!/^\d+$/.test(input)) {
        return 'Please only use numbers'
      } else {
        return true;
      }
    }
  },

]

const options = {
  type: 'list',
  message: 'What would you like to do next?',
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
    message: `Please add the engineer's name`,
    name: 'engineerName',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter the engineer's name`;
    }
  },
  {
    type: 'input',
    message: `Please add the engineer's employee ID number`,
    name: 'engineerId',
    validate: function (input) {
      if (input === '') {
        return `You must enter the engineer's employee ID number`;
      }
      if (!/^\d+$/.test(input)) {
        return `Please only use numbers for the engineer's employee ID`
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: `Please add the engineer's email address`,
    name: 'engineerEmail',
    validate: function (input) {

      // If the input is an empty string, alert that user must enter an employee number

      if (input === '') {
        return `You must enter the engineer's email address`;
      }

      // check if email is a valid email address
      else if (!/\S+@\S+\.\S+/.test(input)) {
        return `You must enter a valid email address`
      } else {
        return true;
      }
    }

  },
  {
    type: 'input',
    message: `Please add the engineer's GitHub username`,
    name: 'engineerGitHub',
    validate: function (input) {

      // If the input is an empty string, alert that user must enter a github username

      if (input === '') {
        return `You must enter the engineer's email address`;
      }

      // check if username is valid (no underscores)
      else if (!/^[a-zA-Z0-9-]+$/.test(input)) {
        return `You must enter a valid GitHub username`
      } else {
        return true;
      }
    }
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
    message: `Please add the intern's name`,
    name: 'internName',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter the intern's name`;
    }
  },
  {
    type: 'input',
    message: `Please add the intern's employee ID number`,
    name: 'internId',
    validate: function (input) {
      if (input === '') {
        return `You must enter the intern's employee ID number `;
      }
      if (!/^\d+$/.test(input)) {
        return `Please only use numbers for the intern's employee ID`
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: `Please add the intern's email address`,
    name: 'internEmail',
    validate: function (input) {

      // If the input is an empty string, alert that user must enter an email address
      if (input === '') {
        return `You must enter the intern's email address`;
      }

      // check if email is a valid email address
      else if (!/\S+@\S+\.\S+/.test(input)) {
        return `You must enter a valid email address`
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: `Please add the intern's School name`,
    name: 'internSchool',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter the Intern's school name`;
    }
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
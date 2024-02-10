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
      return input !== '' ? true : `You must enter your name`;
    }
  },
  {
    type: 'input',
    message: `Manager Employee ID Number: `,
    name: 'managerId',
    validate: function (input) {
      if (input === '') {
        return `You must enter your employee ID number `;
      }
      if (!/^\d+$/.test(input)) {
        return 'Please only use numbers for your employee ID'
      } else {
        return true;
      }
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
      return input !== '' ? true : `You must enter your engineer's name`;
    }
  },
  {
    type: 'input',
    message: `Please add the engineer's employee ID number`,
    name: 'engineerId',
    validate: function (input) {
      if (input === '') {
        return `You must enter your engineer's employee ID number `;
      }
      if (!/^\d+$/.test(input)) {
        return `Please only use numbers for your engineer's employee ID`
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: `Please add the engineer's email address`,
    name: 'engineerEmail',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your engineer's email address`;
    }
  },
  {
    type: 'input',
    message: `Please add the engineer's GitHub username`,
    name: 'engineerGitHub',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your engineer's GitHub username`;
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
      return input !== '' ? true : `You must enter your intern's name`;
    }
  },
  {
    type: 'input',
    message: `Please add the intern's employee ID number`,
    name: 'internId',
    validate: function (input) {
      if (input === '') {
        return `You must enter your intern's employee ID number `;
      }
      if (!/^\d+$/.test(input)) {
        return `Please only use numbers for your intern's employee ID`
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: `Please add the intern's email address`,
    name: 'internEmail',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your intern's email address`;
    }
  },
  {
    type: 'input',
    message: `Please add the intern's School name`,
    name: 'internSchool',
    validate: (input) => {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : `You must enter your Intern's school name`;
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
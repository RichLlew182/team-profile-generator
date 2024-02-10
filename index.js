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

// newManager.printInfo();
// console.log(newManager.getRole())


const team = [];

// const team = [newManager, newEngineer, newIntern, newEmployee]

// console.log(team)


function writeToFile(team) {

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

      // const newEmployee = new Employee('Name', 'id', 'email')
      // const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
      // const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
      // const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

      // const team = [];
      // team.push(newManager, newEngineer, newIntern)

      writeToFile(team)

    })

}

// init();

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

const pickOptions = {
  type: 'list',
  message: 'What do you want to do?',
  name: 'nextStep',
  choices: ['Add an Engineer', 'Add an Intern', 'Finish Building the team']
}

function chooseOptions() {
  inquirer.prompt(pickOptions)
    .then(optionAnswer => {
      if (optionAnswer.nextStep === 'Add an Engineer') {

        // calls Engineer questions function
        engineerQuestions()

      } else if (optionAnswer.nextStep === 'Add an Intern') {

        // calls Intern questions function
        internQuestions()

      } else {
        // end questions and generate team
        console.log('Questions over, generating team')
        console.log(team)
      }
    })

}

function managerQuestions() {

  inquirer.prompt(managerQsArray)
    .then(managerAnswers => {

      // create new Manager class with answers

      const newManager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.officeNumber);

      console.log('Manager Added');
      console.log('--------------------')

      // Push new Engineer to team array
      team.push(JSON.stringify(newManager));

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
      // console.log(newEngineer)
      console.log('New Engineer Created')
      console.log('--------------------')

      // Push new Engineer to team array
      team.push(JSON.stringify(newEngineer));

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

      console.log('Intern Added');
      console.log('--------------------')

      // Push new Engineer to team array
      team.push(JSON.stringify(newIntern));

      // call function to start chooseOptions inquirer
      chooseOptions();

    })

}

managerQuestions()
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
const newIntern = new Intern('Michael', '9998', 'michael@gmail.com', 'Llangatwg Comprehensive School');
const newManager = new Manager('Katie', '3456', 'katie@gmail.com', '0208 1234 5678');
const newEngineer = new Engineer('Richard', '1234', 'rich@gmail.com', 'RichLlew182');

newManager.printInfo();
console.log(newManager.getRole())

const team = [newManager, newEngineer, newEmployee, newEmployee]

console.log(team)


fs.writeFile(outputPath, (render(team)), (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Success!')
  }
})


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
    choices: ['Add Engineer', 'Add an Intern', 'Finish Building the team']
  },

];

// function init() {

//   inquirer.prompt(questions)
//     .then((response =>
//       response ? console.log(response) : console.log(err)))

// }

// init();
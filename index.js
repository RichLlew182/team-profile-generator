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

// render(newManager)

// fs.writeFile(outputPath, (render(newManager)), (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Success!')
//   }
// })

const questions = [{
  type: 'input',
  message: 'Question 1?',
  name: 'title',
  validate: (input) => {
    // If the input is an empty string, alert that user must enter a title
    return input !== '' ? true : 'You must enter a title of your project';
  }
}, ];

function init() {

  inquirer.prompt(questions)
    .then((response =>
      response ? console.log(response) : console.log(err)))

}

init();
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = import("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const newEngineer = new Engineer('Richard', '1234', 'rich@gmail.com', 'RichLlew182');

newEngineer.printInfo()

const newManager = new Manager('Katie', '3456', 'katie@gmail.com', '0208 1234 5678');

newManager.printInfo()

const newIntern = new Intern('Michael', '9998', 'michael@gmail.com', 'Llangatwg Comprehensive School');

newIntern.printInfo()
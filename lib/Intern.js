// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Intern extends Employee {

  constructor(name, id, email, school) {

    super(name, id, email);

    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

  }

  getSchool = function () {
    return this.school;
  }

  getRole = function () {
    return "Intern";
  }

  printInfo = function () {
    console.log(this.name, this.id, this.email, this.school)
  }

}


module.exports = Intern;
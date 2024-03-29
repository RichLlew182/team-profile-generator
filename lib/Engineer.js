// Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Engineer extends Employee {

  constructor(name, id, email, github) {

    super(name, id, email);

    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;

  }

  getGithub = function () {
    return this.github;
  }

  getRole = function () {
    return "Engineer"
  }

}

module.exports = Engineer
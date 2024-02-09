// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Engineer extends Employee {

  constructor(name, id, email, gitHub) {

    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;

  }

  getGitHub = function () {
    // some function here
  }

  getRole = function () {
    // some function here
  }

}


module.exports = Engineer;
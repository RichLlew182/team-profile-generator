// Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {

    super(name, id, email);

    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;

  }

  getRole = function () {
    return 'Manager';
  }

  getOfficeNumber = function () {
    return this.officeNumber;
  }

}

module.exports = Manager
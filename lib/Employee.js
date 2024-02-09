// TODO: Write code to define and export the Employee class

class Employee {

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

  }

  getName = function () {
    console.log(this.name);
  }
  getId = function () {
    console.log(this.id);
  }
  getRole = function () {
    console.log('Employee')
  }

  printInfo = function () {
    console.log(this.name, this.id, this.email, this.officeNumber)
  }

}

module.exports = Employee;
const inquirer = require("inquirer")
const Employee = require("../lib/employee")
const newManager = require('../index')


function Manager(name, id, email, officeNumber, position) {
    Employee.call(this, name, id, email, position)

    this.officeNumber = officeNumber
};

Manager.prototype.getRole = function() {
    console.log("we are here")
    return "Manager"

}
Manager.prototype.questions = function() {


    console.log("Name: " + this.name + "\nid: " + this.id + "\nemail: " + this.email + "\nofficeNumber" + this.officeNumber + "\nposition" + this.position);
    console.log("\n-------------\n");


}




module.exports = Manager
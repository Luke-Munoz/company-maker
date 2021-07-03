const inquirer = require("inquirer")




function Employee(name, id, email, position) {
    this.name = name
    this.id = id
    this.email = email
    this.position = position
};

// Employee.prototype.

Employee.prototype.questions = function() {


    console.log("Name: " + this.name + "\nid: " + this.id + "\nemail: " + this.email + "\nofficeNumber" + this.officeNumber);
    console.log("\n-------------\n");


}




module.exports = Employee
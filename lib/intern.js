const inquirer = require("inquirer")




function Intern(name, id, email, officeNumber) {
    this.name = name
    this.id = id
    this.email = email
    this.officeNumber = officeNumber
};

Intern.prototype.questions = function() {


    console.log("Name: " + this.name + "\nid: " + this.id + "\nemail: " + this.email + "\nofficeNumber" + this.officeNumber);
    console.log("\n-------------\n");


}




module.exports = Intern
const inquirer = require("inquirer")




function Engineer(name, id, email, officeNumber, GitHub) {
    this.name = name
    this.id = id
    this.email = email
    this.officeNumber = officeNumber
    this.GitHub = GitHub
};

Engineer.prototype.questions = function() {


    console.log("Name: " + this.name + "\nid: " + this.id + "\nemail: " + this.email + "\nofficeNumber" + this.officeNumber);
    console.log("\n-------------\n");


}




module.exports = Engineer
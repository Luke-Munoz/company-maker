const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")
const markDownHtml = require('./markdown');
// const Employee = require('./lib/employee')

const allEmployees = []


const questions = [{
        type: "list",
        name: "position",
        message: "What position are you in the company ",
        choices: ["Manager", "Employee", "Intern", "Engineer", "None"],
    },
    {
        type: "input",
        name: "name",
        message: "What is your name"



    },
    {
        type: "input",
        name: "email",
        message: "What is your email"

    },
    {
        type: "input",
        name: "id",
        message: "What is your company Id"
    }
];


const intern = [{
    type: "input",
    name: "school",
    message: "What school did you go to?"
}];

const manager = [{
    type: "input",
    name: "officeNumber",
    message: "What office number are you in?"
}];

const engineer = [{
    type: "input",
    name: "gitHub",
    message: "What is your github username?"
}];





function init() {
    inquirer.prompt(questions)
        .then(function(awnsers) {
            const employeePicked = awnsers.position
            console.log(employeePicked)
            console.log(awnsers)
            switch (employeePicked) {
                case "Manager":

                    inquirer.prompt(manager).then(function(managerResponse) {

                        const newManager = new Manager(awnsers.name, awnsers.id, awnsers.email, managerResponse.officeNumber, awnsers.position)
                        allEmployees.push(newManager);
                        init()
                    })
                    break;
                case "Engineer":
                    inquirer.prompt(engineer).then(function(engineerResponse) {
                        console.log(engineerResponse);
                        const newEngineer = new Engineer(awnsers.name, awnsers.id, awnsers.email, engineerResponse.officeNumber)
                        allEmployees.push(newEngineer);
                        init()
                    })
                    break;
                case "Intern":
                    inquirer.prompt(intern).then(function(internResponse) {
                        console.log(internResponse);
                        const newIntern = new Intern(awnsers.name, awnsers.id, awnsers.email, internResponse.officeNumber)
                        allEmployees.push(newIntern);
                        init()
                    })
                    break;
                default:

                    console.log(allEmployees);

                    function writeToFile(fileName, data) {
                        fs.writeFile(path.join(__dirname, './output/' + fileName), markDownHtml(data), (err) => {
                            if (err) throw err;
                            console.log('saved')
                        })
                    }

                    writeToFile("index.html", allEmployees);





                    return;

            }

        })

};


init();
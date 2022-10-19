const inquirer = require("inquirer")
const fs = require("fs");
const Manager = require('./lib/Manager.js');
const Foh = require('./lib/Foh');
const Kitchen = require('./lib/Kitchen')
// const generateSite = require('./src/generate-site.js');
// const path = require("path");
// const teamMembers = [];
const Managerarr = []


Manager()

function Manager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's first name?",
                name: "first_name",
                validate: firstNameInput => {
                    if (firstNameInput) {
                        return true;

                    } else {
                        console.log('Please enter your first name!');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's last name",
                name: 'last_name',
                validate: lastNameInput => {
                    if (lastNameInput) {
                        return true;

                    } else {
                        console.log('Please enter your last name!');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's ID?",
                name: "empId",
                validate: idInput => {
                    if (idInput) {
                        return true;
    
                    } else {
                        console.log('Please enter your first name!');
                        return false;
                    }
                },
            }, 
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNum",
                validate: officeInput => {
                    if (officeInput) {
                        return true;

                    } else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's email?",
                name: "email",
                validate: emailInput => {
                    if (emailInput) {
                        return true;

                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                },
            },


        ]) .then(answer => {
            const manager = new Manager(answer.first_name, answer.last_name, answer.email, answer.empid, answer.officeNum)
            Managerarr.push(manager)
            newTeammate()
        })
}

function Kitchen() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's first name?",
                name: "first_name",
                validate: firstNameInput => {
                    if (firstNameInput) {
                        return true;

                    } else {
                        console.log('Please enter your first name!');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's last name",
                name: 'last_name',
                validate: lastNameInput => {
                    if (lastNameInput) {
                        return true;

                    } else {
                        console.log('Please enter your last name!');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's ID?",
                name: "empId",
                validate: idInput => {
                    if (idInput) {
                        return true;
    
                    } else {
                        console.log('Please enter your first name!');
                        return false;
                    }
                },
            }, 
            {
                type: "input",
                message: "Have you taken your food safety course? yes or no?",
                name: "safety",
                validate: safetyInput => {
                    if (safetyInput) {
                        return true;

                    } else {
                        console.log('Please enter your results');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's email?",
                name: "email",
                validate: emailInput => {
                    if (emailInput) {
                        return true;

                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                },
            },
        ])
}

function Foh() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's first name?",
                name: "first_name",
                validate: firstNameInput => {
                    if (firstNameInput) {
                        return true;

                    } else {
                        console.log('Please enter your first name!');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's last name",
                name: 'last_name',
                validate: lastNameInput => {
                    if (lastNameInput) {
                        return true;

                    } else {
                        console.log('Please enter your last name!');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's ID?",
                name: "empId",
                validate: idInput => {
                    if (idInput) {
                        return true;
    
                    } else {
                        console.log('Please enter your first name!');
                        return false;
                    }
                },
            }, 
            {
                type: "input",
                message: "Have you taken your TABC certification course? Yes or no?",
                name: "TABC",
                validate: tabcInput => {
                    if (tabcInput) {
                        return true;

                    } else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: "What is the employee's email?",
                name: "email",
                validate: emailInput => {
                    if (emailInput) {
                        return true;

                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                },
            },


        ])
}

function newTeammate () {
    inquirer
    .prompt([

    {
        type: "list",
        message: "Which department does the new employee belong to?",
        // create an async function for employeeRoles to put below
        choices: ["Kitchen", "Front of House", "I'm done"],
        name: "role",

    }]) .then(answer => {
        if (answer.role === "Kitchen"){
            Kitchen()
        } else if (answer.role === "Front of House"){
            Foh()
        } else{
            fs.writeFileSync('./generateHTML.js', )
        }
    })
}
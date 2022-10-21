const inquirer = require("inquirer")
const fs = require("fs");
const Manager = require('./lib/Manager.js');
// const Foh = require('./lib/Foh');
const Kitchen = require('./lib/Kitchen')
const generateHTML = require('./generateHTML');
const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "RastaPasta.html")
// const teamMembers = [];
const managerarr = []
const kitchenarr = []
// const foharr = []

function mainMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                message:"Welcome to the Main Menu! What would you like to do?",
                name: "mainMenu",
                choices: ["Add New Teammate", "Add New Manager", "I'm Done!"],
               
            } 

        ]).then((answer) => {

            if (answer.mainMenu === "Add New Teammate"){
                newTeammate()
            } else if (answer.mainMenu === "Add New Manager"){
                managerPrompt() 
            } else {
                imDone()
            }
            // }  else {
            //     // fs.mkdirSync(OUTPUT_DIR)
            //     fs.writeFile( 'RastaPasta.html', generateHTML(managerarr), "utf-8")
            // }
        })
}

// .then(answer => {
//     if (answer.role === "Kitchen"){
//         kitchenPrompt()
//     } else if (answer.role === "Front of House"){
//         fohPrompt()
//     } 

mainMenu()


function managerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Manager's first name?",
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
                message: "What is the Manager's last name",
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
                message: "What is the Manager's ID?",
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
                message: "What is the Manager's email?",
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
            managerarr.push(manager)
            mainMenu()
        })
}

function kitchenPrompt() {
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
        ]).then(answer => {
            const kitchen = new Kitchen(answer.first_name, answer.last_name, answer.email, answer.empid, answer.safety)
            kitchenarr.push(kitchen)
            mainMenu()
        }
    )}

function fohPrompt() {
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
            kitchenPrompt()
        } else if (answer.role === "Front of House"){
            fohPrompt()
        } else{
            fs.writeFile('./generateHTML.js', )
        }
    })
}

function imDone() {
    fs.writeFile( 'RastaPasta.html', generateHTML(managerarr), (error) => {
        if (error) {
            console.log(`This is error ${error}`)
        } else {
            console.log('File created!')
        }
    })
}
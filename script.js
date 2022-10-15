import inquirer from inquirer
const fs = require("fs");
const generateHtml = require('./index.html')

inquirer
    .prompt([
        {
            type: "input",
            message: "You know Joe?",
            name: "Q1"
        }, 
        {
            type: "input",
            message: "Joe Mama!",
            name: 'BURN'
        },

        ])
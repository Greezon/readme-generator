const inquirer = require("inquirer")

const inquirer = require ("inquirer")
inquirer.promp([
    {
        type: "input",
        name: "title",
        message: "enter project title"
    },
    {
        type: "input",
        name: "developer name",
        message: "enter developer name"
    },
    {
        type: "input",
        name: "github",
        message: "enter github user-name"
    },
    {
        type: "input",
        name: "description",
        message: "enter project description"
    },
    {
        type: "input",
        name: "installation",
        message: "enter installation directions"
    },
    {
        type: "input",
        name: "testing",
        message: "enter testing methods"
    },
    {
        type: "input",
        name: "usage",
        message: "enter user restrictions"
    },
    {
        type: "list",
        name: "license",
        message: "license type", 
        choices: [ 
            "MIT",
            "ISC",
            "N/A",
            "APACHE 2.0"
        ]
    },
    {
        type: "input",
        name: "e-mail",
        message: "enter e-mail"
    },
    {
        type: "input",
        name: "contributors",
        message: "add all contributors"
    }
])
const inquirer = require ("inquirer")
const fs = require ("fs")
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "enter project title"
    },
    {
        type: "input",
        name: "developer",
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
        name: "email",
        message: "enter e-mail"
    },
    {
        type: "input",
        name: "contributors",
        message: "add all contributors"
    }
]).then(function(userResponse){
    console.log(userResponse)
    var readmeText = `
# Title: ${userResponse.title}

## Developer: ${userResponse.developer}

### Profile: https://github.com/${userResponse.github}
1. License:
   ${userResponse.license}

![GitHub License](https://img.shields.io/badge/license-${userResponse.license}-blue.svg)

1. Installation
   ${userResponse.installation}

1. Usage
    ${userResponse.usage}

1. Test
    ${userResponse.testing}

1. Contributors
    ${userResponse.contributors}

###### If you have any questions reach out to me by email. ${userResponse.email}
    `
console.log(readmeText)
fs.writeFileSync("./README.md",readmeText,function(){
    console.log("readme-generated")
})
})


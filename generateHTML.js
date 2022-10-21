const Employee = require("./lib/Employee")
const Kitchen = require("./lib/Kitchen")
const Manager = require("./lib/Manager")

const formatHTML = Team => {
    console.log(`This is ln5 of HTML.`, Team)
    const managerCard = Manager => {
        console.log(`This is ln 6 of HTML.`, Manager)
        return `
            <div class="card">
                <div class="card-header">
                    <h1 class="title"> Manager </h1>
                    <h2 class="role">${Manager.getRole()}🖥</h2>
                </div>
                <div class="card-body">
                    <ul class="list">
                        <li class="info"> first name ${Manager.getfirstName()}</li>
                        <li class="info"> last name ${Manager.getlastName()}</li>
                        <li class="info"> Office#: ${Manager.getOfficeNum()}</li>
                        <li class="info"> employee ID: ${Manager.getEmpId()}</li>
                        <li class="info"> email: ${Manager.getEmail()}</li>
                    </ul>
                </div>            
            </div>
             `
    }

    const htmlFile = []
    htmlFile.push(Team

        .filter(Manager => Manager.getRole() === 'Manager')
        .map(Manager => managerCard(Manager))
    )
        return htmlFile
}

module.exports = Team => {
    console.log('This is ln 37 HTML',Team)
    console.log('This is Team 0', Team[0].length)
    if (Team[0].length != 0) {
        console.log('This is Manager', Team[0])
    }
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Rasta Pasta: Jamaican/Italian Grill</title>
        </head>
        <body>
            <div> ${formatHTML(Team)}</div>
            <div id="" class="columns">

        </div>
        </body>
        </html>
    `
}

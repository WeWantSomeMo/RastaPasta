const Employee = require("./lib/Employee")
const Foh = require("./lib/foh")
const Kitchen = require("./lib/Kitchen")
const Manager = require("./lib/Manager")


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

const kitchenCard = Kitchen => {
    return `
        <div class="card">
            <div class="card-header">
                <h1 class="title"> Kitchen </h1>
                <h2 class="role">${Kitchen.getRole()}</h2>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="info"> first name ${Kitchen.getfirstName()}</li>
                    <li class="info"> last name ${Kitchen.getlastName()}</li>
                    <li class="info"> safety: ${Kitchen.getSafety()}</li>
                    <li class="info"> employee ID: ${Kitchen.getEmpId()}</li>
                    <li class="info"> email: ${Kitchen.getEmail()}</li>
                </ul>
            </div>            
        </div>
         `
}
const fohCard = Foh => {
    return `
        <div class="card">
            <div class="card-header">
                <h1 class="title"> Foh </h1>
                <h2 class="role">${Foh.getRole()}</h2>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="info"> first name ${Foh.getfirstName()}</li>
                    <li class="info"> last name ${Foh.getlastName()}</li>
                    <li class="info"> TABC: ${Foh.getTABC()}</li>
                    <li class="info"> employee ID: ${Foh.getEmpId()}</li>
                    <li class="info"> email: ${Foh.getEmail()}</li>
                </ul>
            </div>            
        </div>
         `
}


const formatHTML = Team => {
    console.log(`This is ln5 of HTML.`, Team)
    let htmlFile = []
    let managerTeams = Team[0]
    let fohTeams = Team[1]
    let kitchenTeams = Team[2]

    htmlFile.push(managerTeams
        .filter(Manager => Manager.getRole() === 'Manager')
        .map(Manager => managerCard(Manager))
    )

    htmlFile.push(fohTeams
        .filter(Foh => Foh.getRole() === 'Foh')
        .map(Foh => fohCard(Foh))
    )

    htmlFile.push(kitchenTeams
        .filter(Kitchen => Kitchen.getRole() === 'Kitchen')
        .map(Kitchen => kitchenCard(Kitchen))
    )

    return htmlFile
}

module.exports = Team => {

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
        </body>
        </html>
    `
}

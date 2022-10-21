const formatHTML = Team => {
    const managerCard = Manager => {

    return `

                <div class="card">
                    <div class="card-header">
                        <h1 class="title">${Manager} </h1>
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

}

module.exports = Team => {
    return `
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div> ${formatHTML(Team)}</div>
    <div id="" class="columns">

</div>
</body>
</html>
    `
}

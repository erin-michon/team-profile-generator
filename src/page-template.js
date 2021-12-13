

//Generate HTML sections based on class (employee type)
//Generate Manager Card
const generateMgr = function (manager) {

    

    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title p-3 m-0 bg-primary text-white">${manager.name}</h5>
            <h5 class="card-title p-3 bg-primary text-white"><i class="fas fa-mug-hot"></i>  Manager</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id} </li>
                <li class="list-group-item">Email:  <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}  </li>
            </ul>
        </div>
    </div>
    
    `

}

//Generate Engineer Card
const generateEng = function (engineer) {

    return `

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title p-3 m-0 bg-primary text-white">${engineer.name}</h5>
            <h5 class="card-title p-3 bg-primary text-white"><i class="fas fa-glasses"></i>  Engineer</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id} </li>
                <li class="list-group-item">Email:  <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub:  <a href="http://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
    </div>

    `

}

//Generate Intern Card
const generateIntern = function (intern) {

    return `

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title p-3 m-0 bg-primary text-white">${intern.name}</h5>
            <h5 class="card-title p-3 bg-primary text-white"><i class="fas fa-user-graduate"></i>  Intern</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id} </li>
                <li class="list-group-item">Email:  <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>

    `

}

//Generate Full HTML page
const createTeamPage = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>    
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    
        <header class = "d-flex justify-content-center p-3 mb-2 bg-danger text-white">
            <h1>My Team</h1>
        </header>
    
        <div class="container">    
            <div class="row row-cols-3 d-flex flex-wrap justify-content-center">  
    
                <!-- This is where the cards will be generated and displayed -->
    
                ${teamCards}
    
            </div>
        </div>
    
    </body>
    <script src="https://kit.fontawesome.com/77250d25a5.js" crossorigin="anonymous"></script>
    </html>

    `

}

//Export functions to be called on index.js
module.exports = { createTeamPage, generateIntern, generateMgr, generateMgr};

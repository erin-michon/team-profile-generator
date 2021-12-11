//Application Dependencies
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

//Questions for the Manager (initial prompt)
const mgrQuestions = () => {

    console.log(`
    ==================
    Add a Team Manager
    ==================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's id number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email address.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number.",
        },
        {
            type: 'list',
            name: 'newEmployee',
            choices: ["Intern", "Engineer", "The Team Is Complete!"],
            message: "Please choose an employee to add to your team."
        }
    ])
    .then(mgrData => {
        const {name , id , email, officeNumber} = mgrData;
        const manager = new Manager (name, id, email, officeNumber);
        teamArr.push(manager);

        if(mgrData.newEmployee === 'Intern') {
            return internQuestions();
        } else if (mgrData.newEmployee === 'Engineer') {
            return engQuestions();
        } else {
            console.log(teamArr);
            return //start generating file
        }
        
    });
};

//Questions for the Engineer(if selected)
const engQuestions = () => {

    console.log(`
    ===============
    Add an Engineer
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Engineer's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Engineers's id number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Engineer's email address.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's GitHub username.",
        },
        {
            type: 'list',
            name: 'newEmployee',
            choices: ["Intern", "Engineer", "The Team Is Complete!"],
            message: "Please choose an employee to add to your team."
        }
    ])
    .then(engData => {
        const {name , id , email, github} = engData;
        const engineer = new Engineer (name, id, email, github);
        teamArr.push(engineer);

        if(engData.newEmployee === 'Intern') {
            return internQuestions();
        } else if (engData.newEmployee === 'Engineer') {
            return engQuestions();
        } else {
            console.log(teamArr);
            return //start generating file
        }
        
    });

};

//Questions for the Intern(if selected)
const internQuestions = () => {

    console.log(`
    =============
    Add an Intern
    =============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Intern's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Intern's id number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Intern's email address.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school.",
        },
        {
            type: 'list',
            name: 'newEmployee',
            choices: ["Intern", "Engineer", "The Team Is Complete!"],
            message: "Please choose an employee to add to your team."
        }

    ])
    .then(internData => {
        const {name , id , email, school} = internData;
        const intern = new Intern(name, id, email, school);
        teamArr.push(intern);

        if(internData.newEmployee === 'Intern') {
            return internQuestions();
        } else if (internData.newEmployee === 'Engineer') {
            return engQuestions();
        } else {
            console.log(teamArr);
            return teamArr //start generating file
        }
        
    });
};

const generateHTML = () => {
    
}

const createTeam = () => {
    mgrQuestions()
    .then(teamArr => {
        return generateHTML(teamArr);
    })
};



//Start Application
createTeam()



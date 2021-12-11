//Application Dependencies
const inquirer = require('inquirer');

// const Engineer = require('./lib/Engineer');
// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');


//Questions for the Manager (initial prompt)
const mgrQuestions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: "Please enter the Manager's name.",
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: "Please enter the Manager's email address.",
        },
        {
            type: 'input',
            name: 'mgrOffice',
            message: "Please enter the Manager's office number.",
        },

    ]);
};

//Questions for the Engineer(if selected)
const engQuestions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engName',
            message: "Please enter the Engineer's name.",
        },
        {
            type: 'input',
            name: 'engEmail',
            message: "Please enter the Engineer's email address.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's GitHub username.",
        },

    ]);
};

//Questions for the Intern(if selected)
const internQuestions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the Intern's name.",
        },
        {
            type: 'input',
            name: 'engEmail',
            message: "Please enter the Intern's email address.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school.",
        },

    ]);
};

//Options Menu (initiated after Mgr Prompt)
const userMenu = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'employee-type',
            choices: [ "Intern", "Engineer", "The Team Is Complete!"],
            message: "Please choose an employee to add to your team."
        },
    ]);
};

function createTeam() {
    mgrQuestions();
};

//Start Application
createTeam();

module.exports = questions;
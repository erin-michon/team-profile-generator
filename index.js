//Application Dependencies
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const mgrQuestions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: "What is the team manager's email address?",
        },
        {
            type: 'input',
            name: 'mgrOffice',
            message: "What is the team manager's office number?",
        },
        {
            type: 'list',
            name: 'employee-type',
            choices: [ "Intern", "Engineer", "The Team Is Complete!"],
            message: "Please choose another employee-type to add to the team."
        },
    ]);
};

function createTeam() {
    mgrQuestions();
};

//Start Application
createTeam();

module.exports = questions;
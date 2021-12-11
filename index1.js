const inquirer = require('inquirer');

const mgrQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: "Please enter the Manager's name."
        },
                {
            type: 'input',
            name: 'mgrId',
            message: "Please enter the Manager's id number.",
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
        }
    ])
};

mgrQuestions();
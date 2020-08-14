var inquirer = require ('inquirer');
inquirer
    .prompt ([
        {
            type: 'input', 
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description?'
        },
        {
            type: 'checkbox',
            name: 'badges',
            message: 'Which badges would you like?',
            choices: ['Javascript', 'HTML', 'CSS'],
        },
        {
            
        }


            
    ])
    .then (answers => {
        console.log (answers);
    })








const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();



//from class readme.md
]).then(function(response){
    const filename = response.name.toLowerCase().split(' ').join('') + ".json";//readme.md
    fs.writeFile(filename, JSON.stringify(response, null, '\t'), function(error){
        if (error) {
            console.log(error);
            return;
        }
        console.log('Success!');
    });
});
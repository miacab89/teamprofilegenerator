const inquirer = require ("inquirer"); 
const path = require ("path");
const fs = require ("fs"); 
const Interns = require ("./intern.js");
const Managers = require ("./managers.js"); 
const Engineers = require ("./engineers.js");

// // const OUTPUT_DIR = path.resolve(__dirname, "output")
// // const outputPath = path.join(OUTPUT_DIR, "team.html");
// // ​const render = require("./lib/htmlRenderer");  
const team = {
     managers: [],
     engineers: [],
     interns: []
};  


let promptManagers  = function() {
    inquirer
    .prompt([
     {
        type: 'input',
        name: 'fullname',
        message: "What is your manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your manager's email?"
    },
    {
        type: 'input',
        name: 'office',
        message: "What is your manager's office?"
    }
]).then(function(answer) {
    
          team.manger = answer; {
             const Manager = new Manager(); {
                 this.fullname = fullname;
                 this.id = id;
                 this.email = email;
                 this.office = office;
               
             }
            
         }

         

});

}


promptManagers()

let promptAddMoreMembers = async function() {
    const addTeamMembers = await inquirer
    .prompt ([
    {
        type: 'list',
        name: 'moreTeamMembers',
        message: "Who else is on your team?",
        choices: ["Intern", "Engineer", "No one else"]
    }
    ]).then(function(answer) {
        //console.log(answer)
         team.interns.push(answer.moreTeamMembers);
   
    });

}

promptAddMoreMembers()





let promptIntern = function() {
    inquirer
    .prompt ([
    {
        type: 'input',
        name: 'fullname',
        message: "What is your intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your interns's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your interns's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your intern's school?"
    }
    ]).then(function(answer) {
 
        team.intern = answer; {
            const Manager = new Manager(); {
                this.fullname = fullname;
                this.id = id;
                this.email = email;
                this.office = office;
               
    }

            team.interns.push(interns); 

            
        }
        
    });

​}

promptIntern()

let promptEngineer = function() {
    return inquirer
    .prompt ([
    {
        type: 'input',
        name: 'fullname',
        message: "What is your engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your engineer's github?"
    }
    ]).then(function(answer) {
​
});

}

let promptAddMoreMembers = async function() {
    const {moreTeamMembers} = await inquirer
    .prompt ([
    {
        type: 'list',
        name: 'moreTeamMembers',
        message: "Who else is on your team?",
        choices: ["Intern", "Engineer", "No one else"]
    }
    ]).then(function(answer) {
        return answer;
    });
​
    if(moreTeamMembers === "Intern") { 
        // call intern prompt
        await promptIntern();
        promptAddMoreMembers();
    } else if(moreTeamMembers === "Engineer") {
        promptEngineer(); 
        // call engineer prompt
    }else {
      
        
​
        // Print out manager, array of interns, array of engineers
        console.log(team);
    }
        
        promptAddMoreMembers();
    } 

promptManagers();

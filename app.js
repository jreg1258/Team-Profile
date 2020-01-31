const inquirer = require("inquirer")
const htmlRender = require("./lib/htmlRenderer")
const fs = require("fs")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");

const outputPath = path.join(__dirname,"index.html")
const teamHTML = path.join(__dirname,"team.html")
const teamMembers = []



const appLaunch = () => {
const createManager = () => {
    
console.log("Lets create your team!")
inquirer.prompt([{
    type: "input",
    message: "What is your managers name?",
    name: "managerName",
    validate: answer => {
        if(answer!==""){
            return true
        } return "Please enter a character"
    }
},
{
    message: "Your manager's ID?",
    name: "managerID",
    validate: answer => {
        const pass = answer.match(
          /^[1-9]\d*$/
        );
        if (pass) {
          return true;
        }
        return "Please enter a positive number greater than zero.";
      }
},
{   message: "Email address?",
    name: "managerEmail",
    validate: answer => {
        const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
},
{   message: "Room number?",
    name: "managerRoom",
    validate: answer => {
        const pass = answer.match(
          /^[1-9]\d*$/
        );
        if (pass) {
          return true;
        }
        return "Please enter a positive number greater than zero.";
      }
}])
.then(answers=>{
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerRoom)
    return htmlRender.createCard(manager)
})
.then(res=>{
    fs.writeFile("./lib/team.html",
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    </head>
    <body>
    <div class="card-columns">\n${res}`, (err)=>{console.log(err)})
    createTeam()
})
.catch(err => { throw err})
}

const createTeam = () => {
inquirer.prompt([{
    type: "list",
    message: "Any other team members?",
    name: "memberChoice",
    choices: [
        "Engineer",
        "Intern",
        "I don't have anymore members"
    ]
}])
.then(answer=>{
    switch(answer.memberChoice){
        case "Engineer":
            createEngineer();
            break;
        case "Intern":
            createIntern();
            break;
        default:
            buildSite()      
    }
})
.catch(err=>{throw err})
}

const buildSite = () => {
    inquirer.prompt([{
        type: "list",
        message: "Are you finished adding members? Y or N",
        name: "answer",
        choices: [
            "Y",
            "N"
        ],
    }])
    .then(res=>{
        console.log(res.answer)
        switch(res.answer) {
            case "Y":
                const teamHTML = fs.readFileSync("./lib/team.html", (err)=>{console.log("failed")})
                const endHTML = "</div></body></html>"
                const combined = teamHTML+endHTML
                fs.writeFileSync("./index.html", combined, (err)=>{console.log("couldnt append")})
                console.log("HTML page created!")
            break

            default: 
                createTeam()
    }})
    .catch(err=>{throw err})
}


const createEngineer = () => {
    inquirer.prompt([{
        message: "What is the engineer's name?",
        name: "engineerName",
    validate: answer => {
        if(answer!==""){
            return true
        } return "Please enter a character"
    }
},
{
    message: "Your engineer's ID?",
    name: "engineerID",
    validate: answer => {
        const pass = answer.match(
          /^[1-9]\d*$/
        );
        if (pass) {
          return true;
        }
        return "Please enter a positive number greater than zero.";
      }
},
{   message: "Email address?",
    name: "engineerEmail",
    validate: answer => {
        const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
},
{   message: "What is the engineer's GitHub username?",
    name: "github",
    validate: answer => {
        if(answer!==""){
            return true
        } return "Please enter a character"
    }
    }])
    .then(answers=>{
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.github)
       return htmlRender.createCard(engineer)
    })
    .then(res=>{
        fs.appendFile("./lib/team.html",`\n${res}`, (err)=>{console.log(err)})
        createTeam()
    })
    .catch(err => { throw err})
}



const createIntern = () => {
    inquirer.prompt([{
        message: "What is your intern's name?",
        name: "internName",
        validate: answer => {
            if(answer!==""){
                return true
            } return "Please enter a character"
        }
    },
    {
        message: "Your intern's ID?",
        name: "internID",
        validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
    },
    {   message: "Email address?",
        name: "internEmail",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
            }
    },
    {   message: "What is the intern's college or university?",
        name: "school",
        validate: answer => {
            if(answer!==""){
                return true
            } return "Please enter a character"
        }
}])
.then(answers=>{
    const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school)
   return htmlRender.createCard(intern)
})
.then(res=>{
    fs.appendFile("./lib/team.html",`\n${res}`, (err)=>{console.log(err)})
    createTeam()
})
.catch(err => { throw err})
}



createManager()
}

appLaunch()
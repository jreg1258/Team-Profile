const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email)
        
        this.info = github
        this.title = "Engineer"
    }

    getGitHub() {
        return this.info
    }

    getRole() {
        return this.title
    }
}

module.exports = Engineer
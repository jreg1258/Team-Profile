const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)
        
        this.info = school
        this.title = "Intern"
    }

    getSchool() {
        return this.info
    }

    getRole() {
        return this.title
    }
}

module.exports = Intern;
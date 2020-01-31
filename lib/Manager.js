const Employee = require("../lib/Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNum) {

        super(name, id, email)
        
        this.info = officeNum
        this.title = "Manager"
    }

    getOffice() {
        return this.info
    }

    getRole() {
        return this.title
    }
}

module.exports = Manager;
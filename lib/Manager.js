const Employee = require("./Employee");

class Manager extends Employee {
    constructor(first_name, last_name, email, empid, officeNum){
        super(first_name, last_name, email, empid)
        this.officeNum = officeNum
    }
    getOfficeNum(){
        return this.officeNum
    }
    getRole(){
        return 'Manager'
    }
}
module.exports = Manager
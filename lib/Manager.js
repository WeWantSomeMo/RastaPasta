const Employee = require("./Employee");

class Manager extends Employee {
    constructor(first_name, last_name, email, empId, officeNum){
        super(first_name, last_name, email, empId)
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
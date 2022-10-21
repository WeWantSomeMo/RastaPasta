const Employee = require("./Employee");

class Manager extends Employee {
    constructor(first_name, last_name, email, EmpId, officeNum){
        super(first_name, last_name, email, EmpId)
        this.officeNum = officeNum
    }
    getOfficeNum(){
        return this.officeNum
    }
    getRole(){
        return 'Manager'
    }
    getEmpId(){
        return this.EmpId
    }
}
module.exports = Manager
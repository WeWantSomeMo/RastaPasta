const Employee = require("./Employee");

class Kitchen extends Employee {
    constructor(first_name, last_name, email, empid, safety){
        super(first_name, last_name, email, empid)
        this.safety = safety
    }
    getOfficeNum(){
        return this.safety
    }
    getRole(){
        return 'Kitchen'
    }
}
module.exports = Kitchen
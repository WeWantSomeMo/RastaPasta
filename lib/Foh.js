const Employee = require("./Employee");

class Foh extends Employee {
    constructor(first_name, last_name, email, empId, TABC){
        super(first_name, last_name, email, empId)
        this.TABC = TABC
    }
    getTABC(){
        return this.TABC
    }
    getRole(){
        return 'Foh'
    }
}
module.exports = Foh
class Employee {
    constructor(first_name, last_name, email, empId, TABC){
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.empId = empId
        this.TABC = TABC
    }
    getfirstName(){
        return this.first_name
    }
    getlastName(){
        return this.last_name
    }
    getEmail(){
        return this.email
    }
    getEmpId(){
        return this.empId
    }
    getRole(){
        return "Employee"
    }
    getTABC(){
        return this.TABC
    }
}

module.exports = Employee
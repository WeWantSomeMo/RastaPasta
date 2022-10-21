class Employee {
    constructor(first_name, last_name, email, EmpId, TABC){
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.EmpId = EmpId
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
        console.log('This is ln 19 employee js')
        return this.EmpId   
    }
    getRole(){
        return "Employee"
    }
    getTABC(){
        return this.TABC
    }
}

module.exports = Employee
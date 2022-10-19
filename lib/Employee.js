class Employee {
    constructor(first_name, last_name, email, empId){
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.empid = empId
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
}

module.exports = Employee
class Employee {
    constructor(first_name, last_name, email, empid){
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.empid = empid
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
    getempId(){
        return this.empid
    }
    getRole(){
        return "Employee"
    }
}

module.exports = Employee
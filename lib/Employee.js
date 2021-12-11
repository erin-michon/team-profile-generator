function Employee(name, email) {

    this.name = name;
    this.email = email;
    this.id = Date.now();

    this.getName = function() {
        return this.name
    };

    this.getEmail = function() {
        return this.email
    };

    this.getId = function() {
        return this.id
    };
    
    this.getRole = function() {
        return "Employee"
    }
};


module.exports = Employee;
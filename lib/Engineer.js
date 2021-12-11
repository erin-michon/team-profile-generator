function Employee(name, email, github) {

    this.name = name;
    this.email = email;
    this.id = Date.now();
    this.github = github;

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
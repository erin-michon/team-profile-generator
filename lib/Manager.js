function Manager(name, email, officeNumber) {

    this.name = name;
    this.email = email;
    this.id = Date.now();
    this.officeNumber = officeNumber;

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
        return "Manager"
    }
};


module.exports = Manager;
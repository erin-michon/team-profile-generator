function Intern (name, email, school) {

    this.name = name;
    this.email = email;
    this.id = Date.now();
    this.school = school;

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
        return "Intern"
    }

    this.getSchool = function() {
        return this.school
    }
};


module.exports = Intern;
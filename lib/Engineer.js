const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {

    constructor(name, id, email, gitHubUser){
        super(name, id, email)
        this.gitHubUser = gitHubUser;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.gitHubUser;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
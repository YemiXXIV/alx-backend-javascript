var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }
    return Teacher;
}());
var printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
console.log(printTeacher("John", "Doe"));

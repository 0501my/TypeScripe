var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    Staff.prototype.getName = function () {
        return this._name;
    };
    Staff.prototype.getEmail = function () {
        return this._email;
    };
    Staff.prototype.getAge = function () {
        return this._age;
    };
    Staff.prototype.setName = function (value) {
        this._name = value;
    };
    Staff.prototype.setEmail = function (value) {
        this._email = value;
    };
    Staff.prototype.setAge = function (value) {
        this._age = value;
    };
    return Staff;
}());
var staff = new Staff('Staff 1', 'staff@gmail.com', 20);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName("staff 2");
var currenNameStaff = staff.getName();
console.log(currenNameStaff);
var emailStaff = staff.getEmail();
console.log(emailStaff);
var ageStaff = staff.getAge();
console.log(ageStaff);

"use strict";
exports.__esModule = true;
exports.StudentClass = exports.printTeacher = void 0;
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
exports.printTeacher = printTeacher;
;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    ;
    StudentClass.prototype.displayName = function () {
        return "".concat(this.firstName);
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;

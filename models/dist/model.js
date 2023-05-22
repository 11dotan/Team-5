var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(username, name, email, phone, password, address) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.address = address;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(username, name, email, phone, password, address) {
        var _this = _super.call(this, username, name, email, phone, password, address) || this;
        _this.username = username;
        _this.name = name;
        _this.email = email;
        _this.phone = phone;
        _this.password = password;
        _this.address = address;
        _this.uid = uniqueId();
        return _this;
    }
    return Student;
}(Person));
var Lecturer = /** @class */ (function (_super) {
    __extends(Lecturer, _super);
    function Lecturer(username, name, email, phone, password, address) {
        var _this = _super.call(this, username, name, email, phone, password, address) || this;
        _this.username = username;
        _this.name = name;
        _this.email = email;
        _this.phone = phone;
        _this.password = password;
        _this.address = address;
        _this.uid = uniqueId();
        return _this;
    }
    return Lecturer;
}(Person));
var Course = /** @class */ (function () {
    function Course(nameCourse, datesCourse, lecturer, studentsCourse) {
        this.nameCourse = nameCourse;
        this.datesCourse = datesCourse;
        this.lecturer = lecturer;
        this.studentsCourse = studentsCourse;
        this.uid = uniqueId();
    }
    return Course;
}());
var courses = [];
var lecturers = [];
var students = [];
function uniqueId() {
    return "id: " + Math.random();
}

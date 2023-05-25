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
    function Person(name, id, email, phone, password, address) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.address = address;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, id, email, phone, password, address) {
        var _this = _super.call(this, name, id, email, phone, password, address) || this;
        _this.name = name;
        _this.id = id;
        _this.email = email;
        _this.phone = phone;
        _this.password = password;
        _this.address = address;
        return _this;
    }
    return Student;
}(Person));
var Lecturer = /** @class */ (function (_super) {
    __extends(Lecturer, _super);
    function Lecturer(name, id, email, phone, password, address) {
        var _this = _super.call(this, name, id, email, phone, password, address) || this;
        _this.name = name;
        _this.id = id;
        _this.email = email;
        _this.phone = phone;
        _this.password = password;
        _this.address = address;
        return _this;
    }
    return Lecturer;
}(Person));
var Course = /** @class */ (function () {
    function Course(nameCourse, datesCourse, lecturer) {
        this.nameCourse = nameCourse;
        this.datesCourse = datesCourse;
        this.lecturer = lecturer;
        this.uid = uniqueId();
    }
    return Course;
}());
var courses = [];
var lecturers = [];
var students = [];
lecturers.push(new Lecturer("Ron mizrahi", 123456789, "ron@gmail.com", +972565820, "123456", "ramat hasharon"));
lecturers.push(new Lecturer("mor oren", 123456789, "mor@gmail.com", +972565820, "159753", "ramat hasharon"));
lecturers.push(new Lecturer("ilan haim", 25134587, "ilan@gmail.com", +972565820, "2222", "ramat hasharon"));
courses.push(new Course("Full Stuck", ["1.2", "8.2", "13.2"], lecturers[0]));
courses.push(new Course("Design", ["1.2", "8.2", "13.2"], lecturers[1]));
courses.push(new Course("QA", ["1.2", "8.2", "13.2"], lecturers[2]));

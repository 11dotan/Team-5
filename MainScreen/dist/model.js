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
lecturers.push(new Lecturer("mor oren", 147258369, "mor@gmail.com", +972565820, "159753", "ramat hasharon"));
lecturers.push(new Lecturer("ilan haim", 789456123, "ilan@gmail.com", +972565820, "2222", "ramat hasharon"));
// lecturers[0].courseTeach = [];
// lecturers[1].courseTeach = [];
// lecturers[2].courseTeach = [];
courses.push(new Course("Full Stuck", ["1.5.23", "8.5.23", "15.5.23", "22.5.23", "29.5.23", "5.6.23"], lecturers[0]));
// lecturers[0].courseTeach.push(
//   new Course(courses[0].nameCourse, courses[0].datesCourse, courses[0].lecturer)
// );
courses.push(new Course("DevOps", [
    "17.5.23",
    "24.5.23",
    "31.5.23",
    "7.6.23",
    "14.6.23",
    "21.6.23",
    "28.6.23",
], lecturers[1]));
// lecturers[1].courseTeach.push(
//   new Course(courses[1].nameCourse, courses[1].datesCourse, courses[1].lecturer)
// );
courses.push(new Course("QA", [
    "11.5.23",
    "18.5.23",
    "25.5.23",
    "1.6.23",
    "8.6.23",
    "15.6.23",
    "22.6.23",
    "29.6.23",
], lecturers[2]));
// lecturers[2].courseTeach.push(
//   new Course(courses[2].nameCourse, courses[2].datesCourse, courses[2].lecturer)
// );

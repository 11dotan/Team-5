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
var Lesson = /** @class */ (function () {
    // studentsCourse: Student[];
    // attendance: number[];
    function Lesson(date, studentsCourse) {
        this.date = date;
        this.studentsCourse = studentsCourse;
        // this.studentsCourse = [];
    }
    return Lesson;
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
        // this.coursesUser = [];
        // this.grades = [];
        _this.attendance = [];
        return _this;
    }
    return Student;
}(Person));
var Lecturer = /** @class */ (function (_super) {
    __extends(Lecturer, _super);
    //   courseTeach: Course[];
    function Lecturer(name, id, email, phone, password, address) {
        var _this = _super.call(this, name, id, email, phone, password, address) || this;
        _this.name = name;
        _this.id = id;
        _this.email = email;
        _this.phone = phone;
        _this.password = password;
        _this.address = address;
        return _this;
        // this.courseTeach = [];
    }
    return Lecturer;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, id, email, phone, password, address) {
        var _this = _super.call(this, name, id, email, phone, password, address) || this;
        _this.name = name;
        _this.id = id;
        _this.email = email;
        _this.phone = phone;
        _this.password = password;
        _this.address = address;
        return _this;
    }
    return Admin;
}(Person));
var Course = /** @class */ (function () {
    function Course(nameCourse, datesCourse, lecturer) {
        this.nameCourse = nameCourse;
        this.datesCourse = datesCourse;
        this.lecturer = lecturer;
        this.uid = uniqueId();
        this.studentsCourse = [];
        this.lesson = [];
    }
    return Course;
}());
var courses = [];
var lecturers = [];
var students = [];
var admins = [];
var ronL = new Lecturer("Ron mizrahi", 123456789, "ron@gmail.com", +972565820, "123456", "ramat hasharon");
var morL = new Lecturer("mor oren", 147258369, "mor@gmail.com", +972565820, "159753", "ramat hasharon");
var ilanL = new Lecturer("ilan haim", 789456123, "ilan@gmail.com", +972565820, "2222", "ramat hasharon");
lecturers.push(ronL, morL, ilanL);
var fullC = new Course("Full Stuck", ["1.5.23", "8.5.23", "15.5.23", "22.5.23", "29.5.23", "5.6.23"], lecturers[0]);
var devopsC = new Course("DevOps", ["17.5.23", "24.5.23", "31.5.23", "7.6.23", "14.6.23", "21.6.23", "28.6.23"], lecturers[1]);
var qaC = new Course("QA", [
    "11.5.23",
    "18.5.23",
    "25.5.23",
    "1.6.23",
    "8.6.23",
    "15.6.23",
    "22.6.23",
    "29.6.23",
], lecturers[2]);
courses.push(fullC, devopsC, qaC);
// ronL.courseTeach.push(fullC);
// morL.courseTeach.push(devopsC);
// ilanL.courseTeach.push(qaC);
var fullS1 = new Student("oshrat sebbag", 200670054, "oshrat@gmail.com", 9725063214564, "159", "kinor 20");
var fullS2 = new Student("dotan toledano", 123485725, "dotan@gmail.com", 972546042815, "25826", "kineret 2");
var fullS3 = new Student("daniel daniel", 15248759, "daniel@gmail.com", 972506547825, "321456", "tamar 10");
var fullS4 = new Student("amit balsan", 122548743, "amit@gmail.com", 972523514875, "11147", "reshef 42");
fullC.studentsCourse.push(fullS1, fullS2, fullS3, fullS4);
var admin1 = new Admin("admin admin", 555555555, "admin@gmail.com", 97254875425, "admin", "hermon 7");
admins.push(admin1);
console.log(admins);
// fullS1.coursesUser.push(fullC);
// fullS2.coursesUser.push(fullC);
// fullS3.coursesUser.push(fullC);
// fullS4.coursesUser.push(fullC);
students.push(fullS1, fullS2, fullS3, fullS4);
var lessons = [];
// const lesson1 = new Lesson("1 / 5 / 2023", fullC.studentsCourse);
// const lesson2 = new Lesson("8 / 5 / 2023", fullC.studentsCourse);
// const lesson3 = new Lesson("15 / 5 / 2023", fullC.studentsCourse);
// const lesson4 = new Lesson("22 / 5 / 2023", fullC.studentsCourse);
// const lesson5 = new Lesson("29/ 5 / 2023", fullC.studentsCourse);
// const lesson6 = new Lesson("5/ 6 / 2023", fullC.studentsCourse);
// lesson1.studentsCourse.push(fullS1, fullS2, fullS3, fullS4);
// lesson2.studentsCourse.push(fullS1, fullS2, fullS3, fullS4);
// lesson3.studentsCourse.push(fullS1, fullS2, fullS3, fullS4);
// lesson4.studentsCourse.push(fullS1, fullS2, fullS3, fullS4);
// lesson5.studentsCourse.push(fullS1, fullS2, fullS3, fullS4);
// lesson6.studentsCourse.push(fullS1, fullS2, fullS3, fullS4);
// fullC.lesson.push(lesson1, lesson2, lesson3, lesson4, lesson5, lesson6);

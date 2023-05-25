var _students = getStudentFromLS();
if (_students) {
    students.push.apply(students, _students);
}
var _courses = getCourseFromLS();
if (_courses) {
    courses = _courses;
}
var _lecturers = getLecturerFromLS();
if (_lecturers) {
    lecturers = _lecturers;
}

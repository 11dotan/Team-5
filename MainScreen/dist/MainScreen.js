var _students = getStudentFromLS();
if (_students) {
    students.push.apply(students, _students);
}
var _courses = getCourseFromLS();
if (_courses) {
    courses.push.apply(courses, _courses);
}
var _lecturers = getLecturerFromLS();
if (_lecturers) {
    lecturers.push.apply(lecturers, _lecturers);
}

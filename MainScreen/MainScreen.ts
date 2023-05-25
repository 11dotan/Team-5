const _students = getStudentFromLS();
if (_students) {
  students.push(..._students);
}

const _courses = getCourseFromLS();
if (_courses) {
  courses = _courses;
}

const _lecturers = getLecturerFromLS();
if (_lecturers) {
  lecturers = _lecturers;
}

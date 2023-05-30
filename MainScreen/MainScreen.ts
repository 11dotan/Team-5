const _students = getStudentFromLS();
if (_students) {
  students = _students;
}

const _courses = getCourseFromLS();
if (_courses) {
  courses = _courses;
}
const _lecturers = getLecturerFromLS();
if (_lecturers) {
  lecturers = _lecturers;
}

const _admins = getAdminFromLS();
if (_admins) {
  admins = _admins;
}

saveStudentToLS(students);
saveAdminToLS(admins);
saveCourseToLS(courses);
saveLecturerToLS(lecturers);

let paramsL = new URLSearchParams(window.location.search);
let indexPass = paramsL.get("indexPass");

let _students = getStudentFromLS();
if (_students) {
  students = _students;
}

let _courses = getCourseFromLS();
if (_courses) {
  courses = _courses;
}

let _lecturers = getLecturerFromLS();
if (_lecturers) {
  lecturers = _lecturers;
}

let _admins = getAdminFromLS();
if (_admins) {
  admins = _admins;
}




lecturerInnerFunc(indexPass);
// console.log(courses);
// console.log(lecturers);

function lecturerInnerFunc(indexPass) {
  try {
    if (!indexPass) throw new Error(`user not found`);
    lecturerMenuName.innerHTML = `Hello ${lecturers[indexPass].name}`;
  } catch (error) {
    console.log(error);
  }
}

lecturerCourses(indexPass);


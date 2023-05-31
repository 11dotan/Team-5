adminMenuAddLecturer.addEventListener("click", (e) => {
  addLecturerForm.style.display = "flex";
  addCourseForm.style.display = "none";
  deleteCoursesForm.style.display = "none";
  deleteLecturersForm.style.display = "none";
});

function HandleAddLecturer(e) {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const id = e.target.elements.id.value;
  const email = e.target.elements.email.value;
  const phone = e.target.elements.phone.value;
  const address = e.target.elements.address.value;
  const password = e.target.elements.pass.value;
  const cPass = e.target.elements.cPass.value;
  if (password != cPass) {
    adminInnerMs.innerHTML = `<h2>Passwords Are Not Match</h2>`;
    throw new Error("Passwords Are Not Match");
  }

  const newLecturer = new Lecturer(name, id, email, phone, password, address);

  lecturers.push(newLecturer);
  saveLecturerToLS(lecturers);

  adminInnerMs.innerHTML = `<h2>Lecturer added successfully</h2>`;
}

adminMenuAddCourse.addEventListener("click", (e) => {
  addCourseForm.style.display = "flex";
  addLecturerForm.style.display = "none";
  deleteCoursesForm.style.display = "none";
  deleteLecturersForm.style.display = "none";

  const htmlL: string = lecturers
    .map((lecturer) => {
      return `<option> ${lecturer.name}</option>`;
    })
    .join(" ");
  listLecturers.innerHTML = `
<select type="Lecturer[]" class="addCourseForm__line__listLecturers" name="lecturerC">
${htmlL}
</select><br><br>`;
});

function HandleAddCourse(e) {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const dates = e.target.elements.dates.value;
  const lecturerC = e.target.elements.lecturerC.value;

  const datesArray = dates.split(" ");
  const lecturerIndex = lecturers.findIndex(
    (lecturer) => lecturer.name === lecturerC
  );
  const newCourse = new Course(name, datesArray, lecturers[lecturerIndex]);

  courses.push(newCourse);

  saveCourseToLS(courses);
  console.log(lecturerC);

  adminInnerMs2.innerHTML = `<h2>Course added successfully</h2>`;
}

deleteLecturers.addEventListener("click", (e) => {
  addCourseForm.style.display = "none";
  addLecturerForm.style.display = "none";
  deleteLecturersForm.style.display = "flex";
  deleteCoursesForm.style.display = "none";
  const htmlL: string = lecturers
    .map((lecturer) => {
      return `<option> ${lecturer.name}</option>`;
    })
    .join(" ");
  listLecturersDel.innerHTML = `
<select type="Lecturer[]"  name="lecturerD">
${htmlL}
</select><br><br>`;
});
function HandleDeleteLecturer(e) {
  e.preventDefault();
  const lecturerD = e.target.elements.lecturerD.value;
  const dLecturerIndex = lecturers.findIndex(
    (lecturer) => lecturer.name === lecturerD
  );
  if (dLecturerIndex !== -1) {
    lecturers.splice(dLecturerIndex, 1);
    console.log(`we deleted ${lecturerD}`);
  }
  saveLecturerToLS(lecturers);
}
deleteCourses.addEventListener("click", (e) => {
  addCourseForm.style.display = "none";
  addLecturerForm.style.display = "none";
  deleteLecturersForm.style.display = "none";
  deleteCoursesForm.style.display = "flex";

  const htmlL: string = courses
    .map((course) => {
      return `<option> ${course.nameCourse}</option>`;
    })
    .join(" ");
  listCoursesDel.innerHTML = `
<select type="Course[]"  name="courseD">
${htmlL}
</select><br><br>`;
});
function HandleDeleteCourse(e) {
  e.preventDefault();
  const courseD = e.target.elements.courseD.value;
  const dCourseIndex = courses.findIndex(
    (course) => course.nameCourse === courseD
  );
  if (dCourseIndex !== -1) {
    courses.splice(dCourseIndex, 1);
    console.log(`we deleted ${courseD}`);
  }
  saveCourseToLS(courses);
}
// console.log(courses);

deleteStudents.addEventListener("click", () => {
  addCourseForm.style.display = "none";
  addLecturerForm.style.display = "none";
  deleteLecturersForm.style.display = "none";
  deleteCoursesForm.style.display = "none";
  deleteStudentFromCourse.style.display = "flex";
  console.log(123);

  for (let i = 0; i < courses.length; i++) {
    const buttonCourse = courses
      .map((course) => {
        return `<button class="courseNum${i} onclick="courseNum${i}">${course.nameCourse}</button>`;
      })
      .join("");
    // const buttonCourse = `<button class="courseNum${i} onclick="courseNum${i}">${courseNamos}</button>`;
    deleteStudentFromCourse.innerHTML = buttonCourse;
  }
});

adminMenuAddLecturer.addEventListener("click", (e) => {
  addLecturerForm.style.display = "flex";
  addCourseForm.style.display = "none";
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

const htmlL: string = lecturers
  .map((lecturer) => {
    return `<option> ${lecturer.name}</option>`;
  })
  .join(" ");
listLecturers.innerHTML = `
<select class="addCourseForm__line__listLecturers" name="lecturers">
${htmlL}
</select><br><br>`;

adminMenuAddCourse.addEventListener("click", (e) => {
  addCourseForm.style.display = "flex";
  addLecturerForm.style.display = "none";
});

function HandleAddCourse(e) {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const dates = e.target.elements.dates.value;
  const lecturers = e.target.elements.lecturers.value;

  const newCourse = new Course(name, dates, lecturers);

  courses.push(newCourse);

  saveCourseToLS(courses);

  adminInnerMs2.innerHTML = `<h2>Course added successfully</h2>`;
}

const html: string = courses
  .map((course) => {
    return `<option> ${course.nameCourse}</option>`;
  })
  .join(" ");
listCourse.innerHTML = `
<select class="registerForm__line__listCourse" name="courses">
${html}
</select><br><br>`;

function HandleSubmit(e) {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const id = e.target.elements.id.value;
  const email = e.target.elements.email.value;
  const phone = e.target.elements.phone.value;
  const address = e.target.elements.address.value;
  const password = e.target.elements.pass.value;
  const cPass = e.target.elements.cPass.value;
  const courseUser = e.target.elements.courses.value;
  if (password != cPass) {
    alert("Passwords Are Not Match");
    throw new Error("Passwords Are Not Match");
  }

  const newStudent = new Student(name, id, email, phone, password, address);
  newStudent.coursesUser = [];

  const index: number = courses.findIndex(
    (course) => course.nameCourse === courseUser
  );

  newStudent.coursesUser.push(
    new Course(
      courses[index].nameCourse,
      courses[index].datesCourse,
      courses[index].lecturer
    )
  );
  students.push(newStudent);

  console.log(students);
  saveStudentToLS(students);

  const indexEmail: number = students.length - 1;
  const url = new URL("../userScreen/userScreen.html", window.location.href);
  url.searchParams.set("indexEmail", indexEmail);
  window.location.href = url.href;
}

function saveStudentToLS(students: Student[]) {
  try {
    if (!students) throw new Error("info is null");
    localStorage.setItem("students", JSON.stringify(students));
  } catch (error) {
    console.log(error);
  }
}

function getStudentFromLS(): Student[] | undefined {
  const data = localStorage.getItem("students");
  const _students = JSON.parse(data);
  return _students;
}

function saveLecturerToLS(lecturers: Lecturer[]) {
  try {
    if (!lecturers) throw new Error("lecturers is null");
    localStorage.setItem("lecturers", JSON.stringify(lecturers));
  } catch (error) {
    console.log(error);
  }
}

function getLecturerFromLS(): Lecturer[] | undefined {
  const data = localStorage.getItem("lecturers");
  const _lecturers = JSON.parse(data);
  return _lecturers;
}

function saveCourseToLS(courses: Course[]) {
  try {
    if (!courses) throw new Error("courses is null");
    localStorage.setItem("courses", JSON.stringify(courses));
  } catch (error) {
    console.log(error);
  }
}

function getCourseFromLS(): Course[] | undefined {
  const data = localStorage.getItem("courses");
  const _courses = JSON.parse(data);
  return _courses;
}

saveCourseToLS(courses);
saveLecturerToLS(lecturers);

login.addEventListener("click", (e) => {
  loginLecturer.style.display = "block";
  loginStudent.style.display = "block";
});

loginLecturer.addEventListener("click", (e) => {
  loginLecturerForm.style.display = "block";
  loginLecturer.style.display = "none";
  loginStudent.style.display = "none";
});

loginStudent.addEventListener("click", (e) => {
  loginStudentForm.style.display = "block";
  loginLecturer.style.display = "none";
  loginStudent.style.display = "none";
});

function HandleLecturerLogin(e) {
  try {
    e.preventDefault();
    const emailCheck = e.target.elements.emailCheck.value;
    const passCheck = e.target.elements.passCheck.value;
    const indexEmail: number | null = lecturers.findIndex(
      (lecturer) => lecturer.email === emailCheck
    );
    const indexPass: number | null = lecturers.findIndex(
      (lecturer) => lecturer.password === passCheck
    );
    if (indexEmail !== -1 && indexPass !== -1 && indexEmail === indexPass) {
      const url = new URL(
        "../userScreen/userScreen.html",
        window.location.href
      );
      url.searchParams.set("indexPass", indexPass);
      window.location.href = url.href;
    } else {
      wrongInfo.innerHTML = `You entered wrong userName or Password`;
    }
  } catch (error) {
    console.log(error);
  }
}

function handleStudentLogin(e) {
  try {
    e.preventDefault();
    const emailCheck = e.target.elements.emailCheck.value;
    const passCheck = e.target.elements.passCheck.value;
    const indexEmail = students.findIndex(
      (student) => student.email === emailCheck
    );
    const indexPass = students.findIndex(
      (student) => student.password === passCheck
    );
    if (indexEmail !== -1 && indexPass !== -1 && indexEmail === indexPass) {
      const url = new URL(
        "../userScreen/userScreen.html",
        window.location.href
      );
      url.searchParams.set("indexEmail", indexEmail);
      window.location.href = url.href;
    } else {
      wrongInfo.innerHTML = `You entered wrong userName or Password`;
    }
  } catch (error) {
    console.log(error);
  }
}

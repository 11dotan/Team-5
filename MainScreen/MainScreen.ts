console.log(courses);
console.log(lecturers);

const html: string = courses
  .map((course) => {
    return `<option> ${course.nameCourse}</option>`;
  })
  .join(" ");
listCourse.innerHTML = `<br><label for="courses">Choose a course:</label><br>
<select name="courses">
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
}

function saveStudentToLS(students: Student[]) {
  try {
    if (!students) throw new Error("students is null");
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

const _students = getStudentFromLS();

if (_students) {
  students.push(..._students);
}

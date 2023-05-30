lecturerMenuCourses.addEventListener("click", (e) => {
  lecturerCourses(indexPass);
});

function lecturerCourses(indexPass) {
  const idLecturer = lecturers[indexPass].id;
  try {
    if (!courses) throw new Error(`courses not found`);

    const html: string = courses
      .map((course) => {
        if (idLecturer === course.lecturer.id) {
          return `
                <div class="CourseCard" onclick="HandleOpenCourse('${course.uid}','${course.nameCourse}')">
                    <h2>${course.nameCourse}</h2>
                    <h3>Lecturer: ${course.lecturer.name}</h3>
                    <h3> Start Date: ${course.datesCourse[0]}</h3>
                </div>`;
        }
      })
      .join(" ");
    lecturerInner.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

let courseIndex: number;

function HandleOpenCourse(
  courseUid: string,
  nameCourseL: string,
  courseIndex: number
) {
  courseIndex = courses.findIndex((course) => course.uid === courseUid);
  localStorage.setItem("courseIndex", JSON.stringify(courseIndex));
  lecturerMenu.style.display = "none";
  courseMenu.style.display = "flex";
  courseName.innerHTML = `${nameCourseL}`;
}

courseAttendance.addEventListener("click", (e) => {
  lecturerInner.style.display = "none";
  lecturerInnerAttendance.style.display = "flex";
  attendanceCourse();
});

function attendanceCourse() {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);

  const datesArr = courses[_courseindex].datesCourse;

  let html: string = "";
  for (let i = 0; i < datesArr.length; i++) {
    html += `
    <div class="cardDate" onclick="markAttendance('${i}')">
    <h1>Lesson ${i + 1}</h1>
    <h3>Date: ${datesArr[i]}</h3>
  </div>
  `;
  }
  lecturerInnerAttendance.innerHTML = html;
}

function markAttendance(numlesson: number) {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);
  lecturerInnerAttendance.style.display = "none";
  lecturerInnerLessons.style.display = "flex";
  lecturerInnerLessons.style.flexDirection = "column";
  for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
    const student = courses[_courseindex].studentsCourse[i];
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(student.name));
    studentsList?.appendChild(listItem);
  }
}
submitButton.addEventListener("click", () => {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);
  for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
    const checkbox = studentsList?.children[i].querySelector(
      "input[type=checkbox]"
    );
    if (checkbox?.checked) {
      const studentI = courses[_courseindex].studentsCourse[i];
      studentI.attendance.push(1);
      console.log(studentI);

      console.log(courses[_courseindex].studentsCourse[i]);
    } else {
      courses[_courseindex].studentsCourse[i].attendance.push(0);

      // console.log(3);

      // console.log(courses[_courseindex].studentsCourse[i].attendance);
    }
  }

  saveCourseToLS(courses);
  saveStudentToLS(students);
  lecturerInnerAttendance.style.display = "flex";
  lecturerInnerLessons.style.display = "none";
  lecturerInnerLessons.innerHTML = "";
});

console.log(students[1]);
console.log(students[1].attendance);

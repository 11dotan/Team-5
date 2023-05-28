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
  lecturerInnerLessons.style.display = "grid";
  lecturerInnerAttendance.style.display = "none";
  // lecturerInnerAttendance.innerHTML = "";
});
function getindex(): number {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  return JSON.parse(data);
}
const _courseindex = getindex();

function markAttendance(numLesson: number) {
  lecturerInnerLessons.style.display = "none";
  lecturerInnerAttendance.style.display = "flex";
  // function getindex(): number {
  //   let data = localStorage.getItem("courseIndex");
  //   if (!data) throw new Error("data is null");
  //   return JSON.parse(data);
  // }
  // const _courseindex = getindex();
  // const studentslist=document.createElement("ul")

  for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
    const student = courses[_courseindex].studentsCourse[i];
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(student.name));
    studentsList?.appendChild(listItem);
  }

  submitButton.addEventListener("click", () => {
    for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
      const checkbox = studentsList?.children[i].querySelector(
        "input[type=checkbox]"
      );
      if (checkbox?.checked) {
        const studentI =
          courses[_courseindex].lesson[numLesson].studentsCourse[i];
        // const lessonR = courseR.lesson[numLesson];
        console.log(1);

        // const studentI = lessonR.studentsCourse[i];
        studentI.attendance = 1;

        // console.log(courses[_courseindex].studentsCourse[i]);
        // console.log();
      } else {
        const studentNI =
          courses[_courseindex].lesson[numLesson].studentsCourse[i];
        studentNI.attendance = 0;
        // console.log(courses[_courseindex].studentsCourse[i].attendance);
      }
    }
    saveCourseToLS(courses);
  });
}
// function getindex(): number {
//   let data = localStorage.getItem("courseIndex");
//   if (!data) throw new Error("data is null");
//   return JSON.parse(data);
// }
// const _courseindex = getindex();

// for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
//   const student = courses[_courseindex].studentsCourse[i];
//   const listItem = document.createElement("li");
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   listItem.appendChild(checkbox);
//   listItem.appendChild(document.createTextNode(student.name));
//   studentsList?.appendChild(listItem);
// }

// submitButton.addEventListener("click", () => {
//   for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
//     const checkbox = studentsList?.children[i].querySelector(
//       "input[type=checkbox]"
//     );
//     if (checkbox?.checked) {
//       const courseR = courses[_courseindex];
//       const lessonR = courseR.lesson;
//       const studentI = courseR.studentsCourse[i];
//       studentI.attendance.push(1);

//       console.log(courses[_courseindex].studentsCourse[i]);
//     } else {
//       courses[_courseindex].studentsCourse[i].attendance.push(0);
//       // console.log(courses[_courseindex].studentsCourse[i].attendance);
//     }
//   }
//   saveCourseToLS(courses);
// });
console.log(students[1]);
console.log(students[1].attendance);

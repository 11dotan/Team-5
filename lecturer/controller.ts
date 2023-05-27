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
});
function getindex(): number {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  return JSON.parse(data);
}
const _courseindex = getindex();
console.log(_courseindex);

console.log(courses);

lecturerInnerAttendance.innerHTML = `<h1>${courses[_courseindex].nameCourse} </h1><br><br>`;
for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
  const student = courses[_courseindex].studentsCourse[i];
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.appendChild(checkbox);
  listItem.appendChild(document.createTextNode(student.name));
  lecturerInnerAttendance.appendChild(listItem);
}

// function toggleAttendance(index) {
//   students[index].attendance = true;

//   console.log(`Attendance toggled for ${students[index].name}`);
//   console.log(students[index].attendance);
// }

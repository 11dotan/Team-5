userMenuCourses.addEventListener("click", (e) => {
  userCourses(indexEmail);
});

function userCourses(indexEmail) {
  const idUser = students[indexEmail].id;
  try {
    if (!students) throw new Error(`students not found`);
    console.log(idUser);

    const html: string = courses
      .map((course) => {
        return course.studentsCourse
          .map((student) => {
            if (idUser === student.id) {
              return `
                  <div class="CourseCard" onclick="HandleOpenCourseU('${course.uid}','${course.nameCourse}')">
                      <h2>${course.nameCourse}</h2>
                      <h3>Lecturer: ${course.lecturer.name}</h3>
                      <h3> Start Date: ${course.datesCourse[0]}</h3>
                  </div>`;
            }
          })
          .join(" ");
      })
      .join(" ");
    userInner.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

function HandleOpenCourseU(
  courseUid: string,
  nameCourseL: string,
  courseIndex: number
) {
  courseIndex = courses.findIndex((course) => course.uid === courseUid);
  localStorage.setItem("courseIndex", JSON.stringify(courseIndex));
  userMenu.style.display = "none";
  userCourseMenu.style.display = "flex";
  userCourseName.innerHTML = `${nameCourseL}`;
}

userCourseBack.addEventListener("click", (e) => {
  userMenu.style.display = "flex";
  userCourseMenu.style.display = "none";
  // lecturerInnerLessons.style.display = "none";
  // lecturerInner.style.display = "flex";
  // lecturerInnerGrades.style.display = "none";
});

userCourseAttendance.addEventListener("click", (e) => {
  userInner.style.display = "none";
  userInnerGrade.style.display = "none";
  userInnerAtt.style.display = "block";
  userAttendance();
});

function userAttendance() {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);

  const idUser = students[indexEmail].id;

  const _studentsCourse = courses[_courseindex].studentsCourse;
  const _userIndex = _studentsCourse.findIndex(
    (student) => student.id === idUser
  );

  console.log(_courseindex);
  console.log(idUser);
  console.log(_userIndex);

  const datesArr = courses[_courseindex].datesCourse;

  let sum: number = 0;
  let html: string = "";
  for (let i = 0; i < datesArr.length; i++) {
    html += `
   
   
    Date: ${datesArr[i]}<br>Attendance: ${checkAtt(
      i,
      _studentsCourse[_userIndex].attendance
    )}<br><br>
    `;
  }

  for (let z = 0; z < _studentsCourse[_userIndex].attendance.length; z++) {
    sum += _studentsCourse[_userIndex].attendance[z];
  }

  let html2: string = `<h2>Summary: You have attendant ${sum} from ${_studentsCourse[_userIndex].attendance.length} lessons until now</h2>`;
  console.log(html);

  userInnerAtt.innerHTML = ` <div class="attLesson">${html}</div>${html2}`;
}

function checkAtt(i, userAttArr): string {
  if (userAttArr[i] === 1) {
    return "Attend";
  } else if (userAttArr[i] === 0) {
    return "Absent";
  } else {
    return "Lesson has not took place yet";
  }
}

// userCourseGrades.addEventListener("click", (e) => {
//   userInner.style.display = "none";
//   userInnerGrade.style.display = "block";
//   userInnerAtt.style.display = "none";
//   userGrades();
// });

// function userGrades() {
//   let data = localStorage.getItem("courseIndex");
//   if (!data) throw new Error("data is null");
//   const _courseindex = JSON.parse(data);

//   const idUser = students[indexEmail].id;

//   const _studentsCourse = courses[_courseindex].studentsCourse;
//   const _userIndex = _studentsCourse.findIndex(
//     (student) => student.id === idUser
//   );

//   console.log(_courseindex);
//   console.log(idUser);
//   console.log(_userIndex);

//   const datesArr = courses[_courseindex].datesCourse;

//   let sum: number = 0;
//   let html: string = "";
//   for (let i = 0; i < datesArr.length; i++) {
//     html += `

//     Date: ${datesArr[i]}<br>Attendance: ${checkGrade(
//       i,
//       _studentsCourse[_userIndex].grades
//     )}<br><br>
//     `;
//   }

//   for (let z = 0; z < _studentsCourse[_userIndex].attendance.length; z++) {
//     sum += _studentsCourse[_userIndex].attendance[z];
//   }

//   let html2: string = `<h2>Summary: You have attendant ${sum} from ${_studentsCourse[_userIndex].attendance.length} lessons until now</h2>`;
//   console.log(html);

//   userInnerGrade.innerHTML = ` <div class="attLesson">${html}</div>${html2}`;
// }

// function checkGrade(i, userGradeArr): string {
//   if (userGradeArr[i] >= 0) {
//     return "userGradeArr[i]";
//   } else {
//     return "Grade not given yet";
//   }
// }

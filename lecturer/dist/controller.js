lecturerMenuCourses.addEventListener("click", function (e) {
    lecturerCourses(indexPass);
});
function lecturerCourses(indexPass) {
    var idLecturer = lecturers[indexPass].id;
    try {
        if (!courses)
            throw new Error("courses not found");
        var html = courses
            .map(function (course) {
            if (idLecturer === course.lecturer.id) {
                return "\n                <div class=\"CourseCard\" onclick=\"HandleOpenCourse('" + course.uid + "','" + course.nameCourse + "')\">\n                    <h2>" + course.nameCourse + "</h2>\n                    <h3>Lecturer: " + course.lecturer.name + "</h3>\n                    <h3> Start Date: " + course.datesCourse[0] + "</h3>\n                </div>";
            }
        })
            .join(" ");
        lecturerInner.innerHTML = html;
    }
    catch (error) {
        console.log(error);
    }
}
var courseIndex;
function HandleOpenCourse(courseUid, nameCourseL, courseIndex) {
    courseIndex = courses.findIndex(function (course) { return course.uid === courseUid; });
    localStorage.setItem("courseIndex", JSON.stringify(courseIndex));
    lecturerMenu.style.display = "none";
    courseMenu.style.display = "flex";
    courseName.innerHTML = "" + nameCourseL;
}
courseAttendance.addEventListener("click", function (e) {
    lecturerInner.style.display = "none";
    lecturerInnerLessons.style.display = "grid";
    lecturerInnerAttendance.style.display = "none";
    // lecturerInnerAttendance.innerHTML = "";
});
function getindex() {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    return JSON.parse(data);
}
var _courseindex = getindex();
function markAttendance(numLesson) {
    lecturerInnerLessons.style.display = "none";
    lecturerInnerAttendance.style.display = "flex";
    // function getindex(): number {
    //   let data = localStorage.getItem("courseIndex");
    //   if (!data) throw new Error("data is null");
    //   return JSON.parse(data);
    // }
    // const _courseindex = getindex();
    // const studentslist=document.createElement("ul")
    for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
        var student = courses[_courseindex].studentsCourse[i];
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(student.name));
        studentsList === null || studentsList === void 0 ? void 0 : studentsList.appendChild(listItem);
    }
    submitButton.addEventListener("click", function () {
        for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
            var checkbox = studentsList === null || studentsList === void 0 ? void 0 : studentsList.children[i].querySelector("input[type=checkbox]");
            if (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) {
                var studentI = courses[_courseindex].lesson[numLesson].studentsCourse[i];
                // const lessonR = courseR.lesson[numLesson];
                console.log(1);
                // const studentI = lessonR.studentsCourse[i];
                studentI.attendance = 1;
                // console.log(courses[_courseindex].studentsCourse[i]);
                // console.log();
            }
            else {
                var studentNI = courses[_courseindex].lesson[numLesson].studentsCourse[i];
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

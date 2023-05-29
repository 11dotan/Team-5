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
courseMenuBack.addEventListener("click", function (e) {
    lecturerMenu.style.display = "flex";
    courseMenu.style.display = "none";
    lecturerInnerAttendance.style.display = "none";
    lecturerInner.style.display = "flex";
});
courseAttendance.addEventListener("click", function (e) {
    lecturerInner.style.display = "none";
    lecturerInnerAttendance.style.display = "flex";
    attendanceCourse();
});
function attendanceCourse() {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    var datesArr = courses[_courseindex].datesCourse;
    var html = "";
    for (var i = 0; i < datesArr.length; i++) {
        html += "\n    <div class=\"cardDate\" onclick=\"markAttendance('" + i + "')\">\n    <h1>Lesson " + (i + 1) + "</h1>\n    <h3>Date: " + datesArr[i] + "</h3>\n  </div>\n  ";
    }
    lecturerInnerAttendance.innerHTML = html;
}
function markAttendance(numlesson) {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    lecturerInnerAttendance.style.display = "none";
    lecturerInnerLessons.style.display = "flex";
    lecturerInnerLessons.style.flexDirection = "column";
    for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
        var student = courses[_courseindex].studentsCourse[i];
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(student.name));
        studentsList === null || studentsList === void 0 ? void 0 : studentsList.appendChild(listItem);
    }
}
submitButton.addEventListener("click", function () {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
        var checkbox = studentsList === null || studentsList === void 0 ? void 0 : studentsList.children[i].querySelector("input[type=checkbox]");
        if (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) {
            var studentI = courses[_courseindex].studentsCourse[i];
            studentI.attendance.push(1);
            console.log(studentI);
            console.log(courses[_courseindex].studentsCourse[i]);
        }
        else {
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

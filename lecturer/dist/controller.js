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
    lecturerInnerAttendance.style.display = "flex";
});
function getindex() {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    return JSON.parse(data);
}
var _courseindex = getindex();
console.log(_courseindex);
console.log(courses);
lecturerInnerAttendance.innerHTML = "<h1>" + courses[_courseindex].nameCourse + " </h1><br><br>";
for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
    var student = courses[_courseindex].studentsCourse[i];
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input");
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

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
                return "\n                <div class=\"CourseCard\">\n                    <h2>" + course.nameCourse + "</h2>\n                    <h3>Lecturer: " + course.lecturer.name + "</h3>\n                    <h3> Start Date: " + course.datesCourse[0] + "</h3>\n                </div>";
            }
        })
            .join(" ");
        lecturerInner.innerHTML = html;
    }
    catch (error) {
        console.log(error);
    }
}

adminMenuAddLecturer.addEventListener("click", function (e) {
    addLecturerForm.style.display = "flex";
    addCourseForm.style.display = "none";
});
function HandleAddLecturer(e) {
    e.preventDefault();
    var name = e.target.elements.name.value;
    var id = e.target.elements.id.value;
    var email = e.target.elements.email.value;
    var phone = e.target.elements.phone.value;
    var address = e.target.elements.address.value;
    var password = e.target.elements.pass.value;
    var cPass = e.target.elements.cPass.value;
    if (password != cPass) {
        adminInnerMs.innerHTML = "<h2>Passwords Are Not Match</h2>";
        throw new Error("Passwords Are Not Match");
    }
    var newLecturer = new Lecturer(name, id, email, phone, password, address);
    lecturers.push(newLecturer);
    saveLecturerToLS(lecturers);
    adminInnerMs.innerHTML = "<h2>Lecturer added successfully</h2>";
}
adminMenuAddCourse.addEventListener("click", function (e) {
    addCourseForm.style.display = "flex";
    addLecturerForm.style.display = "none";
    var htmlL = lecturers
        .map(function (lecturer) {
        return "<option> " + lecturer.name + "</option>";
    })
        .join(" ");
    listLecturers.innerHTML = "\n<select type=\"Lecturer[]\" class=\"addCourseForm__line__listLecturers\" name=\"lecturerC\">\n" + htmlL + "\n</select><br><br>";
});
function HandleAddCourse(e) {
    e.preventDefault();
    var name = e.target.elements.name.value;
    var dates = e.target.elements.dates.value;
    var lecturerC = e.target.elements.lecturerC.value;
    var datesArray = dates.split(" ");
    var lecturerIndex = lecturers.findIndex(function (lecturer) { return lecturer.name === lecturerC; });
    var newCourse = new Course(name, datesArray, lecturers[lecturerIndex]);
    courses.push(newCourse);
    saveCourseToLS(courses);
    console.log(lecturerC);
    adminInnerMs2.innerHTML = "<h2>Course added successfully</h2>";
}

var html = courses
    .map(function (course) {
    return "<option> " + course.nameCourse + "</option>";
})
    .join(" ");
listCourse.innerHTML = "\n<select class=\"registerForm__line__listCourse\" name=\"courses\">\n" + html + "\n</select><br><br>";
function HandleSubmit(e) {
    e.preventDefault();
    var name = e.target.elements.name.value;
    var id = e.target.elements.id.value;
    var email = e.target.elements.email.value;
    var phone = e.target.elements.phone.value;
    var address = e.target.elements.address.value;
    var password = e.target.elements.pass.value;
    var cPass = e.target.elements.cPass.value;
    var courseUser = e.target.elements.courses.value;
    if (password != cPass) {
        alert("Passwords Are Not Match");
        throw new Error("Passwords Are Not Match");
    }
    var newStudent = new Student(name, id, email, phone, password, address);
    newStudent.coursesUser = [];
    var index = courses.findIndex(function (course) { return course.nameCourse === courseUser; });
    newStudent.coursesUser.push(new Course(courses[index].nameCourse, courses[index].datesCourse, courses[index].lecturer));
    students.push(newStudent);
    console.log(students);
    saveStudentToLS(students);
    var indexEmail = students.length - 1;
    var url = new URL("../userScreen/userScreen.html", window.location.href);
    url.searchParams.set("indexEmail", indexEmail);
    window.location.href = url.href;
}
function saveStudentToLS(students) {
    try {
        if (!students)
            throw new Error("info is null");
        localStorage.setItem("students", JSON.stringify(students));
    }
    catch (error) {
        console.log(error);
    }
}
function getStudentFromLS() {
    var data = localStorage.getItem("students");
    var _students = JSON.parse(data);
    return _students;
}
function saveLecturerToLS(lecturers) {
    try {
        if (!lecturers)
            throw new Error("lecturers is null");
        localStorage.setItem("lecturers", JSON.stringify(lecturers));
    }
    catch (error) {
        console.log(error);
    }
}
function getLecturerFromLS() {
    var data = localStorage.getItem("lecturers");
    var _lecturers = JSON.parse(data);
    return _lecturers;
}
function saveCourseToLS(courses) {
    try {
        if (!courses)
            throw new Error("courses is null");
        localStorage.setItem("courses", JSON.stringify(courses));
    }
    catch (error) {
        console.log(error);
    }
}
function getCourseFromLS() {
    var data = localStorage.getItem("courses");
    var _courses = JSON.parse(data);
    return _courses;
}
saveCourseToLS(courses);
saveLecturerToLS(lecturers);
login.addEventListener("click", function (e) {
    loginLecturer.style.display = "block";
    loginStudent.style.display = "block";
});
loginLecturer.addEventListener("click", function (e) {
    loginLecturerForm.style.display = "block";
    loginLecturer.style.display = "none";
    loginStudent.style.display = "none";
});
loginStudent.addEventListener("click", function (e) {
    loginStudentForm.style.display = "block";
    loginLecturer.style.display = "none";
    loginStudent.style.display = "none";
});
function HandleLecturerLogin(e) {
    try {
        e.preventDefault();
        var emailCheck_1 = e.target.elements.emailCheck.value;
        var passCheck_1 = e.target.elements.passCheck.value;
        var indexEmail = lecturers.findIndex(function (lecturer) { return lecturer.email === emailCheck_1; });
        var indexPass = lecturers.findIndex(function (lecturer) { return lecturer.password === passCheck_1; });
        if (indexEmail !== -1 && indexPass !== -1 && indexEmail === indexPass) {
            var url = new URL("../userScreen/userScreen.html", window.location.href);
            url.searchParams.set("indexPass", indexPass);
            window.location.href = url.href;
        }
        else {
            wrongInfo.innerHTML = "You entered wrong userName or Password";
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleStudentLogin(e) {
    try {
        e.preventDefault();
        var emailCheck_2 = e.target.elements.emailCheck.value;
        var passCheck_2 = e.target.elements.passCheck.value;
        var indexEmail = students.findIndex(function (student) { return student.email === emailCheck_2; });
        var indexPass = students.findIndex(function (student) { return student.password === passCheck_2; });
        if (indexEmail !== -1 && indexPass !== -1 && indexEmail === indexPass) {
            var url = new URL("../userScreen/userScreen.html", window.location.href);
            url.searchParams.set("indexEmail", indexEmail);
            window.location.href = url.href;
        }
        else {
            wrongInfo.innerHTML = "You entered wrong userName or Password";
        }
    }
    catch (error) {
        console.log(error);
    }
}

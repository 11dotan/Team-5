var html = courses
    .map(function (course) {
    return "<option> " + course.nameCourse + "</option>";
})
    .join(" ");
listCourse.innerHTML = "\n<select class=\"registerForm__line__listCourse\" name=\"courses\">\n" + html + "\n</select><br><br>";
console.log(lecturers);
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
    var index = courses.findIndex(function (course) { return course.nameCourse === courseUser; });
    courses[index].studentsCourse.push(newStudent);
    students.push(newStudent);
    saveStudentToLS(students);
    saveCourseToLS(courses);
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
    if (!data)
        throw new Error("data not found");
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
    if (!data)
        throw new Error("data not found");
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
    if (!data)
        throw new Error("data not found");
    var _courses = JSON.parse(data);
    return _courses;
}
function saveAdminToLS(admins) {
    try {
        if (!admins)
            throw new Error("admins is null");
        localStorage.setItem("admins", JSON.stringify(admins));
    }
    catch (error) {
        console.log(error);
    }
}
function getAdminFromLS() {
    var data = localStorage.getItem("admins");
    if (!data)
        throw new Error("data not found");
    var _admins = JSON.parse(data);
    return _admins;
}
login.addEventListener("click", function (e) {
    loginLecturer.style.display = "block";
    loginStudent.style.display = "block";
    loginAdmin.style.display = "block";
    loginLecturerForm.style.display = "none";
    loginStudentForm.style.display = "none";
    loginAdminForm.style.display = "none";
});
loginLecturer.addEventListener("click", function (e) {
    loginLecturerForm.style.display = "block";
    loginLecturer.style.display = "none";
    loginStudent.style.display = "none";
    loginAdmin.style.display = "none";
});
loginStudent.addEventListener("click", function (e) {
    loginStudentForm.style.display = "block";
    loginLecturer.style.display = "none";
    loginStudent.style.display = "none";
    loginAdmin.style.display = "none";
});
loginAdmin.addEventListener("click", function (e) {
    loginAdminForm.style.display = "block";
    loginLecturer.style.display = "none";
    loginStudent.style.display = "none";
    loginAdmin.style.display = "none";
});
function HandleLecturerLogin(e) {
    try {
        e.preventDefault();
        var emailCheck_1 = e.target.elements.emailCheck.value;
        var passCheck_1 = e.target.elements.passCheck.value;
        var indexEmail = lecturers.findIndex(function (lecturer) { return lecturer.email === emailCheck_1; });
        var indexPass = lecturers.findIndex(function (lecturer) { return lecturer.password === passCheck_1; });
        if (indexEmail !== -1 && indexPass !== -1 && indexEmail === indexPass) {
            var url = new URL("../lecturer/lecturer.html", window.location.href);
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
function HandleAdminLogin(e) {
    try {
        e.preventDefault();
        var emailCheck_3 = e.target.elements.emailCheck.value;
        var passCheck_3 = e.target.elements.passCheck.value;
        var indexEmail = admins.findIndex(function (admin) { return admin.email === emailCheck_3; });
        var indexPassA = admins.findIndex(function (admin) { return admin.password === passCheck_3; });
        if (indexEmail !== -1 && indexPassA !== -1 && indexEmail === indexPassA) {
            var url = new URL("../adminScreen/adminScreen.html", window.location.href);
            url.searchParams.set("indexPassA", indexPassA);
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

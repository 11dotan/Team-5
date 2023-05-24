console.log(courses);
console.log(lecturers);
var html = courses
    .map(function (course) {
    return "<option> " + course.nameCourse + "</option>";
})
    .join(" ");
listCourse.innerHTML = "<br><label for=\"courses\">Choose a course:</label><br>\n<select name=\"courses\">\n" + html + "\n</select><br><br>";
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
}
function saveStudentToLS(students) {
    try {
        if (!students)
            throw new Error("students is null");
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
var _students = getStudentFromLS();
if (_students) {
    students.push.apply(students, _students);
}

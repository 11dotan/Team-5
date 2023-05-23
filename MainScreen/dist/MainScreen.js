function onHandleAddUser(e) {
    e.preventDefault();
    var name = e.target.elements.name.value;
    var email = e.target.elements.email.value;
    var phone = e.target.elements.number.value;
    var address = e.target.elements.address.value;
    var pass = e.target.elements.pass.value;
    var cPass = e.target.elements.cPass.value;
    var sl = e.target.elements.sl.value;
    if (pass != cPass) {
        alert("Passwords Are Not Match");
        throw new Error("Passwords Are Not Match");
    }
    if (sl === "student") {
        students.push(new Student(name, email, phone, address, pass));
        console.log(students);
        saveStudentToLS(students);
    }
    else if (sl === "lecturer") {
        lecturers.push(new Lecturer(name, email, phone, address, pass));
        console.log(lecturers);
        saveLecturerToLS(lecturers);
    }
    else {
        throw new Error("u didnt choose your type");
    }
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

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
function HandleOpenCourse(courseUid, nameCourseL) {
    var courseIndex = courses.findIndex(function (course) { return course.uid === courseUid; });
    localStorage.setItem("courseIndex", JSON.stringify(courseIndex));
    lecturerMenu.style.display = "none";
    courseMenu.style.display = "flex";
    courseName.innerHTML = "" + nameCourseL;
}
courseMenuBack.addEventListener("click", function (e) {
    lecturerMenu.style.display = "flex";
    courseMenu.style.display = "none";
    lecturerInnerLessonsG.style.display = "none";
    lecturerInnerLessons.style.display = "none";
    lecturerInner.style.display = "flex";
    lecturerInnerGrades.style.display = "none";
    lecturerInnerVideos.style.display = "none";
});
courseAttendance.addEventListener("click", function (e) {
    lecturerInner.style.display = "none";
    lecturerInnerLessons.style.display = "flex";
    lecturerInnerLessonsG.style.display = "none";
    lecturerInnerGrades.style.display = "none";
    lecturerInnerVideos.style.display = "none";
    lecturerInnerAttendance.style.display = "none";
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
        html += "\n    <div class=\"cardDate\" onclick=\"markAttendance()\">\n    <h3>Lesson " + (i + 1) + "</h3>\n    <h5>Date: " + datesArr[i] + "</h5>\n  </div>\n  ";
    }
    lecturerInnerLessonletML = html;
}
function markAttendance() {
    studentsList === null || studentsList === void 0 ? void 0 : studentsList.innerHTML = "";
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    lecturerInnerLessons.style.display = "none";
    lecturerInnerAttendance.style.display = "flex";
    lecturerInnerAttendance.style.flexDirection = "column";
    for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
        var student = courses[_courseindex].studentsCourse[i];
        var listItem = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.id = "" + i;
        checkbox.type = "checkbox";
        td1.appendChild(document.createTextNode(student.name));
        listItem.appendChild(td1);
        td2.appendChild(checkbox);
        listItem.appendChild(td2);
        studentsList === null || studentsList === void 0 ? void 0 : studentsList.appendChild(listItem);
        saveCourseToLS(courses);
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
        }
    }
    saveCourseToLS(courses);
    saveStudentToLS(students);
    lecturerInnerAttendance.style.display = "none";
    lecturerInnerLessons.style.display = "flex";
});
courseGrades.addEventListener("click", function (e) {
    lecturerInner.style.display = "none";
    lecturerInnerLessonsG.style.display = "flex";
    lecturerInnerLessons.style.display = "none";
    lecturerInnerAttendance.style.display = "none";
    lecturerInnerVideos.style.display = "none";
    lecturerInnerGrades.style.display = "none";
    gradesCourse();
});
function gradesCourse() {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    var datesArr = courses[_courseindex].datesCourse;
    var html = "";
    for (var i = 0; i < datesArr.length; i++) {
        html += "\n    <div class=\"cardDate\" onclick=\"markGrades()\">\n    <h3>Lesson " + (i + 1) + "</h3>\n    <h5>Date: " + datesArr[i] + "</h5>\n  </div>\n  ";
    }
    lecturerInnerLessonsG.innerHTML = html;
}
function markGrades() {
    studentsListG === null || studentsListG === void 0 ? void 0 : studentsListG.innerHTML = "";
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    lecturerInnerLessonsG.style.display = "none";
    lecturerInnerGrades.style.display = "flex";
    for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
        var student = courses[_courseindex].studentsCourse[i];
        var listItem = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var inputG = document.createElement("input");
        inputG.id = "" + i;
        inputG.type = "number";
        td1.appendChild(document.createTextNode(student.name));
        listItem.appendChild(td1);
        td2.appendChild(inputG);
        listItem.appendChild(td2);
        studentsListG === null || studentsListG === void 0 ? void 0 : studentsListG.appendChild(listItem);
        saveCourseToLS(courses);
        saveStudentToLS(students);
    }
    submitButtonG.addEventListener("click", function (e) {
        var data = localStorage.getItem("courseIndex");
        if (!data)
            throw new Error("data is null");
        var _courseindex = JSON.parse(data);
        for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
            var gradeS = document.getElementById("" + i);
            var value = Number(gradeS.value);
            var studentI = courses[_courseindex].studentsCourse[i];
            studentI.grades.push(value);
        }
        saveCourseToLS(courses);
        saveStudentToLS(students);
        lecturerInnerGrades.style.display = "none";
        lecturerInnerLessonsG.style.display = "flex";
        console.log();
    });
}
//---------------video
courseVideo.addEventListener("click", function (e) {
    lecturerInner.style.display = "none";
    lecturerInnerLessonsG.style.display = "none";
    lecturerInnerLessons.style.display = "none";
    lecturerInnerAttendance.style.display = "none";
    lecturerInnerGrades.style.display = "none";
    videoPage.style.display = "flex";
    videosCourse();
});
function videosCourse() {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    innerVideos.innerHTML = "";
    courses[_courseindex].videos.forEach(function (video) {
        var videoCard = document.createElement("div");
        videoCard.className = "videoCard";
        var videoElement = document.createElement("video");
        videoElement.src = video;
        videoElement.controls = true;
        videoCard.appendChild(videoElement);
        innerVideos.appendChild(videoCard);
    });
    // const html = courses[_courseindex].videos
    //   .map((video) => {
    //     return `
    //               <div class="videoCard">
    //               <video id="myVideo" controls>
    //               <source src="${video}"  type="video/mp4">
    //               </video>
    //               </div>`;
    //   })
    //   .join(" ");
    // console.log(courses[_courseindex].videos);
    // innerVideos.innerHTML = html;
}
function HandleAddVideo(e) {
    e.preventDefault();
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    var file = e.target.elements.videoFile.files[0];
    var blobURL = URL.createObjectURL(file);
    courses[_courseindex].videos.push(blobURL);
    console.log(courses[_courseindex].videos);
    saveCourseToLS(courses);
    videosCourse();
}
// function HandleAddVideo(e) {
//   e.preventDefault();
//   const file = inputfile.files?.[0];
//   if (file) {
//     const videoURL = URL.createObjectURL(file);
//     src.src = videoURL;
//   }
//   // function HandleAddVideo(e) {
//   e.preventDefault();
//   const div = document.createElement("div");
//   const h1 = document.createElement("h1");
//   const vid = document.createElement("video");
//   const src = document.createElement("source");
//   vid.controls = true;
//   vid.appendChild(src);
//   div.appendChild(h1);
//   div.appendChild(vid);
//   // const file = inputfile.files?.[0];
//   // if (file) {
//   //   const videoURL = URL.createObjectURL(file);
//   //   src.src = videoURL;
//   // } else {
//   //   console.log("cant find file");
//   // }
//   document.body.appendChild(div);
// }
// function markVideos() {
//   let data = localStorage.getItem("courseIndex");
//   if (!data) throw new Error("data is null");
//   const _courseindex = JSON.parse(data);
//   lecturerInnerLessons.style.display = "none";
//   lecturerInnerLessonsV.style.display = "none";
//   lecturerInnerVideos.style.display = "flex";
//   // lecturerInnerLessonsV.style.flexDirection = "column";
//   for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
//     const div = document.createElement("div");
//     const inputfile = document.createElement("input");
//     inputfile.type = "file";
//     inputfile.accept = "video/mp4";
//     const btn = document.createElement("button");
//     btn.id = "btn";
//     const btnd = document.getElementById("btn");
//     div.appendChild(inputfile);
//     div.appendChild(btn);
//     btnd?.addEventListener("click", (e) => {
//       const file = inputfile.files?.[0];
//       const video = document.createElement("video");
//       video.controls = true;
//       if (file) {
//         const videoURL = URL.createObjectURL(file);
//         video.src = videoURL;
//       }
//     });
//     saveCourseToLS(courses);
//   }
// }

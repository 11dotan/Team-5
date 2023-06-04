lecturerMenuCourses.addEventListener("click", (e) => {
  lecturerInner.style.display = "flex";
  lecturerCourses(indexPass);
});

function lecturerCourses(indexPass) {
  const idLecturer = lecturers[indexPass].id;
  try {
    if (!courses) throw new Error(`courses not found`);

    const html: string = courses
      .map((course) => {
        if (idLecturer === course.lecturer.id) {
          return `
                <div class="CourseCard" onclick="HandleOpenCourse('${course.uid}','${course.nameCourse}')">
                    <h2>${course.nameCourse}</h2>
                    <h3>Lecturer: ${course.lecturer.name}</h3>
                    <h3> Start Date: ${course.datesCourse[0]}</h3>
                </div>`;
        }
      })
      .join(" ");
    lecturerInner.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

function HandleOpenCourse(courseUid: string, nameCourseL: string) {
  let courseIndex = courses.findIndex((course) => course.uid === courseUid);
  localStorage.setItem("courseIndex", JSON.stringify(courseIndex));
  lecturerMenu.style.display = "none";
  courseMenu.style.display = "flex";
  courseName.innerHTML = `${nameCourseL}`;
}

courseMenuBack.addEventListener("click", (e) => {
  lecturerMenu.style.display = "flex";
  courseMenu.style.display = "none";
  lecturerInnerLessonsG.style.display = "none";
  lecturerInnerLessons.style.display = "none";
  lecturerInner.style.display = "flex";
  lecturerInnerGrades.style.display = "none";
  lecturerInnerAttendance.style.display = "none";
  // lecturerInnerVideos.style.display = "none";
  videoPage.style.display = "none";
});

courseAttendance.addEventListener("click", (e) => {
  lecturerInner.style.display = "none";
  lecturerInnerLessons.style.display = "flex";
  lecturerInnerLessonsG.style.display = "none";
  lecturerInnerGrades.style.display = "none";
  // lecturerInnerVideos.style.display = "none";
  lecturerInnerAttendance.style.display = "none";
  videoPage.style.display = "none";

  attendanceCourse();
});

function attendanceCourse() {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);

  const datesArr = courses[_courseindex].datesCourse;

  let html: string = "";
  for (let i = 0; i < datesArr.length; i++) {
    html += `
    <div class="cardDate" onclick="markAttendance()">
    <h3>Lesson ${i + 1}</h3>
    <h5>Date: ${datesArr[i]}</h5>
  </div>
  `;
  }
  lecturerInnerLessons.innerHTML = html;
}

function markAttendance() {
  studentsList?.innerHTML = "";
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);
  lecturerInnerLessons.style.display = "none";
  lecturerInnerAttendance.style.display = "flex";
  lecturerInnerAttendance.style.flexDirection = "column";
  for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
    const student = courses[_courseindex].studentsCourse[i];
    const listItem = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.id = `${i}`;
    checkbox.type = "checkbox";
    td1.appendChild(document.createTextNode(student.name));
    listItem.appendChild(td1);
    td2.appendChild(checkbox);
    listItem.appendChild(td2);

    studentsList?.appendChild(listItem);
    saveCourseToLS(courses);
  }
}
submitButton.addEventListener("click", () => {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);
  for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
    const checkbox = studentsList?.children[i].querySelector(
      "input[type=checkbox]"
    );
    if (checkbox?.checked) {
      const studentI = courses[_courseindex].studentsCourse[i];
      studentI.attendance.push(1);
      console.log(studentI);

      console.log(courses[_courseindex].studentsCourse[i]);
    } else {
      courses[_courseindex].studentsCourse[i].attendance.push(0);
    }
  }

  saveCourseToLS(courses);
  saveStudentToLS(students);
  lecturerInnerAttendance.style.display = "none";
  lecturerInnerLessons.style.display = "flex";
});

courseGrades.addEventListener("click", (e) => {
  lecturerInner.style.display = "none";
  lecturerInnerLessonsG.style.display = "flex";
  lecturerInnerLessons.style.display = "none";
  lecturerInnerAttendance.style.display = "none";
  // lecturerInnerVideos.style.display = "none";
  lecturerInnerGrades.style.display = "none";
  videoPage.style.display = "none";

  gradesCourse();
});

function gradesCourse() {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);

  const datesArr = courses[_courseindex].datesCourse;

  let html: string = "";
  for (let i = 0; i < datesArr.length; i++) {
    html += `
    <div class="cardDate" onclick="markGrades()">
    <h3>Lesson ${i + 1}</h3>
    <h5>Date: ${datesArr[i]}</h5>
  </div>
  `;
  }
  lecturerInnerLessonsG.innerHTML = html;
}

function markGrades() {
  studentsListG?.innerHTML = "";
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);
  lecturerInnerLessonsG.style.display = "none";
  lecturerInnerGrades.style.display = "flex";

  for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
    const student = courses[_courseindex].studentsCourse[i];

    const listItem = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const inputG = document.createElement("input");

    inputG.id = `${i}`;
    inputG.type = "number";
    td1.appendChild(document.createTextNode(student.name));
    listItem.appendChild(td1);
    td2.appendChild(inputG);
    listItem.appendChild(td2);

    studentsListG?.appendChild(listItem);
    saveCourseToLS(courses);
    saveStudentToLS(students);
  }

  submitButtonG.addEventListener("click", (e) => {
    let data = localStorage.getItem("courseIndex");
    if (!data) throw new Error("data is null");
    const _courseindex = JSON.parse(data);
    for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
      const gradeS = document.getElementById(`${i}`) as HTMLInputElement;
      const value = Number(gradeS.value);

      const studentI = courses[_courseindex].studentsCourse[i];
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

courseVideo.addEventListener("click", (e) => {
  lecturerInner.style.display = "none";
  lecturerInnerLessonsG.style.display = "none";
  lecturerInnerLessons.style.display = "none";
  lecturerInnerAttendance.style.display = "none";
  lecturerInnerGrades.style.display = "none";
  videoPage.style.display = "flex";
  plus.style.display = "block";
  videosCourse();
});

plus.addEventListener("click", (e) => {
  newVideo.style.display = "flex";
});

function videosCourse() {
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);

  innerVideos.innerHTML = "";

  courses[_courseindex].videos.forEach((video) => {
    let videoElement = document.createElement("video");
    videoElement.className = "videoCard";
    videoElement.src = video;
    videoElement.controls = true;
    innerVideos.appendChild(videoElement);
  });
}

function HandleAddVideo(e) {
  e.preventDefault();
  let data = localStorage.getItem("courseIndex");
  if (!data) throw new Error("data is null");
  const _courseindex = JSON.parse(data);

  const file = e.target.elements.videoFile.files[0];
  let blobURL = URL.createObjectURL(file);

  courses[_courseindex].videos.push(blobURL);
  console.log(courses[_courseindex].videos);

  let videoElement = document.createElement("video");
  videoElement.className = "videoCard";
  videoElement.src = blobURL;
  videoElement.controls = true;
  innerVideos.appendChild(videoElement);

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

function profileLecturer(indexPass) {
  try {
    if (!lecturers) throw new Error(`lecturer not found`);
    lecturerInner.innerHTML = `
    <div class="profileCard">
  <h2>Hello ${lecturers[indexPass].name}</h2>
  <h4>ID Number: ${lecturers[indexPass].id}</h4>
  <h4>Address: ${lecturers[indexPass].address}</h4>
  <h4>Email: ${lecturers[indexPass].email}</h4>
  <h4>Password: ${lecturers[indexPass].password}</h4>
  <h4>Phone Number: ${lecturers[indexPass].phone}</h4>
  </div>`;
  } catch (error) {
    console.log(error);
  }
}

lecturerMenuProfile.addEventListener("click", (e) => {
  lecturerInner.style.display = "block";
  profileLecturer(indexPass);
});

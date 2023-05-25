lecturerMenuCourses.addEventListener("click", (e) => {
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
                <div class="CourseCard">
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

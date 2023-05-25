const params = new URLSearchParams(window.location.search);
let indexPass = params.get("indexPass");

lecturerInnerFunc(indexPass);
console.log(courses);
console.log(lecturers);

function lecturerInnerFunc(indexPass) {
  try {
    if (!indexPass) throw new Error(`user not found`);
    lecturerMenuName.innerHTML = `Hello ${lecturers[indexPass].name}`;
  } catch (error) {
    console.log(error);
  }
}

lecturerCourses(indexPass);

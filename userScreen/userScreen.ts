const params = new URLSearchParams(window.location.search);
let indexPass = params.get("indexPass");
let indexEmail = params.get("indexEmail");

userInnerFunc(indexPass, indexEmail);

// renderVideos(videos);

function userInnerFunc(indexPass, indexEmail) {
  try {
    if (!indexPass && !indexEmail) throw new Error(`user not found`);
    if (indexPass) {
      userMenuName.innerHTML = `Hello ${lecturers[indexPass].name}`;
    } else {
      userMenuName.innerHTML = `Hello ${students[indexEmail].name}`;
    }
  } catch (error) {
    console.log(error);
  }
}

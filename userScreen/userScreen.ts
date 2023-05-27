let params = new URLSearchParams(window.location.search);
let indexEmail = params.get("indexEmail");

userInnerFunc(indexEmail);

function userInnerFunc(indexEmail) {
  try {
    if (!indexEmail) throw new Error(`user not found`);
    userMenuName.innerHTML = `Hello ${students[indexEmail].name}`;
  } catch (error) {
    console.log(error);
  }
}

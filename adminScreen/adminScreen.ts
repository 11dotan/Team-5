let params = new URLSearchParams(window.location.search);
let indexPassA = params.get("indexPassA");
const adminMenuName = document.querySelector(
  ".mainContainer__adminMenu__fullName"
) as HTMLDivElement;

adminInnerFunc(indexPassA);
console.log(courses);
console.log(lecturers);

function adminInnerFunc(indexPassA) {
  try {
    if (!indexPassA) throw new Error(`user not found`);
    adminMenuName.innerHTML = `Hello ${admins[indexPassA].name}`;
  } catch (error) {
    console.log(error);
  }
}

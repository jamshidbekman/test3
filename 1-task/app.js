const form = document.querySelector(".signUpForm");
const errorText = document.querySelector(".errorText");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.age.value < 18) {
    errorText.textContent = "Yosh 18 dan katta bo'lishi kerak!!!";
  } else {
    errorText.textContent = "";
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const skill = form.skill.value;
    const info = { name, email, phone, age, skill, gender };
    sendData(info);
  }
});

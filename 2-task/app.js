const form = document.querySelector(".signInForm");
const errorText = document.querySelector(".errorText");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.password.value.length < 6) {
    errorText.textContent = "Password kamida 6 belgidan iborat bo'lishi kerak!";
  } else {
    errorText.textContent = "";
    const username = form.username.value;
    const password = form.password.value;
    const rememberMe = form.rememberMe.checked;
    const info = { username, password, rememberMe };
    sendData(info);
  }
});
async function sendData(info) {
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://echo.htmlacademy.ru/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  }).then((response) => response.text());
  console.log(response);
}

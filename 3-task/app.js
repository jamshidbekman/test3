const form = document.querySelector("form");
const errorText = document.querySelector(".errorText");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = form.text.value.trim();
  const words = text ? text.split(/\s+/) : [];
  const file = form.file.files[0];
  const fileExtension = file.name.split(".").pop().toLowerCase();
  const fileType = ["pdf", "doc", "docx"];
  if (words.length < 10) {
    errorText.textContent += "Matn kamida 10 ta so'zdan iborat bo'lishi kerak!!! ";
  } else if (!fileType.includes(fileExtension)) {
    errorText.textContent += "Fayl turi pdf, doc, docx bo'lishi kerak!!! ";
  } else {
    errorText.textContent = "";
    const theme = form.theme.value;
    const email = form.email.value;
    sendData({ theme, email, text, file });
  }
});
async function sendData(info) {
  console.log("Loading...");
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://echo.htmlacademy.ru/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  }).then((response) => response.text());
  console.log(response);
}

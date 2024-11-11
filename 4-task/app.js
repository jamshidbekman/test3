const form = document.querySelector("form");
const range = document.querySelector("#range");
document.querySelector(".rangeValue").textContent = range.value + " so'm";
range.addEventListener("input", () => {
  document.querySelector(".rangeValue").textContent = range.value + " so'm";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = form.search;
  const beginner = form.beginner;
  const intermediate = form.intermediate;
  const professional = form.professional;
  const range = form.range;
  sendData({ search, beginner, intermediate, professional, range });
});
// // Izoh!!! bu yerda get ishlatib bo'lmaydi ekan
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

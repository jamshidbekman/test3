const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.paymentMethod.value) {
    document.querySelector(".validation").textContent = "Iltimos To'lov turini tanlang!!!";
  } else if (form.paymentMethod.value == "card" && form.cardNumber.value.length !== 16) {
    document.querySelector(".validation").textContent = "Iltimos karta raqamini to'g'ri kiriting!!!";
  } else {
    document.querySelector(".validation").textContent = "";
    const courseName = form.courseName.value;
    const paymentMethod = form.paymentMethod.value;
    const promocode = form.promocode.value ? form.promocode.value : false;
    const obj = {
      courseName,
      paymentMethod,
      promocode,
    };
    if ((form.paymentMethod.value = "card")) {
      const cardNumber = form.cardNumber.value;
      obj.cardNumber = cardNumber;
    }
    sendData(obj);
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
  alert("Ma'lumot jo'natildi!");
  console.log(info);
  console.log(response);
}

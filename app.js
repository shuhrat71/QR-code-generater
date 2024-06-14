let imgBox = document.getElementById("imgBox");
let imgQR = document.getElementById("imgQR");
let textQR = document.getElementById("textQR");

if (localStorage.getItem("qrText")) {
  textQR.value = localStorage.getItem("qrText");
}

function saveQRText() {
  localStorage.setItem("qrText", textQR.value);
}

textQR.addEventListener("input", saveQRText);

function generateQR() {
  imgQR.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    textQR.value;
}

generateQR();


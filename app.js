let imgBox = document.getElementById("imgBox");
let imgQR = document.getElementById("imgQR");
let textQR = document.getElementById("textQR");

function generateQR() {
  imgQR.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    textQR.value;
}

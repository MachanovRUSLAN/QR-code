const qrText = document.getElementById("qrText");
const qrImg = document.getElementById("qrImg");
const ImgBox = document.getElementById("imgBox")

function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
            + qrText.value;
        ImgBox.classList.add("show-img")
    } else {
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000)
    }
}

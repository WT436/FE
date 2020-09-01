var fuck = document.querySelector("textarea");
var fuckYou = fuck.getAttribute("textarea");
var btnCommnet = document.querySelector(".btnCommnet");
var clear = document.getElementById("clear");
fuck.onfocus = function() {
    this.setAttribute("placeholder", "Hãy Cho Chúng tôi biết cảm nhận và đóng góp của bạn , sự hài lòng của bạn là niềm vui của chúng tôi");
    this.style.borderColor = "#333";
    btnCommnet.style.display = "block";
}
fuck.onblur = function() {
    if (fuckYou == null) {
        this.setAttribute("placeholder", "Đánh Giá Ngay");
    } else {
        this.setAttribute("placeholder", fuckYou);
    }

}

clear.onclick = function() {
    btnCommnet.style.display = 'none';
    fuck.value = "";
    fuck.placeholder = "Hãy Cho Chúng tôi biết cảm nhận và đóng góp của bạn , sự hài lòng của bạn là niềm vui của chúng tôi";
}
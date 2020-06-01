var slider = document.getElementById("slider");
var number = document.getElementById("Number");
slider.oninput = function () {
    number.innerHTML = slider.value;
}
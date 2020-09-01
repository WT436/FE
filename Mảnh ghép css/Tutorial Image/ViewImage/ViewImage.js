var arayA = [];
var i = 0;

function openModal() {
    document.getElementById("myModal").style.display = "block";
    GayGiaTri();
    ThucThi(0);
}

function GayGiaTri() {
    var x = document.getElementsByClassName("DataReviewImageProduct");
    var i;
    for (i = 0; i < x.length; i++) {
        arayA.push(new Array(x[i].title, x[i].src));
    }
}

function ThucThi(i) {

    var trave = parseInt(i) + 1 + '/' + arayA.length;
    document.getElementById("numbertext_ReviewImage").innerHTML = trave;
    document.getElementById("img_ReviewImage").src = arayA[i][1];
    document.getElementById("caption_ReviewImage").innerHTML = arayA[i][0];


}

function chuyenDoi(thiss) {
    i === arayA.length - 1 ? i = 0 : i = i + 1;

    document.getElementById("img_ReviewImage").style.opacity = 0;
    ThucThi(i);
    setTimeout(function() {
        document.getElementById("img_ReviewImage").style.transition = 1.5;
        document.getElementById("img_ReviewImage").style.opacity = 1;
    }, 1000)

}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    arayA.length = 0;
}
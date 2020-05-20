let pro = document.getElementById('NamDepTrai');
let total = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let nampro = (window.pageYOffset / total) * 100;
    pro.style.height = nampro + "%";
}
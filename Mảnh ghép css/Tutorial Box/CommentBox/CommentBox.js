var fuck = document.querySelector("textarea");
var fuckYou = fuck.getAttribute("textarea");
var btnCommnet= document.querySelector(".btnCommnet");
var clear = document.getElementById("clear");
fuck.onfocus=function(){
    this.setAttribute("placeholder","bình luận ngay");
    this.style.borderColor="#333";
    btnCommnet.style.display = "block";
}
fuck.onblur=function(){
this.setAttribute("placeholder",fuckYou)
}

clear.onclick= function(){
    btnCommnet.style.display='none';
    fuck.value="bình luận ngay";
}
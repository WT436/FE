let pro = document.getElementById('NamDepTrai');
let total = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
let nampro=(window.pageYOffset / total) * 100;
pro.style.height= nampro + "%";
}

$(window).on('scroll',function(){
if($(window).scrollTop())
{
    $('nav').addClass('black');
}
else{
    $('nav').removeClass('black');
}

});
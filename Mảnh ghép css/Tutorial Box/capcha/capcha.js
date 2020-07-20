function fun1() {
    var no = '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    var x = no[Math.floor(Math.random() * no.length)];
    for (var i = 0; i < 5; i++) {
        x = x + no[Math.floor(Math.random() * no.length)];
    }
    document.querySelector(".random").value = x;
    document.querySelector(".random2").innerHTML = x;
}

function func2() {
    var x = Math.floor(Math.random() * 11);
    document.querySelector(".anhgoc").src = ("./capimage/img" + x + ".jpg");
    document.querySelector(".imgreturn").src = ("./capimage/img" + x + ".jpg");
    /*
        var fontType = [
            "Modak", "Helvetica", "Dancing Script", "Modak",
            "sans-serif", "monospace", "fantasy"
        ];
        var num;
        num = Math.floor(Math.random() * 7);
        document.querySelector(".random2").style.fontFamily = fontType[num];
        var sp = Math.floor(Math.random() * (-5 - 5)) + 5;
        document.querySelector(".random2").style.letterSpacing = sp + "px";
        */
}
$(document).ready(function() {
    var element = $(".ketqua");
    var getCanvas;
    $(".change").on('click',
        function trave() {
            html2canvas(element, {
                onrendered: function(canvas) {
                    $("#previewImage").append(canvas);
                    getCanvas = canvas;
                }
            });
        });
    $(".anhGocRefe").on('click',
        function trave() {
            html2canvas(element, {
                onrendered: function(canvas) {
                    $("#previewImage").append(canvas);
                    getCanvas = canvas;
                }
            });
        });
    $(".send").on('click', function() {
        var imgageData = getCanvas.toDataURL("image/png");
        var newData = imgageData.replace(/^data:image\/(png|jpg);base64,/, "")
        document.getElementById("imgcuatao").src = imgageData;
    });
});
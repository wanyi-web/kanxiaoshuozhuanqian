$(function() {
    var b = document.getElementById('b');
    var wx = document.getElementById('wx');
    var succ = document.getElementById('succ');
    succ.setAttribute("src", "audio/succ.mp3");
    succ.play();
    $(".circle").on("click", function() {
        wx.setAttribute("src", "audio/click.mp3");
        wx.play();
        $(".circle").hide();
        $(".hb1").addClass("open2");
        $(".hb1").on("animationstart", function() {
                b.setAttribute("src", "audio/b.mp3");
                b.play();
            })
            // $(".hb1").on("animationiteration", function() {
            //     succ.setAttribute("src", "audio/succ.mp3");
            //     succ.play();
            // })
            // setTimeout(function() {

        // }, 500)
        $(".hb1").on("animationend", function() {
            $(".hb1").removeClass("open2");
            $(".page1").hide();
            $(".page2").show();
        })
    })
});
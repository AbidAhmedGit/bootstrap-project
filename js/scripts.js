$(function() {
    // $(".carousel").carousel( { interval: 2000 } );
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    // W4 t2
    $("#reserveButton").click(function(){
        // $('#reserveModal').modal('toggle')
        $('#reserveModal').modal('show')
    });


    // $("#loginButton").click(modal('show'));
    $("#loginButton").click(function(){
        // $('#loginModal').modal('toggle')
        $('#loginModal').modal('show')
    });

});
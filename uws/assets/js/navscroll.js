function checkScroll() {
    if($(window).scrollTop() <= 20 && $("#home-nav").height() != "100px") {
        $("#home-nav").height("100px");
    }
    else if($("#home-nav").height() != "80px") {
        $("#home-nav").height("80px");
    }
    setTimeout(checkScroll, 100);
}
checkScroll();

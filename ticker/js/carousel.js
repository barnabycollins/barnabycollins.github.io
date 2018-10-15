function CycleCarousel() {
    $("#carousel1").css("left", "100vw");
    setTimeout(comeBack, 2000);
}
function comeBack() {
    $("#carousel1").css("left", "60vw");
    setTimeout(CycleCarousel, 5000);
}
comeBack();
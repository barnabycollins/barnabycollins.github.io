function BeginCarousel(num) {
    numSlides = num;
    currentNum = 0;
    number = ''
    number = currentNum.toString();
    setTimeout(CycleCarousel, 5000);
}
function CycleCarousel() {
    ShowShadow();
}
function ShowShadow() {
    $("#carousel" + number).css("box-shadow", "0px 0px 1vw 0px #222222");
    setTimeout(HideContent, 500);
}
function HideContent() {
    $("#carousel" + number).css("left", "100vw");
    setTimeout(SwapContent, 1000);
}
function SwapContent() {
    currentNum += 1;
    currentNum = currentNum % numSlides;
    $("#carousel" + number).hide();
    number = currentNum.toString();
    $("#carousel" + number).css("left", "100vw");
    $("#carousel" + number).css("box-shadow", "0px 0px 1vw 0px #222222");
    $("#carousel" + number).show();
    setTimeout(ShowContent, 1000);
}
function ShowContent() {
    $("#carousel" + number).css("left", "60vw");
    setTimeout(HideShadow, 700);
}
function HideShadow() {
    $("#carousel" + number).css("box-shadow", "0px 0px 0px 0px #222222");
    setTimeout(CycleCarousel, 5000);
}

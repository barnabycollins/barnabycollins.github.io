function swap(id) {
    console.log($("#" + String(id)).css("color"));
    if ($("#" + String(id)).css("color") == "rgb(255, 255, 255)") {
        $("#" + String(id)).css("color", "#b822e3");
    } else if ($("#" + String(id)).css("color") == "rgb(184, 34, 227)") {
        $("#" + String(id)).css("color", "#ffffff");
    }
}

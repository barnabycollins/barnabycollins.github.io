$('.dj-music').each((index, elem) => {
    $(elem).css('margin-top', '-' + $(elem).outerHeight() + 'px');
});

function toggleMusic(elem) {
    let musicDiv = $(elem).closest('div.dj-card').find('.dj-music');
    console.log($(musicDiv).css('margin-top'));
    if (musicDiv.css('margin-top') !== '0px') {
        musicDiv.css('margin-top', '0px');
    }
    else {
        musicDiv.css('margin-top', '-' + musicDiv.outerHeight() + 'px');
    }
}
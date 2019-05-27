$('.dj-music').each((index, elem) => {
    $(elem).css('margin-top', '-' + $(elem).outerHeight() + 'px');
});

function toggleMusic(elem) {
    let musicDiv = $(elem).closest('div.dj-card').find('.dj-music');
    console.log($(musicDiv).css('margin-top'));
    if (musicDiv.css('margin-top') !== '0px') {
        $(elem).html('Less');
        musicDiv.css('margin-top', '0px');
        $('.dj-music').not(musicDiv).each((index, el) => {
            $(el).css('margin-top', '-' + $(el).outerHeight() + 'px');
        });
        $('.music-expand').not(elem).each((index, el) => {
            $(el).html('More');
        })
    }
    else {
        $(elem).html('More');
        musicDiv.css('margin-top', '-' + musicDiv.outerHeight() + 'px');
    }
}
$('.dj-music').each((index, elem) => {
    $(elem).css('margin-top', '-' + $(elem).outerHeight() + 'px');
});

function toggleMusic(elem) {
    let musicDiv = $(elem).closest('div.dj-card').find('.dj-music');
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

document.addEventListener('DOMContentLoaded', () => {
    $('body').css('overflow-y', 'scroll')
    $('#load-cover').css('opacity', '0');
})
$('.dj-music').each((index, elem) => {
    $(elem).css('margin-top', '-' + $(elem).outerHeight() + 'px');
});

function toggleMusic(elem) {
    let musicDiv = $(elem).closest('div.dj-card').find('.dj-music');
    if (musicDiv.css('margin-top') !== '0px') {
        $(elem).css('transform', 'translateY(-50%) rotate(180deg)');
        musicDiv.css('margin-top', '0px');
        $('.dj-music').not(musicDiv).each((index, el) => {
            $(el).css('margin-top', '-' + $(el).outerHeight() + 'px');
        });
        $('.music-expand').not(elem).each((index, el) => {
            $(el).css('transform', 'translateY(-50%) rotate(0deg)');
        })
    }
    else {
        musicDiv.css('margin-top', '-' + musicDiv.outerHeight() + 'px');
        $(elem).css('transform', 'translateY(-50%) rotate(0deg)');
    }
}

function removeLoad() {
    $('#load-cover').css('display', 'none');
}

document.addEventListener('DOMContentLoaded', () => {
    $('#load-cover').css('opacity', '0');
    setTimeout(removeLoad, 2000);
});
window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function() {
    var list = document.getElementById('list');

    list.style.height = (parseInt(document.getElementById('flat-black-player-container').offsetHeight) - 135) + 'px';

    document.getElementById('list-screen').classList.remove('slide-out-top');
    document.getElementById('list-screen').classList.add('slide-in-top');
    document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function() {
    document.getElementById('list-screen').classList.remove('slide-in-top');
    document.getElementById('list-screen').classList.add('slide-out-top');
    document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function(e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "songs": [
        {
            "name": "Phần 01",
            "artist": "Nói Sao Cho Trẻ Chịu Học Ở Nhà Và Ở Trường",
            "album": "Kiến Thức - Kỹ Năng Cho Trẻ",
            "url": "https://cdn30.minhtamgroup.org/audio_books/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong%20-%20Adele%20Faber_01.mp3",
            "cover_art_url": "noi-sao-cho-tre-chiu-hoc-o-nha-va-o-truong.jpg"
        },
        {
            "name": "Phần 02",
            "artist": "Nói Sao Cho Trẻ Chịu Học Ở Nhà Và Ở Trường",
            "album": "Kiến Thức - Kỹ Năng Cho Trẻ",
            "url": "https://cdn30.minhtamgroup.org/audio_books/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong%20-%20Adele%20Faber_02.mp3",
            "cover_art_url": "noi-sao-cho-tre-chiu-hoc-o-nha-va-o-truong.jpg"
        },
        {
            "name": "Phần 03",
            "artist": "Nói Sao Cho Trẻ Chịu Học Ở Nhà Và Ở Trường",
            "album": "Kiến Thức - Kỹ Năng Cho Trẻ",
            "url": "https://cdn30.minhtamgroup.org/audio_books/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong%20-%20Adele%20Faber_03.mp3",
            "cover_art_url": "noi-sao-cho-tre-chiu-hoc-o-nha-va-o-truong.jpg"
        },
        {
            "name": "Phần 04",
            "artist": "Nói Sao Cho Trẻ Chịu Học Ở Nhà Và Ở Trường",
            "album": "Kiến Thức - Kỹ Năng Cho Trẻ",
            "url": "https://cdn30.minhtamgroup.org/audio_books/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong%20-%20Adele%20Faber_04.mp3",
            "cover_art_url": "noi-sao-cho-tre-chiu-hoc-o-nha-va-o-truong.jpg"
        },
        {
            "name": "Phần 05",
            "artist": "Nói Sao Cho Trẻ Chịu Học Ở Nhà Và Ở Trường",
            "album": "Kiến Thức - Kỹ Năng Cho Trẻ",
            "url": "https://cdn30.minhtamgroup.org/audio_books/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong%20-%20Adele%20Faber_05.mp3",
            "cover_art_url": "noi-sao-cho-tre-chiu-hoc-o-nha-va-o-truong.jpg"
        },
        {
            "name": "Phần 06",
            "artist": "Nói Sao Cho Trẻ Chịu Học Ở Nhà Và Ở Trường",
            "album": "Kiến Thức - Kỹ Năng Cho Trẻ",
            "url": "https://cdn30.minhtamgroup.org/audio_books/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong/Noi%20Sao%20Cho%20Tre%20Chiu%20Hoc%20O%20Nha%20Va%20O%20Truong%20-%20Adele%20Faber_06.mp3",
            "cover_art_url": "noi-sao-cho-tre-chiu-hoc-o-nha-va-o-truong.jpg"
        }
    ]
});

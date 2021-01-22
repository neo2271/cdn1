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
    "songs": [{
            "name": "vietnamese",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/vietnamese/H%C3%A1t%20ru%20Nh%E1%BB%AFng%20b%C3%A0i%20h%C3%A1t%20ru%20B%E1%BA%AFc%20B%E1%BB%99%20hay%20nh%E1%BA%A5t.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "world_lullabies_1",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/world_lullabies_1_1693900.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "world_lullabies_2",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/world_lullabies_2_1693911.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "adygea",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/adygea/lullaby_of_adygea_world_lullabies_1694048.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "african",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/african/african_lullaby_world_lullabies_1694160.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "argentina",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/argentina/lullaby_of_argentina_world_lullabies_1693957.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "armenia",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/armenia/lullaby_of_armenia_world_lullabies_1693976.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "azerbaijan",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/azerbaijan/azerbaijan_lullaby_world_lullabies_1339954.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "belarusian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/belarusian/belarusian_lullaby_world_lullabies_1340024.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "brazil",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/brazil/lullaby_of_brazil_world_lullabies_880798.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "bulgaria",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/bulgaria/lullaby_bulgaria_world_lullabies_1339998.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "cambodia",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/cambodia/lullaby_of_cambodia_world_lullabies_1694229.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "canada",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/canada/lullaby_of_canada_world_lullabies_1339995.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "ceylon",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/ceylon/ceylon_lullaby_world_lullabies_1694133.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "chinese",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/chinese/chinese_lullaby_world_lullabies_1340140.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "chukotka",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/chukotka/chukotka_lullaby_world_lullabies_1694130.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "congo",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/congo/lullaby_of_the_congo_world_lullabies_1339983.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "croatian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/croatian/croatian_lullaby_world_lullabies_1339974.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "cuba",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/cuba/lullaby_of_cuba_world_lullabies_1339939.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "datogi",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/datogi/lullaby_datogi_world_lullabies_1340004.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "denmark",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/denmark/lullaby_of_denmark_world_lullabies_1339938.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "english",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/english/all_the_pretty_little_horses_nursery_rhymes_by_little_fox_1693709.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "estonian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/estonian/estonian_lullaby_world_lullabies_1694154.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "evenk",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/evenk/evenk_lullaby_world_lullabies_1340007.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "french",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/french/french%20lullaby_L5bgf_sc6zU.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "georgian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/georgian/georgian_lullaby_world_lullabies_1694061.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "greece",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/greece/lullaby_f_greece_world_lullabies_1339971.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "gypsy",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/gypsy/gypsy_lullaby_world_lullabies_1339979.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "holland",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/holland/lullaby_holland_world_lullabies_1340039.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        // {
        //     "name": "hopi",
        //     "artist": "Forklore",
        //     "album": "Lullabies",
        //     "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/hopi/hopi_lullaby_world_lullabies_1340008.mp3",
        //     "cover_art_url": "album-art/we-are-to-answer.jpg"
        // },
        {
            "name": "hungary",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/hungary/lullaby_hungary_world_lullabies_1340013.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "indian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/indian/indian_lullaby_world_lullabies_1694068.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "irish",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/irish/irish_lullaby_world_lullabies_1339956.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "japan",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/japan/lullabies_of_japan_world_lullabies_1339993.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "jewish",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/jewish/jewish_lullabies_world_lullabies_1693819.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "karelian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/karelian/karelian_lullaby_world_lullabies_1694073.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "kazakh",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/kazakh/kazakh_lullaby_world_lullabies_1694088.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "lapland",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/lapland/lapland_lullaby_world_lullabies_1340042.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "lithuania",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/lithuania/lullaby_of_lithuania_world_lullabies_1340020.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "maori",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/maori/lullaby_maori_world_lullabies_1340037.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "mexican",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/mexican/mexican_lullaby_world_lullabies_1339937.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "moldavian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/moldavian/moldavian_lullaby_world_lullabies_1340085.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "nepal",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/nepal/lullaby_of_nepal_world_lullabies_1693785.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "norwegian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/norwegian/norwegian_lullaby_world_lullabies_1340002.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "ossetian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/ossetian/ossetian_lullaby_world_lullabies_1694142.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "pakistan",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/pakistan/pakistan_lullaby_world_lullabies_1694115.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "polish",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/polish/polish_lullaby_world_lullabies_1339933.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "russian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/russian/russian_lullaby_world_lullabies_1693763.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "sicily",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/sicily/lullaby_sicily_world_lullabies_1694203.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "sweden",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/sweden/lullaby_of_sweden_world_lullabies_1339985.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "switzerland",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/switzerland/lullaby_switzerland_world_lullabies_1694289.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "tatar",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/tatar/tatar_lullaby_world_lullabies_1694035.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "the isle of man world",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/the%20isle%20of%20man%20world/lullaby_of_the_isle_of_man_world_lullabies_1694259.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "tonga",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/tonga/lullaby_tonga_world_lullabies_1340034.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "turkmen",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/turkmen/turkmen_lullaby_world_lullabies_1340000.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        },
        {
            "name": "ukrainian",
            "artist": "Forklore",
            "album": "Lullabies",
            "url": "https://cdn2.minhtamgroup.org/bio/audio/lullabies/ukrainian/ukrainian_lullaby_world_lullabies_1339972.mp3",
            "cover_art_url": "album-art/we-are-to-answer.jpg"
        }
    ]
});

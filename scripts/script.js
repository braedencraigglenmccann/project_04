//namespace
const app = {};

app.trackUrl = 'https://api.musixmatch.com/ws/1.1/track.search';
app.lyricUrl = 'https://api.lyrics.ovh/v1/';
app.apiKey = '004fc1c5222f94cf5c07c80c81fa2f62';
app.trackGenre = 'default-styles';

//call to get genre
app.getTrack = () => {
    $.ajax({
        url: app.trackUrl,
        method: 'GET',
        dataType: 'jsonp',
        data: {
            apikey: app.apiKey,
            format: 'jsonp',
            q_track: app.userTrack,
            q_artist: app.userArtist,
            f_has_lyrics: '1',
            s_track_rating: 'desc'
        }
    })
        .then(function (response) {
            // if (response.message.body.track_list[0]) {
            //     app.trackGenre = response.message.body.track_list[0].track.primary_genres.music_genre_list[0].music_genre.music_genre_name;
            //     // console.log(app.trackGenre);
            // } else {
            //     app.trackGenre = 'default-styles';
            // }
        });
}

// call to get lyrics 
app.getLyrics = () => {
    $.ajax({
        url: `${app.lyricUrl}${app.userArtist}/${app.userTrack}`,
        method: 'GET',
        dataType: 'json'
    }).then(function (response) {
        console.log(response);
        app.finalLyrics = response.lyrics;
        if (response.lyrics != '') {
            console.log('success')
            $('.results').html(`<p class="lyrics">${app.finalLyrics}</p>`);
        } else {
            console.log.log('failure');

            $('.results').html(`<p class="lyrics">Something went wrong! It looks like we can't find lyrics for that song, please try another or try being more specific in your search!</p>`);
        }
    });
}

app.styleReset = () => {
    $('.genre-class').removeClass(`${app.trackGenre}`);
    app.trackGenre = 'default-styles';
    $('.genre-class').addClass(`${app.trackGenre}`);
}

app.newStyles = () => {
    $('.genre-class').addClass(`${app.trackGenre}`);
}

$(function () {
    $('.begin-button').on('click', function () {
        app.userArtist = $('#user-artist').val();
        app.userTrack = $('#user-track').val();

        app.getTrack();
        app.getLyrics();
        app.styleReset();
        app.newStyles();

        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
        return false;

    });

    $('.bottom').click(function () {
        $(this).scrollTop(0);
        $('#reset').trigger('reset');

        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $("#reset-form").bind("click", function () {
        $("input[type=text]").val("");
        $('.results').html(`<p class="lyrics"> </p>`);

        app.styleReset();
    });

});



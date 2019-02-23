//namespace
const app = {};

app.trackUrl = 'https://api.musixmatch.com/ws/1.1/track.search';
app.lyricUrl = 'https://api.lyrics.ovh/v1/';
app.apiKey = '004fc1c5222f94cf5c07c80c81fa2f62';
app.trackGenre = 'default-styles';

//call to get genre
app.getGenre = () => {
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
            if (response.message.body.track_list[0]) {
                app.trackGenre = response.message.body.track_list[0].track.primary_genres.music_genre_list[0].music_genre.music_genre_name;
                console.log(app.trackGenre);
            } else {
                app.trackGenre = 'default-styles';
            }
        });
}

// call to get lyrics 
app.getLyrics = () => {
    app.finalLyrics = '';

    $.ajax({
        url: `${app.lyricUrl}${app.userArtist}/${app.userTrack}`,
        method: 'GET',
        dataType: 'json'
    }).then(function (response) {
        app.finalLyrics = response.lyrics;
        app.printLyrics();
    });

    app.printLyrics();
}

// function for putting the new lyrics on the page
app.printLyrics = () => {
    $('p.lyrics').text('');
    if (app.finalLyrics !== '') {
        $('p.lyrics').html(`${app.finalLyrics}`);
    } else {
        $('p.lyrics').append(`It looks like something went wrong! Please try a different search.`);
    }
}

// functions to initiate style changes based on genre
app.styleReset = () => {
    $('.genre-class').removeClass(`${app.trackGenre}`);
    app.trackGenre = 'default-styles';
    $('.genre-class').addClass(`${app.trackGenre}`);
}

app.newStyles = () => {
    $('.genre-class').addClass(`${app.trackGenre}`);
}

// document ready
$(function () {
    // 'Pick a Song' button event listening
    $('.begin-button').on('click', function () {
        // get user search parameters from form
        app.userArtist = $('#user-artist').val();
        app.userTrack = $('#user-track').val();

        // make API requests for genre and lyrics based on user search
        app.getGenre();
        app.getLyrics();
        // app.styleReset();
        // app.newStyles();

        // scroll to lyrics section
        $('.results').animatescroll();
    });

    // event listener for 'sing another song' button
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



//namespace
const app = {};

app.trackUrl = 'https://api.musixmatch.com/ws/1.1/track.search';
app.lyricUrl = 'https://api.lyrics.ovh/v1/';
app.apiKey = '004fc1c5222f94cf5c07c80c81fa2f62';

//call to get genre
app.getTrack = () => {
    $.ajax({
        url: app.trackUrl,
        method: 'GET',
        dataType: 'jsonp',
        data: {
            apikey: app.apiKey,
            format: 'jsonp',
            q_track: 'Bohemian Rhapsody',
            q_artist: 'Queen',
            f_has_lyrics: '1',
            s_track_rating: 'desc'
        }
    })
    .then(function(response) {
        console.log(response);
        // console.log('success');
        app.trackGenre = response.message.body;
        // .primary_genres.music_genre_list[0].music_genre_name;
        // console.log(app.trackGenre);
    })

}

// call to get lyrics 
app.getLyrics = () => {
    $.ajax({
        url: `app.lyricUrl/${app.userArtist}/${app.userTrack}`,
        method: 'GET',
        dataType: 'jsonp'
    }).then(function (response) {
        app.finalLyrics = response.message.body.lyrics.lyrics_body;
        console.log(app.finalLyrics)
    });
} 

$('.begin-button').on('click', function () {
    app.userArtist = $('#user-artist').val();
    app.userTrack = $('#user-track').val();
    // console.log(app.userArtist, app.userTrack);


    app.getTrack();
})
// $.when(app.getTrack)
//     .then(app.getLyrics) => {
//     console.log(app.getLyrics)
// });

// TESTING COMMENT




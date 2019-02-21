//SAMPLE CALLS //
// Call to get track ID
$.ajax({
    url: 'https://api.musixmatch.com/ws/1.1/track.search',
    method: 'GET',
    dataType: 'jsonp',
    data: {
        apikey: '004fc1c5222f94cf5c07c80c81fa2f62',
        format: 'jsonp',
        q_track: 'Bohemian Rhapsody',
        q_artist: 'Queen',
        f_has_lyrics: '1',
        s_track_rating: 'desc'
    }
}).then(function (response) {
    console.log(response);
    //get ID from response
});

//second call to get lyrics
$.ajax({
    url: 'https://api.musixmatch.com/ws/1.1/track.lyrics.get',
    method: 'GET',
    dataType: 'jsonp',
    data: {
        apikey: '004fc1c5222f94cf5c07c80c81fa2f62',
        format: 'jsonp',
        track_id: 75968499
    }
}).then(function (results) {
    console.log(results);
});
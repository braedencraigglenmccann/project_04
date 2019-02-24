//namespace
const app = {};

app.trackUrl = 'https://api.musixmatch.com/ws/1.1/track.search';
app.lyricUrl = 'https://api.lyrics.ovh/v1/';
app.apiKey = '004fc1c5222f94cf5c07c80c81fa2f62';
app.trackGenre = 'defaultStyles';
app.genres = {
    defaultStyles: `<svg xmlns="http://www.w3.org/2000/svg" data-name="1-outline" viewBox="0 0 64 64" x="0px" y="0px">
        < title > karaoke - mic - multimedia - microphone</title>
    <path
        d="M42.628,20.616l.819-.41-.894-1.789-.819.41a1.654,1.654,0,0,1-1.468,0l-.819-.41-.894,1.789.819.41a3.66,3.66,0,0,0,3.256,0Z">
    </path>
    <path
        d="M60,52a8.009,8.009,0,0,1-8,8H50a8.01,8.01,0,0,1-7.8-6.254,3.2,3.2,0,0,0,1.87-2.85L44.775,29H46V27H44.839l.095-2.918a9,9,0,1,0-7.868,0L37.932,50.9a3.162,3.162,0,0,0,2.25,2.976A10.012,10.012,0,0,0,50,62h2A10.011,10.011,0,0,0,62,52V27H60ZM34,16a7,7,0,1,1,7,7A7.008,7.008,0,0,1,34,16Zm5.09,8.792a8.873,8.873,0,0,0,3.82,0l-.841,26.039a1.073,1.073,0,1,1-2.138,0Z">
    </path>
    <path
        d="M5,28a3,3,0,0,0,3-3V14.574L18,8.741v9.443A2.966,2.966,0,0,0,17,18a3,3,0,1,0,3,3c0-.049-.012-.095-.014-.143H20V1.217L6,9.772V22.184A2.966,2.966,0,0,0,5,22a3,3,0,0,0,0,6Zm12-6a1,1,0,1,1,1-1A1,1,0,0,1,17,22ZM18,4.783V6.426L8,12.259V10.9ZM5,24a1,1,0,1,1-1,1A1,1,0,0,1,5,24Z">
    </path>
    <path
        d="M24,62a3,3,0,0,0,3-3V48.414l5.707-5.707-1.414-1.414L25,47.586v8.6A2.966,2.966,0,0,0,24,56a3,3,0,0,0,0,6Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,24,58Z">
    </path>
    <polygon points="4 52 6 52 6 50 8 50 8 48 6 48 6 46 4 46 4 48 2 48 2 50 4 50 4 52"></polygon>
    <polygon points="23 34 25 34 25 32 27 32 27 30 25 30 25 28 23 28 23 30 21 30 21 32 23 32 23 34"></polygon>
    <rect x="52" y="15" width="6" height="2"></rect>
    <rect x="51.807" y="10" width="5.385" height="2.001" transform="translate(-0.186 21.033) rotate(-21.807)"></rect>
    <rect x="53.5" y="18.307" width="2.001" height="5.385" transform="translate(14.761 63.803) rotate(-68.199)"></rect>
    <rect x="24" y="15" width="6" height="2"></rect>
    <rect x="26.5" y="8.307" width="2.001" height="5.385" transform="translate(7.074 32.448) rotate(-68.199)"></rect>
    <rect x="24.807" y="20" width="5.385" height="2.001" transform="translate(-5.833 11.718) rotate(-21.807)"></rect>
    <circle cx="37" cy="14" r="1"></circle>
    <circle cx="45" cy="14" r="1"></circle>
                    </svg >`,
    blues: `blues`,
    comedy: `comedy`,
    classical: `classical`,
    country: `country`,
    electronic: `electronic`,
    holiday: `holiday`,
    opera: `opera`,
    jazz: `jazz`,
    latin: `latin`,
    pop: `pop`,
    soundtrack: `soundtrack`,
    dance: `dance`,
    world: `world`,
    alternative: `alternative`,
    rock: `rock`,
    vocal: `vocal`,
    reggae: `reggae`,
    dj: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M27.864,73.404H15.31v12.554h12.555V73.404z M23.249,81.344h-3.325v-3.326h3.325V81.344z"></path><path d="M31.435,69.833H11.737V89.53h19.697V69.833z M29.65,87.744H13.523V71.619H29.65V87.744z"></path><path d="M85.754,73.404H73.199v12.554h12.555V73.404z M81.141,81.344h-3.326v-3.326h3.326V81.344z"></path><path d="M89.326,69.833H69.629V89.53h19.697V69.833z M87.539,87.744H71.415V71.619h16.124V87.744z"></path><path d="M64.68,64.363v-1.581h29.972v-3.571h-3.868v-3.094h-2.381v-4.166v-0.892h-0.892h-8.033h-1.313l0.421,0.892l0.827,1.757  H67.701v2.409H64.68V43.029H51.517l-0.151-5.256l9.478-0.275l-0.294-10.146l6.729-0.194l-0.194-6.73l-3.365,0.098l-0.36-12.377  L32.323,9.046l0.356,12.376l-3.363,0.098l0.195,6.729l6.729-0.195l0.294,10.147l9.479-0.275l0.147,5.102H32.253v1.381l-18.144,6.53  l0.021,0.119h-3.728H9.51v0.892v4.166H7.311v3.094H5.376v3.571H32.82l1.34,0.861l0.075,0.72H6.267V95h30.64V75.453h1.707  l-1.009,5.909l1.825,12.946l3.536-0.499l-1.749-12.396l1.02-5.961h12.285l-0.999,5.79l1.824,13.062l3.538-0.493L57.136,81.3  l1.009-5.847h6.013V95h30.64V64.363H64.68z M36.037,13.886l-0.041-1.373l23.896-0.691l0.04,1.374L36.037,13.886z M79.541,53.708  l0.408-0.865h6.669v3.273h-1.935v-2.409H79.541z M32.253,56.117h-2.487v-2.409H18.499l0.292-0.616l13.462-4.518V56.117z   M18.178,53.299l0.193,0.409h-1.416L18.178,53.299z M11.296,52.843h3.148l0.152,0.865h-1.813v2.409h-1.487V52.843z M33.22,91.314  H9.953V68.048H33.22V91.314z M91.111,91.314H67.844V68.048h23.268V91.314z"></path></svg>`,
    grunge: `grunge`,
    punk: `punk`,
    americana: `americana`,
    bluegrass: `bluegrass`,
    hardcore: `hardcore`,
    house: `house`,
    ambient: `ambient`,
    downtempo: `downtempo`,
    electronica: `electronica`,
    rap: `rap`,
    ccm: `ccm`,
    disco: `disco`,
    funk: `funk`,
    soul: `soul`,
    rockabilly: `rockabilly`,
    musicals: `musicals`,
    standards: `standards`,
    hawaii: `hawaii`,
    africa: `africa`,
    europe: `europe`,
    folk: `folk`,
    bebop: `bebop`
}

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
                console.log(response);
                app.userChoice = response.message.body.track_list[0].track.primary_genres.music_genre_list[0].music_genre.music_genre_name.toLowerCase();
            } else {
                console.log('Genre search failed');
                app.styleReset();
            }
            // using default styles for genres that are either more obscure or harder to target
            if (app.userChoice == `children's music` || app.userChoice == 'singer/songwriter' || app.userChoice == 'r&b/soul' || app.userChoice == 'hip hop/rap' || app.userChoice == 'christian & gospel' || app.userChoice == 'easy listening' || app.userChoice == 'instrumental' || app.userChoice == 'j-pop' || app.userChoice == 'k-pop' || app.userChoice == 'college rock' || app.userChoice == 'indie rock' || app.userChoice == 'new wave' || app.userChoice == 'classical crossover' || app.userChoice == 'contemporary bluegrass' || app.userChoice == 'contemporary country' || app.userChoice == `jungle/drum'n'bass` || app.userChoice == 'big band' || app.userChoice == 'alternative folk' || app.userChoice == 'contemporary folk' || app.userChoice == 'traditional folk' || app.userChoice == 'alternative rap' || app.userChoice == 'hip - hop' || app.userChoice == 'underground rap' || app.userChoice == 'christan rap' || app.userChoice == 'christian rock' || app.userChoice == 'southern gospel' || app.userChoice == 'contemporary jazz' || app.userChoice == 'crossover jazz' || app.userChoice == 'pop in spanish' || app.userChoice == 'latin urban' || app.userChoice == 'alternative & rock in spanish' || app.userChoice == 'adult contemporary' || app.userChoice == 'pop/rock' || app.userChoice == 'adult alternative' || app.userChoice == 'arena rock' || app.userChoice == 'blues - rock' || app.userChoice == 'death metal/black metal' || app.userChoice == 'hard rock' || app.userChoice == 'heavy metal' || app.userChoice == 'prog - rock/art rock' || app.userChoice == 'idm/experimental' || app.userChoice == 'foreign cinema' || app.userChoice == 'original score' || app.userChoice == 'vocal jazz' || app.userChoice == 'indie pop' || app.userChoice == 'spoken word' || app.userChoice == 'french pop') {
                app.styleReset();
            } else {
                app.newStyles();
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
    $('.genre-SVG').text('');
    app.userChoice = 'defaultStyles';
    let genre = app.userChoice;
    $('.genre-SVG').append(`${app.genres[genre]}`);
}

app.newStyles = () => {
    $('.genre-SVG').text('');
    let genre = app.userChoice;
    $('.genre-SVG').append(`${app.genres[genre]}`);
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
        app.styleReset();
        app.newStyles();

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



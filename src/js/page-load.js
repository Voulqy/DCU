// const Cookies = require("cookies");
// $(document).ready(function(){
//     var currPage = Cookies.get('currPage');
//     $("#main").load("src/html/" + currPage + ".html");
// });

// $('body').bind('onunload',function(){
//     var currPage = Cookies.get('currPage');
//     $("#main").load("src/html/" + currPage + ".html");
// });

// load home page
$(document).ready(function () {
    // Cookies.set('currPage', 'index');
    $('.logo').click(function(){
        $('#main').load("index.html")
    });

    $('#artists').click(function(){
        $('li.active').removeClass('active');
        $('#main').load("src/html/artists.html")
        $('title').text("Artists");
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            // Cookies.set('currPage', 'artists');
        }
    });

    $('#music').click(function(){
        $('li.active').removeClass('active');
        $('#main').load("src/html/discography.html")
        $('title').text("Discography");
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            // Cookies.set('currPage', 'discography');
        }
    });
});

// Load individual album pages
$('.discography-card').click(function(){
    var albumId = this.id;
    $("#main").load("src/html/albums/" + albumId + ".html");
});

// Load individual lyrics pages
$('.song').click(function(){
    var songId = this.id;
    $("#main").load("src/html/songs/" + songId + ".html");
});

// Go back a to the album page
$('.go-back').click(function(){
    var albumId = this.id;
    $("#main").load("src/html/albums/" + albumId + ".html");
});
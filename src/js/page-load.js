// load home page
$(document).ready(function () {
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
        }
    });

    $('#music').click(function(){
        $('li.active').removeClass('active');
        $('#main').load("src/html/music.html")
        $('title').text("Music");
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});

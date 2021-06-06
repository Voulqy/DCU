// load home page
$(document).ready(function () {
    $('.logo').click(function(){
        $('#main').load("index.html")
    });

    $('#artists').click(function(){
        $('li.active').removeClass('active');
        $('#main').load("src/html/artists.html")
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });

    $('#music').click(function(){
        $('li.active').removeClass('active');
        $('#main').load("src/html/music.html")
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});

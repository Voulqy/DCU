// Change theme the theme button is clicked
$('.toggle').click(function(){
    // Assign the .default class from <body> to the $this variable
    var $this = $(".default");
    // if <body> doesn't have the .light class, add it
    if (!$this.hasClass('light')) {
        $this.addClass('light')
    } 
    // if <body> does have the .light class tag, remove it
    else {
        $this.removeClass('light')
    }
})

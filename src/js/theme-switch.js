// function $(el) {
//     return document.querySelector(el);
// }

$('.toggle').click(function(){
    var $this = $(".default");
    if (!$this.hasClass('light')) {
        $this.addClass('light')
    } else {
        $this.removeClass('light')
    }
})


// js
// let container = $('.container');
// let toggle = $('#toggle-theme');

// toggle.addEventListener('click', () => {
//     let list = container.classList;

//     if (list.contains('default')) {
//         list.replace('default', 'light');
//         toggle.textContent = 'Dark';
//     } else {
//         list.replace('light', 'default');
//         toggle.textContent = 'Light';
//     }

// })
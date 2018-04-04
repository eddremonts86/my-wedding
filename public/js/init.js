var height = $(window).height();
var width = $(window).width();
$(document).ready(function () {
    $('#video_id').css("min-height", height - (height / 10) + "px");
    $('#video_id').css("min-width", width - (width / 10) + "px");
    $('.modal-dialog').css("max-width", width + "px");
    $('.video_iframe').css("width", width - 35 + "px");
    $('.video_iframe').css("height", height - (height / 9) + "px");


document.addEventListener("touchstart", function(e) {
    e.preventDefault();        
    Modernizr.passiveeventlisteners ? {passive: true} : false
   });

});
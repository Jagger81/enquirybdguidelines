$(document).ready(function() {


//User manual log animation
$('#usermanual').mouseenter(function() {
    $(this).css("cursor","pointer");
    $(this).animate({width: "25%", height: "25%"}, 'slow');
});

$('#usermanual').mouseleave(function() {   
    $(this).animate({width: "20%"}, 'slow');
});

});


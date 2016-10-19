$(function(){


var images = [
    "images/DSC6368pics.jpg",
    "images/DSC6381pics.jpg",
    "images/DSC6386pics.jpg",
    "images/DSC6377pics.jpg"];

var backgrounds = [
 	"images/DSC6368pics.jpg",
    "images/DSC6381pics.jpg",
    "images/DSC6386pics.jpg",
    "images/DSC6377pics.jpg"];

var current=0;


function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    $('#randompic').css("background-image","url("+images[x]+")");
}

randImg();


function nextBackground() {
	$(".biggallery").each(function (idx, elm) {
		$(elm).css(
        'background-image',
    	"url('" + backgrounds[Math.floor(Math.random() * backgrounds.length)] + "')"
    	);
	});

    setTimeout(nextBackground, 1000);
}

nextBackground();


$('.state').hover(function() {
    $('.state-full', this).slideToggle(100, 'linear').display(100, 'linear');
});


$('.feather').featherlight();

});
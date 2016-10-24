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
    "images/DSC6377pics.jpg",
    "images/DSC6355pics.jpg",
    "images/DSC6357pics.jpg",
    "images/DSC6358pics.jpg",
    "images/DSC6361pics.jpg",
    "images/DSC6363pics.jpg",
    "images/DSC6365pics.jpg",
    "images/DSC6367pics.jpg",
    "images/DSC6370pics.jpg",
    "images/DSC6376pics.jpg",
    "images/DSC6380pics.jpg",
    "images/DSC6382pics.jpg",
    "images/DSC6388pics.jpg",
    "images/DSC6389pics.jpg",
    "images/DSC6391pics.jpg",
    ];

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

    setTimeout(nextBackground, 2000);
}

nextBackground();


$('.state').hover(function() {
    $('.state-full', this).slideToggle(100, 'linear').display(100, 'linear');
});


$('.feather').featherlight();

});
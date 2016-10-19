$(function(){


var images = [
    "images/DSC6368pics.jpg",
    "images/DSC6381pics.jpg",
    "images/DSC6386pics.jpg",
    "images/DSC6377pics.jpg"];

		function randImg() {
    		var size = images.length
    		var x = Math.floor(size * Math.random())
    		$('#randompic').css("background-image","url("+images[x]+")");
}

randImg();

$('.state').hover(function() {
    $('.state-full', this).slideToggle(100, 'linear').display(100, 'linear');
});


// want to add in JS on the second page that allows the three big 
// images to change all the time to different wreaths

});
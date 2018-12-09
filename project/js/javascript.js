
var slides = document.querySelectorAll('#slides .slide');
var downs = document.querySelectorAll('#downs li');
var currentSlide = 0;

function nextSlide(integer){
	//set default classes
	slides[currentSlide].className = 'slide';
	downs[currentSlide].className = '';

    //count
    currentSlide = (currentSlide+integer)%slides.length;
    if (currentSlide<0) {
    	currentSlide = slides.length-1;
    }

	//set the new classes
	slides[currentSlide].className = 'slide showing';
	downs[currentSlide].className = 'mark';

}
var timerId=setInterval("nextSlide(1)", 3000);

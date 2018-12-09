$(document).ready(function() {


	$('#my-carousel').on('initialized.owl.carousel', function() {
		$('.navigator').eq(0).addClass('active');
		console.log('initialized');
	});

	$('#my-carousel').owlCarousel({
		loop : true,
		autoplay : true,
		autoplayTimeout :0 ,
		autoplaySpeed:3000,
		mouseDrag:false,
		touchDrag:false,
		nav : true,
		navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
		singleItem: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2	,
			},
			1000:{
				items:6
			}
		}
	});

	$('#my-carousel').on('changed.owl.carousel', function(ev) {
		var item_index = ev.page.index;
		$('.navigator').removeClass('active').eq(item_index).addClass('active');
	});

	$('.navigator').on('click', function() {
		var item_no = $(this).data('item'); 
		$('#my-carousel').trigger('to.owl.carousel', [item_no, 5000, true]);
	});
});





$(document).ready(function(){

	$("#menu").on("click","#an", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);

	});

});

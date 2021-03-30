$(function () {
	$('.img').click(function () {
		$('.ryy').toggleClass('social-media-head-active');
	});
});


$('.div-flex').click(function(e){
	e.preventDefault();
	$('.div-flex').removeClass('active');
	$(this).addClass('active');
});




// $('document').ready(function() {
// 	$('.div-flex').on('click','.none',function() {
// 		// var scr = $(this).attr('scr')
// 		alert(3);
// 	});
// });
	$('.div-flex').click(function(e){
		e.preventDefault();
		$('.div-flex').removeClass('active');
		$(this).addClass('active');
	});

	$('.span-flex').click(function(e){
		e.preventDefault();
		$('.span-flex').removeClass('he');
		$(this).addClass('he');
	});
	$('.div').click(function(e){
		e.preventDefault();
		$('.div').removeClass('div-activ');
		$(this).addClass('div-activ');
	});






	$('.span').click(function () {
		$('.none').addClass('byy');
	});

	$('.span-one').click(function () {
		$('.none-too').addClass('tooo');
	});

	$('.span-too').click(function () {
		$('.none-one').addClass('ryyy');
	});

	$('.span-ran').click(function () {
		$('.try').addClass('ran');
	});





	$('.span-too').click(function(e){
		e.preventDefault();
		$('.none').removeClass('byy');
	});
		$('.span-one').click(function(e){
		e.preventDefault();
		$('.none').removeClass('byy');
	});
			$('.span-ran').click(function(e){
		e.preventDefault();
		$('.none').removeClass('byy');
	});




	$('.span-too').click(function(e){
		e.preventDefault();
		$('.none-too').removeClass('tooo');
	});
		$('.span-ran').click(function(e){
		e.preventDefault();
		$('.none-too').removeClass('tooo');
	});
		$('.span').click(function(e){
		e.preventDefault();
		$('.none-too').removeClass('tooo');
	});



		$('.span-one').click(function(e){
			e.preventDefault();
			$('.none-one').removeClass('ryyy');
		});
			$('.span-ran').click(function(e){
			e.preventDefault();
			$('.none-one').removeClass('ryyy');
		});
			$('.span').click(function(e){
			e.preventDefault();
			$('.none-one').removeClass('ryyy');
		});



		$('.span-one').click(function(e){
			e.preventDefault();
			$('.try').removeClass('ran');
		});
			$('.span-too').click(function(e){
			e.preventDefault();
			$('.try').removeClass('ran');
		});
			$('.span').click(function(e){
			e.preventDefault();
			$('.try').removeClass('ran');
		});

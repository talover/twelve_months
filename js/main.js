$(document).ready(function() {
	slider();
	DropDown();
	secondDrop();
	BackSecond();
	BackThird();
	thirdDrop();
	BackAll();
	resize_slider();
});

$( window ).resize(function() {
	resize_slider();
	resize_slider();
});

function slider() {
 
	$("#baner_block").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 500,
		paginationSpeed : 500,
		itemsCustom : [
		[0, 1],
		[620, 1],
		[768, 2],
		[900, 2],
		[1024, 2],
		[1200, 2]
		],
	});

	$("#second_baner").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 500,
		paginationSpeed : 500,
		itemsCustom : [
		[0, 1],
		[620, 1],
		[768, 2],
		[900, 2],
		[1024, 2],
		[1200, 2]
		],
		autoPlay:3000
	});

	var owl = $("#popular_slider");

	owl.owlCarousel({
		itemsCustom : [
			[0, 1],
			[620, 3],
			[768, 3],
			[900, 4],
			[1024, 5],
			[1200, 6]
		],
		navigation : true,
		slideSpeed : 500,
		paginationSpeed : 500,
		autoPlay:5000
	});

	var viewed = $("#viewed_slider");

	viewed.owlCarousel({
		itemsCustom : [
			[0, 1],
			[620, 2],
			[768, 3],
			[900, 2],
			[1024, 2],
			[1200, 3]
		],
		navigation : true,
		slideSpeed : 500,
		paginationSpeed : 500,
		autoPlay:5000
	});
}

function resize_slider() {
	$(".owlCarousel").data('owlCarousel').destroy();
	slider();
}

function DropDown() {
	$('#nav_mob i.arrow').on('click',function(){
		$(this).toggleClass('active');

		$(this).parents('#nav_mob').find('.drop_down').slideToggle();
	});
}

function secondDrop() {
	$('.drop_down a.drop').on('click', function(){
		$(this).parent('li').find('.second_drop_down').fadeIn();
	});
}

function thirdDrop() {
	$('.second_drop_down > ul > li > a').on('click', function(){
		$(this).parent('li').find('.third_drop_down').fadeIn();
	});
}

function BackSecond() {
	$('.second_drop_down > .top_nav > .back').on('click' ,function(){
		$('.second_drop_down').fadeOut();
	});
}

function BackThird() {
	$('.third_drop_down .back').on('click' ,function(){
		$('.third_drop_down').fadeOut();
	});
}

function BackAll() {
	$('.drop_down .home').on('click',function(){
		$('.second_drop_down ,.third_drop_down').fadeOut();
	});
}
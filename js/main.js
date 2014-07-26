$(document).ready(function() {
		slider();
		DropDown();
		secondDrop();
		BackSecond();
		BackThird();
		thirdDrop();
		BackAll();
		MoreNav();
		Popup();
		FormStyler();
		sorting_tab();
		contacts_tab_height();
		contacts_tab();
		productsTabs();

		$("a.anchorLink").anchorAnimate();

		$(window).scroll(function(){
			var scroll = $(window).scrollTop();

			if(scroll > 200){
				$('.top_block').addClass('active');
				$('#header_fixed').slideDown();
			}else {
				$('#header_fixed').slideUp();
				$('.top_block').removeClass('active');
			}
		});
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

function MoreNav() {
	$("#nav .more > a").on('click', function(){
		$(this).parent().toggleClass('active');
		$(this).parent().find('ul').slideToggle();
	});
}

function Popup() {
	$("#order_call_btn").click(function() {
		$.fancybox( {href : '#order_call', padding : 0, wrapCSS: "popup"} );
	});
	$("#btn_map").click(function() {
		$.fancybox( {href : '#map_block', padding : 0, wrapCSS: "popup"} );
	});
	$("#btn_delivery").click(function() {
		$.fancybox( {href : '#delivery_block', padding : 0, wrapCSS: "popup"} );
	});
	$("#btn_advice").click(function() {
		$.fancybox( {href : '#advice_block', padding : 0, wrapCSS: "popup"} );
	});
}

function FormStyler() {
	setTimeout(function() {  
		$('input, select').styler();  
	}, 10);
}

function sorting_tab() {
	$('#catalog_block .sorting a').on('click',function(){
		var tab = $(this).data('sorting');
		$('.sorting_tab').removeClass('active');
		$('#catalog_block .sorting a').removeClass('active');
		$(tab).addClass('active');
		$(this).addClass('active');
	});
}


function contacts_tab_height() {
	$('.f_right .contacts_tab').each(function(){
		var w = $(this).height() + 30 ,
			h = w/2;
		$(this).css({
			height:w,
			margin:-h
		});
	});
}

function contacts_tab() {
	$('.contacts_list a').on('click',function(){
		var coordinates = $(this).data('coordinates'),
			contactsList = $(this).data('contactsList');

		$('.contacts_list li').removeClass('active');
		$(this).parent().addClass('active');
		$('.coordinates').removeClass('active');
		$(coordinates).addClass('active');
		$('.contacts_tab').removeClass('active');
		$(contactsList).addClass('active');
	});

	$('.coordinates a').on('click',function(){
		var  contactsList = $(this).data('contactsList'),
			 listBtn = $(this).data('listBtn');

		$('.coordinates').removeClass('active');
		$(this).parent().addClass('active');
		$('.contacts_tab').removeClass('active');
		$(contactsList).addClass('active');
		$('.contacts_list li').removeClass('active');
		$(listBtn).parent().addClass('active');
	});
}

function productsTabs() {
	$('.tabs_list a').on('click',function(){
		var products = $(this).data('productsTabs');

		$('.tabs_list a').removeClass('active');
		$(this).addClass('active');
		$('.products_tab').removeClass('active');
		$(products).addClass('active');

	});
}

jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 1100
	}, settings);	
	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href")
			
			var destination = $(elementClick).offset().top - parseInt(50);
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}
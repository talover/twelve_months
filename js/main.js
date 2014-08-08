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
		DropDownTabs();
		filtresDropDown();
		DropDownBlockTab();

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

			if(scroll > 310) {
				$('#filters_block').addClass('active');
			}else {
				$('#filters_block').removeClass('active');
			}
		});

		$('.flag').on('click',function(){
			$(this).toggleClass('active');
		});

		$('#type input[type="radio"]').change(function(){
			var text = $(this).data('text');
			
			$('#type a').addClass('active').find('span').text(text);
		});

		$('#type a').on('click','i',function(){
			$(this).parents('a').removeClass('active').find('span').text('');
		});

		$('.category a').on('click',function(){
			$(this).parent().find('.drop_down').slideToggle();
		});

		$('.checklist input[type="checkbox"]').on('change',function(){
			var n = $(this).parents('.checklist').find('input[type="checkbox"]:checked').length;
			
			if(0 < n) {
				$(this).parents('.drop_cont').addClass('active').find('.num span').text(n);
			}else {
				$(this).parents('.drop_cont').removeClass('active').find('.num span').text('');
			}
		});

		$('.drop_cont .close').on('click',function(){
			$(this).parents('.drop_cont').removeClass('active').find('.num span').text('');
			$(this).parents('.drop_cont').find('.checklist input[type="checkbox"]').prop('checked', false); 
			$('input, select').trigger('refresh'); 
		});

		$('a.busket').click(function(){
			$(this).toggleClass('active');
		})

		/*
		====================================================
		color
		====================================================
		*/ 

		$('.color_list').on('click','a',function(){
			var color = $(this).data('color');

			$('.color_list a').removeClass('active');
			$(this).addClass('active');

			$('.add_color a.active').css('background', color);
		});

		$('.add_color').on('click','a',function(){
			$('.add_color a').removeClass('active');
			$(this).addClass('active');
		});

		$('.radio_block').on('click', 'a', function(){
			$('.radio_block a').removeClass('active');
			$(this).addClass('active')
		});

		$('.add_color_btn').on('click',function(){
			var num_color = $(this).parents('.add_color').find('li.color_block').length;

			if(6 > num_color) {
				$("<li class='color_block'><a  class='color-box' href='javascript:void(0)'></a></li>").insertBefore($(this).parent());
				$(this).parents('.color_cont').addClass('active').find('.num span').text(num_color + 1);
			}
			if(5 == num_color){
				$(this).addClass('hidden');
			}
		});

		$('.color_cont').on('click','i.close',function(){
			$('.add_color .color_block').remove();
			$(this).parents('.color_cont').find('.add_color_btn').removeClass('hidden');
		});

		/*
		======================================================
		filtres
		======================================================
		*/

		$('.more_filtres').click(function(){
			$('.filter_cont .second').slideToggle();
		});

		$('.size a.btn').click(function(){
			$(this).toggleClass('active');
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
		$('input, select').trigger('refresh'); 

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

function DropDownTabs() {
	$('.drop_down_tabs a').on('click',function(){
		var DropDownTab = $(this).data('dropDownTabs');
		$(this).parents('.drop_down').find('.drop_down_tab').removeClass('active');
		$(DropDownTab).addClass('active');
	});
}

function filtresDropDown() {
	$('.filter_cont > ul > li > a ').on('click',function(){
		$(this).parent().siblings().find('.drop_down').slideUp();
		$(this).parents('ul').siblings().find('.drop_down').slideUp();
		$(this).parent().find('.drop_down').slideToggle();
	});
}

function DropDownBlockTab() {
	$('.click-nav > li > a').on('click',function(){
		$(this).parent().siblings().find('i').removeClass('active');
		$(this).parents('.block_tab').siblings().find('i').removeClass('active');
		$(this).parents('ul').siblings().find('i').removeClass('active');
		$(this).find('i').toggleClass('active');
		$(this).parents('li').siblings().find('.drop_down').slideUp();
		$(this).parents('.block_tab').siblings().find('.drop_down').slideUp();
		$(this).parents('ul').siblings().find('.drop_down').slideUp();
		$(this).parents('li').find('.drop_down').slideToggle();
	});	
}
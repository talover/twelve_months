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
		thumbnailSlider();
		zoomImage();
		scrollLetter();  
		
});

function thumbnailSlider() {
	// Thumbnail owl carousel		 
		var sync1 = $("#big_slide");
		var sync2 = $("#thumb_slide");
		 
		sync1.owlCarousel({
			singleItem : true,
			navigation: true,
			pagination:false,
			transitionStyle : "fade",
			afterAction : syncPosition,
			responsiveRefreshRate : 200
		});
		 
		sync2.owlCarousel({
			items : 15,
			itemsDesktop : [1199,10],
			itemsDesktopSmall : [979,10],
			itemsTablet : [768,8],
			itemsMobile : [479,4],
			pagination:false,
			responsiveRefreshRate : 100,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});
		 
		function syncPosition(el){
			var current = this.currentItem;
			$("#thumb_slide")
			.find(".owl-item")
			.removeClass("synced")
			.eq(current)
			.addClass("synced")
			if($("#thumb_slide").data("owlCarousel") !== undefined){
				center(current)
			}
		}
		 
		$("#thumb_slide").on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo",number);
		});
		 
		function center(number){
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for(var i in sync2visible){
				if(num === sync2visible[i]){
					var found = true;
				}
			}
		 
			if(found===false){
				if(num>sync2visible[sync2visible.length-1]){
					sync2.trigger("owl.goTo", num - sync2visible.length+2)
				}else{
					if(num - 1 === -1){
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if(num === sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", sync2visible[1])
			} else if(num === sync2visible[0]){
				sync2.trigger("owl.goTo", num-1)
			}
		}
}

function zoomImage() {
	$(".zoom").elevateZoom();
}

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

function scrollLetter() {                          
	$("#scroll").mCustomScrollbar({
		axis:"x",
		theme:"inset-dark",
		advanced:{autoExpandHorizontalScroll:true}
	});

	$('.alphabet_list a').on('click', function(){
		var alphabet = $(this).data('alphabet');

		$("#scroll").mCustomScrollbar("scrollTo",alphabet);
		$('.letter_block').removeClass('active');
		$(alphabet).find('.letter_block').addClass('active');
		$('.alphabet_list a').removeClass('active');
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



/*jshint browser:true */
/*global $ */(function($)
{
 "use strict";

	$(document).ready(function(){
		$('#articleList').dataTable();

		$.ajaxSetup({
	        type: 'POST',
	        timeout: 5000,
	        dataType: 'html'
	    });

		// $(document).on('click', '#hz-j-News.tg-feature.isActive', function(evt){
		//  		alert("clicked");
	 // 	});

	
		$(document).on('click', '.tg-feature', function(evt){
	 		var $this = $(this);
	 		$(".hz-tag-stript").addClass("hidden");
 			$(".hz-tags").addClass("hidden");
 			if($this.hasClass("isActive")){
 				// alert("go to new page");
 				var $jurnalType = $this.find(".tg-title > h3").text();
 				// console.log($jurnalType);
 				if($jurnalType != "Manage writers"){
 					window.location.href = '/dashbord/manage?jurnalpage='+ $jurnalType;
 				}else{
 					alert("Upgrade needed");
 				}
 			}else
	 		if(!$this.hasClass("isActive")){
	 			$('.tg-feature').removeClass("isActive");
	 			
	 			$this.find(".hz-tags").removeClass("hidden");
	 			$this.find(".hz-tag-stript").removeClass("hidden");
	 			$this.find(".hz-tag").removeClass("hidden");
	 			$this.addClass("isActive");
	 		}
	 		// $this.addClass("isActive");
	 		// alert("in");
	 	});

		$(document).on('click', '.hz-visability', function(evt){
			var $this = $(this);
			var $i = $this.find("i");
			if($i.hasClass("icon-eye")){
				$i.removeClass("icon-eye");
				$i.addClass("icon-eye-blocked");
			}else{
				$i.addClass("icon-eye");
				$i.removeClass("icon-eye-blocked");
			}
		});
		
		$(document).on('click', '.hz-menu>p', function(evt){
			var $this = $(this);
			var $jurnalType = $.trim($('.hz-menu-heading p').text());
			console.log($this.text());
			if($.trim($this.text()) == "add New"){
				window.location.href = "/dashbord/add?to="+ $jurnalType;
			}
		});

		// $(document).on('click', 'button.icon-pencil2', function(evt){
		// 	var $set = $(this).closest('tr').find('td:first').attr("id").split("-");
		// 	var $id = $set[1];

		// 	$.ajax({
		// 		url: "edit.php",
		// 		data: {na_id: $id}
		// 	});

			
		// 	window.location.href = "edit.php";
		// });

	 	$(document).on('click', "#attachment", function(evt){
	 		$('input[type="file"]').trigger("click");
	 		// alert("clicked");
	 	});

	 	$(document).on('click', '#wrapManageDash form .icon-trash', function(){
	 		var $this = $(this);
	 		$this.closest('form').find('input[type="submit"]').trigger('click');
	 	});



	 	$(document).on('click', 'article.homescreen', function(){
	 		var $this = $(this), $id = $this.attr('id');
	 		var $activeNav = $('#navsystem').find('a.active').text();
	 		// console.log($activeNav);
	 		var $artHighlight = $this.find('.articleHighlight');

	 		if($artHighlight.hasClass('show')){

	 			window.location.href = '/view/blog?section='+$activeNav+'&blog_id='+$id;
	 		}else if($artHighlight.hasClass('hidden')){
	 			$('article.homescreen .articleHighlight').addClass('hidden');
	 			$('article.homescreen .articleHighlight').removeClass('show');
		 				 		
	 			$artHighlight.removeClass('hidden');
	 			$($artHighlight).addClass('show');
	 		}
	 	});

	 	// $(document).on('click', 'article.homescreen button.close', function(){
	 	// 	// alert("clicked");
	 	// 	console.log($('.articleHighlight'));
	 	// 	$('.articleHighlight').addClass('hidden');
 		// 	$('.articleHighlight').removeClass('show');

 		// 	setTimeout(function(){

 		// 	}, 2000);
	 	// });

	 	if($('#pageName').val()){
	 		$name = $('#pageName').val();
	 		$active = $('nav a.active').text();
	 		
	 		if($active != 'login' || $active != 'logout'){

	 			$('nav a').removeClass('active');
	 			if($('nav a').text() == $name){
	 				$(this).addClass('active');
	 			}
	 		}
	 	}

	});

 })(jQuery);
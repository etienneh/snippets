
	/* RESIZE TRIGERRING
	   ================================================== */
	var myDivWidth;
	
	$(document).ready(function() {
		myDivWidth = $('#myDiv').width();
	
		$(window).resize(function () {
			if ($('#myDiv').width() != myDivWidth) {
				//If the media query has been triggered
				myDivWidth = $('#myDiv').width();
				//Your resize logic here (the jQuery menu stuff in your case)
			}
		});
	});
	
	/* CHAINAGE
	   ================================================== */
	$("img.hoverImage").mouseover(function(){
		$(this).attr("src", src);
	}).mouseout(function(){
		$(this).attr("src", src);
	}).click(function(){
		return false;
	});

	/* ANIMATE
	   ================================================== */
	$('#first')
		.animate({width:'+=400px', height:'+=400'}, 'slow')
		.animate({top:'+=100px'},{duration:'normal', queue:false})
		.queue(function(){
			$(this).css('backgroundColor','#000')
			.dequeue();
		})
		.animate({top:'+=100px'}, 'slow')
			
	$('#link').toggle(
	   function() {
			$('#first').animate({width: '+=80px'}, 'fast');
	   },
	   function(){
			$('#first').animate({left: '-=80px'}, 'fast');
	   }
	);

	/* DATE FR -> DATE UK
	   ================================================== */
	function convertirDate(strDate){	  
		day = strDate.substring(0,2);
		month = strDate.substring(3,5);
		year = strDate.substring(6,10);
		d = new Date();
		d.setDate(day);
		d.setMonth(month);
		d.setFullYear(year); 
		return d;  
	}

	/* ROLLOVER
	   ================================================== */
	$(".miniature-wrap .miniature-link").hover(function(){
		$(this).append('<span class="miniature-hover"></span>');
	},
	function(){
		$(this).find('.miniature-hover').remove();
	});

	/* MAIL PROTECT
	   ex. html : <span id="footer-mail">etiennehoullier at gmail dot com</span>
	   ================================================== */
	$(function(){
		var spt = $('span#footer-mail');
		var at = / at /;
		var dot = / dot /g;
		var addr = $(spt).text().replace(at,"@").replace(dot,".");
		$(spt).after('<a href="mailto:'+addr+'" title="Envoyer un email!">'+ addr +'</a>')
		.hover(function(){window.status="Envoyer un email!";}, function(){window.status="";});
		$(spt).remove();
	});

	/* VALIDATION
	   ================================================== */
	$.fn.checkForm = function() { 
		$name = $('input[name="name"]').val();
		$mail = $('input[name="mail"]').val();
		$msg = $('textarea[name="msg"]').val();
		$nameChecker = false;
		$mailChecker = false;
		$msgChecker = false;
		$regMail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
		
		if($name != '') 
			$nameChecker = true;	
		if(($mail != '')&&($regMail.exec($mail)!= null )) 
			$mailChecker = true;	
		if($msg != '') 
			$msgChecker = true ;	
			
		if($nameChecker&&$mailChecker&&$msgChecker) 
			return true;
		else {
			if(!$nameChecker)
				$('input[name="name"]').css('background-color','#993333');
			else 
				$('input[name="name"]').css('background-color','#ccc');
			if(!$mailChecker) 
				$('input[name="mail"]').css('background-color','#993333');
			else 
				$('input[name="mail"]').css('background-color','#ccc');
			if(!$msgChecker) 
				$('textarea[name="msg"]').css('background-color','#993333');
			else 
				$('textarea[name="msg"]').css('background-color','#ccc');	
			return false;	
			}
	}

	/* SEQUENTIAL FADE
	   ================================================== */
	$.fn.fadeInSequence = function(fadeInTime, timeBetween){
		
		timeBetween = typeof(timeBetween) == 'undefined' ? 0 : timeBetween;
		fadeInTime = typeof(fadeInTime) == 'undefined' ? 500 : fadeInTime;
		var remainingTime = $(this).size() * (fadeInTime+timeBetween);
		var i=0; 
		
		return $(this).each(function() {
			$(this).delay(i++*(fadeInTime+timeBetween));
			remainingTime -= (fadeInTime+timeBetween);
	 
			if($(this).css('display') == 'none') 
				$(this).fadeIn(fadeInTime);
			else 
				$(this).animate({'opacity' : 1}, fadeInTime);
			
			$(this).delay(remainingTime+timeBetween);
		}); 
	}

	/* RETURN MOUSE POSITION
	   ================================================== */
	function rPosition(elementID, mouseX, mouseY) {
	  var offset = $('#'+elementID).offset();
	  var x = mouseX - offset.left;
	  var y = mouseY - offset.top;
	
	  return {'x': x, 'y': y};
	}	

	/* DELAY
	   ================================================== */
	$(".alert").delay(2000).fadeOut(); 

	/* IMG LOADING
	   appel :  $.preloadImages("hoverimage1.jpg","hoverimage2.jpg");
	   ================================================== */
	$.preloadImages = function() {
		   for(var i = 0; i<arguments.length; i++) {
				   $("<img />").attr("src", arguments[i]);
		   }
	}

	/* SCROLL TO   
	   appel : $('.area_name').autoscroll();
	   ================================================== */
	$.fn.autoscroll = function(selector) {
	  $('html,body').animate(
		{scrollTop: $(selector).offset().top},
		500
	  );
	}


























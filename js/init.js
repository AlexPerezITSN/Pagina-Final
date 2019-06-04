(function($){
	$(function(){
		$('.drpdown-trigger').dropdown();
		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('#textarea1').val('New Text');
	M.textareaAutoResize($('#textarea1'));
	});
})(jQuery);
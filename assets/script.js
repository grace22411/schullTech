$(document).ready(function() {
	
	$('a.slider_link').click(function(e){
//		e.preventDefault();
		var slider_id = $(this).attr('slider_id');
		localStorage.setItem("link-for-nav",slider_id);
	});
	
	var slider_id_gotten = localStorage.getItem("link-for-nav");
	
	if(slider_id_gotten != null){
		$(".carousel").show().carousel(slider_id_gotten - 1).carousel({interval: 3000});
	}
	
    var bar = $(".navbar_contain");
	var list = $(".modal_content");
	var close = $(".close");

	bar.click(function(){
		list.fadeIn();
	});
	
	close.click(function(){
		list.fadeOut();
	})
	list.click(function(){
		list.fadeOut();
	});
    
});
//end document ready function
$(document).ready(function()    {

	$('.multi-item-carousel').carousel({
		interval: false
	});

	$('.multi-item-carousel .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		if (next.next().length>0) {
			next.next().children(':first-child').clone().appendTo($(this));
		} else {
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});

	$('#slider').rotateSlider({

	});

	$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});

});
if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
   script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
    script.onload=kapow;
    document.body.appendChild(script);
}
else {
    kapow();
}

function kapow() {
	$('body').on('mouseenter', '*', function(event){
		event.stopPropagation();
		$(this).css({'outline': '3px solid #d37820', 'cursor':'pointer'}).addClass('kapow');
	}).on("mouseleave", '*', function(event){
		event.stopPropagation();
		$(this).css('outline', 'none').removeClass('kapow');
	}).on('click', '.kapow', function(event){
		event.stopPropagation();
		$(this).css({"display":"none"});
	});
}
if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
   script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
    script.onload=kapow;
    document.body.appendChild(script);
}
else {
    kapow();
}

function kapow() {
	$('body').on('mouseover', '*', function(){
		$(this).css({'outline': '3px solid #d37820', 'cursor':'pointer'});
	}).on("mouseout", '*', function(){
		$(this).css('outline', 'none');
	}).on('click', '*', function(){
		$(this).css({"display":"none"});
	});
}
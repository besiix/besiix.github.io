$(document).ready(function() {
	$('#leftDiv').hover(function() {
		$('#leftCover').fadeTo('slow', 0.2);
	}, function() {
		$('#leftCover').fadeTo('slow', 1.0);
	});

	$('#middleDiv').hover(function() {
		$('#middleCover').fadeTo('slow', 0.2);
	}, function() {
		$('#middleCover').fadeTo('slow', 1.0);
	});

	$('#rightDiv').hover(function() {
		$('#rightCover').fadeTo('slow', 0.2);
	}, function() {
		$('#rightCover').fadeTo('slow', 1.0);
	});

});
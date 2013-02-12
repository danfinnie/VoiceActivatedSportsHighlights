// Examples copied from http://www.adobe.com/devnet/html5/articles/voice-to-drive-the-web-introduction-to-speech-api.html
$(function() {
	var $results = $("#results");
	var $body = $("body");

	$body.on("voice:noise", function() {
		$results.append(" *");
	});

	$body.on("voice:word", function(ev, word) {
		$results.append(" " + word);
	});

	$body.on("voice:word:chair", function(ev, word) {
		$body.css({
			"background-color": "#"+Math.floor(Math.random()*16777215).toString(16)
		});
	});

	$body.on("voice:error", function(ev, err) {
		$results.html(err);
	});

	var stops = {
		'set': 1,
		'hike': 4000,
		'throw': 4001,
		'catch': 2000,
		'blackout': 1500,
		'halftime': 5000
	}

	$('body').on('voice:word', function(ev, word) {
		if(stops.hasOwnProperty(word))
			window.sym.play(stops[word]);
	});
});

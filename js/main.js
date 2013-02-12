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
});

$(function() {
	var SpeechRecognition = window.SpeechRecognition || 
				  window.webkitSpeechRecognition || 
				  window.mozSpeechRecognition || 
				  window.oSpeechRecognition || 
				  window.msSpeechRecognition;

	var $body = $("body");

	if (!SpeechRecognition) {
		$body.trigger("voice:error", ["Please use a browser w/ speech recognition"]);
		return;
	}

	var recognition = new SpeechRecognition();
	recognition.maxAlternatives = 20;
	recognition.continuous = true;
	recognition.interimResults = true;

	recognition.onresult = function(ev) {
		$.each(ev.results[0], function(i, utterance) {
			var str = utterance.transcript.trim().toLowerCase();
			var words = str.split(" ");
			$.each(words, function(j, word) {
				$body.trigger("voice:potential-word", [word]);
			});
			
		});

		recognition.stop();
	};

	// Hash of words to their most recent usages to enable ignoring duplicates that
	// arise.
	// TODO: Garbage collect array elements that lasted are before the timeout.
	var recentWords = {};
	$body.on("voice:potential-word", function(ev, word) {
		var time = new Date().getTime() / 1000;
		var cutoffTime = time - 5;
		if(!recentWords.hasOwnProperty(word) || recentWords[word] < cutoffTime) {
			recentWords[word] = time;
			$body.trigger("voice:word", [word]);
			$body.trigger("voice:word:"+word);
		}
	});

	recognition.onend = function() {
		recognition.start();
	};

	recognition.onsoundstart = function() {
		$body.trigger("voice:noise");
	};

	recognition.start();
});

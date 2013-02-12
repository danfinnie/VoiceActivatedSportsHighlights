// Examples copied from http://www.adobe.com/devnet/html5/articles/voice-to-drive-the-web-introduction-to-speech-api.html
window.setTimeout(function() {
(function($) {
	$(function() {
		var $results = $("#results");
		var $body = $("body");

		$body.on("voice:noise", function() {
			$results.append(" *");
		});

		$body.on("voice:word", function(ev, word) {
			$results.append(" " + word);
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
		recognition.maxAlternatives = 10;
		recognition.continuous = true;
		recognition.interimResults = true;

		// recognition.onaudiostart = function() { $results.text("Starting"); }
		// recognition.onnomatch = function() { $results.text("Could not recognize"); }
		// recognition.onerror = function() { $results.append("err"); recognition.start(); }
		recognition.onresult = function(ev) {
			$.each(ev.results[0], function(i, utterance) {
				var str = utterance.transcript.trim();
				var words = str.split(" ");
				$.each(words, function(j, word) {
					$body.trigger("voice:word", [word]);
				});
				
			});

			recognition.stop();
		};

		recognition.onend = function() {
			recognition.start();
		};

		recognition.onsoundstart = function() {
			$body.trigger("voice:noise");
		};

		recognition.start();
	});
})(jQuery);
}, 5000);

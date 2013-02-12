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

	// Hash of words to their most recent usages to enable ignoring duplicates that
	// arise.
	// TODO: Garbage collect array elements that lasted are before the timeout.
	var recentWords = {};
	function registerPotentialWord(word) {
		var time = new Date().getTime() / 1000;
		var cutoffTime = time - 5;
		if(!recentWords.hasOwnProperty(word) || recentWords[word] < cutoffTime) {
			recentWords[word] = time;
			$body.trigger("voice:word", [word]);
			$body.trigger("voice:word:"+word);
		}
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
				registerPotentialWord(word);
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

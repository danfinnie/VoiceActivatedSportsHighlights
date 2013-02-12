// Examples copied from http://www.adobe.com/devnet/html5/articles/voice-to-drive-the-web-introduction-to-speech-api.html
(function() {
	var SpeechRecognition = window.SpeechRecognition || 
				  window.webkitSpeechRecognition || 
				  window.mozSpeechRecognition || 
				  window.oSpeechRecognition || 
				  window.msSpeechRecognition;

	var $results = $("#results");

	if (!SpeechRecognition) {
		$results.text("Please use a browser w/ speech recognition");
		return;
	}

	var recognition = new SpeechRecognition();
	recognition.maxAlternatives = 10;

	recognition.onaudiostart = function() { $results.text("Starting"); }
	recognition.onnomatch = function() { $results.text("Could not recognize"); }
	recognition.onerror = function() { $results.text("Error"); }
	recognition.onresult = function(ev) {
		if (ev.results.length > 0)
			$results.html(ev.results[0][0].transcript);
	}

	recognition.start();
})();

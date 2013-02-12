// Examples copied from http://www.adobe.com/devnet/html5/articles/voice-to-drive-the-web-introduction-to-speech-api.html
(function() {
	var SpeechRecognition = window.SpeechRecognition || 
				  window.webkitSpeechRecognition || 
				  window.mozSpeechRecognition || 
				  window.oSpeechRecognition || 
				  window.msSpeechRecognition;

	if (SpeechRecognition) {
		var recognition = new SpeechRecognition();
		recognition.maxAlternatives = 5;
	} else {
		$("#results").text("Please use a browser w/ speech recognition");
	}
})();

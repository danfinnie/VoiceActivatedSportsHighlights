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
         
         $('body').one('voice:noise', function() {
         	// 1. get ready
         	// sym.play(1);
         
         	// 2. go
         	// sym.play(1500);
         
         	// 3. throw
         	// sym.play(1500);
         
         	// 4. throw decision
         	// sym.play(4000);
         	
         	// 5. do throw
         	// sym.play(4001);
         
         	// touchdown/catch
         	// sym.play(2000);
         
         	// half-time
         	// sym.play(5000);
         
         	// blackout
         	// sym.play(1500);
         
         });
});

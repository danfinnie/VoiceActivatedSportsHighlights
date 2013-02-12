(function() {
	var params = { allowScriptAccess: "always" };
	var atts = { id: "myytplayer" };
	swfobject.embedSWF("https://www.youtube.com/v/Xfv52SEgCNA?enablejsapi=1&playerapiid=ytplayer&version=3",
		       "ytapiplayer", "425", "356", "8", null, null, params, atts);
})();

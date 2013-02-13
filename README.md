# Voice Activated Sports Highlights

The result of my employer, [noise](http://noisenewyork.com/)'s one-day internal hackathon, this project uses your voice to control a presentation, in this case a sports highlight.  This is a collaborative project between Stephan Alber ([@franci_de](https://twitter.com/franci_de)) and myself.

## Usage

Before I get this hosted somewhere, here are the steps to use this demo:

1. Install a browser with support for the W3 Web Speech API.  As of February 2013, I believe that Google Chrome beta is the only browser with this API.
2. Clone this repository into some web-accessible location.
3. Make your browser always allow microphone access for this demo.  For Google Chrome, this means that you *must* access the page over SSL with a trusted certificate.  If you're on a Mac but running this demo from localhost, generate a self-signed certificate, navigate to the page with Safari and, when the certificate error pops up, click "View Certificate" and select "Always Trust."
4. Load the page in your browser and say the following commands to navigate through the presentation.  We recommend going through in order the first time and then you can jump around, just make sure to say "Blackout" after "Sound":
    1. "Set"
    2. "Hike"
    3. "Halftime"
    4. "Sound" (will play a YouTube video)
    5. "Blackout" (you might need to mute your audio from the YouTube video for this to work)
    6. "Hike"
    7. "Throw"
    8. "Catch"
    9. "Chair" (this is a little easter egg)

## Where's the Code?

Every project has a bunch of files that do nothing and a couple files that do something.  Here are the important files for this project:

### [recognize.js](https://github.com/danfinnie/VoiceActivatedSportsHighlights/blob/master/js/recognize.js)

recognize.js is a wrapper around the Web Speech API that makes it easier to use for the purposes of speaking commands.  It continually listens for audio and fires events when it hears words.  These are the events it fires (all fire on the `body` tag):

* **voice:error** is fired when there was an error activating the Web Speech API (most likely it isn't supported by the current browser) or for other miscalleanous errors.  The first parameter to the event is the reason for the error.
* **voice:noise** is fired when any type of noise above the background level is detected.  This can be used for advancing slides every clap, for instance.  This event has some problems and right now, due to the internals of the Web Speech API, the event will only fire once per recognized utterance (sequence of words).  For instance if you clap three times in a row, only one event will be fired.  If you clap, say a word, and clap again, 2 noise events will be fired.
* **voice:word** is fired when a word is recognized.  The first parameter to the event will be the word that was found.  Note that for every word you actually say, up to 10 of these events will be fired because we pull all possible recognition alternatives from the Web Speech API -- for instance, if you say "throw," events will probably be fired for "thorough", "throw", and "through."  So try and make your commands listen for distinctive words!  Also, because we are using the continual mode of the Web Speech API, recongize.js will ignore repeated instances of a word that happen within 5 seconds of each other.  So don't try for that.
* **voice:word:<word>** (where <word> is the word that was recognized) is fired whenever `voice:word` is fired, but allows the user of the API to write cleaner code instead of subscribing to the `voice:word` event and having an if statement for the word.

### [main.js](https://github.com/danfinnie/VoiceActivatedSportsHighlights/blob/master/js/main.js)

main.js uses the recognize.js API to bind the commands to actions.  We used Adobe Edge to make all of the animations in one big movie, so main.js essentially just sets the time position within that movie.  That mysterious `window.sym` variable is set within an Adobe Edge trigger and is a hack (but this is a hackathon!).

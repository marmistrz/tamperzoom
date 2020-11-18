# Keyboard shortcuts for the Zoom web client using Tampermonkey
Please don't use Zoom unless you have to:
* [Zoom doesn't use proper WebRTC](https://webrtchacks.com/zoom-avoids-using-webrtc/), so VA-API hardware-accelerated decoding doesn't work even if the browser supports it
* [Zoom obscures the fact that (almost) every meeting can be joined using a web browser](https://news.ycombinator.com/item?id=22664751), which is a dark pattern
* Zoom treats the browser client as a second-class citizen (otherwise this userscript wouldn't even be necessary)

Consider self-hosting Jitsi Meet (it's open source!) or using another WebRTC-based videoconferencing solution.

## Installation instructions
1. Install Tampermonkey in your browser and enable access to `file://` URLs.
2. Clone this repository
3. Build the project using: `tsc`
4. Open `dist/tamperzoom.user.js` in your browser to install the script.

Alternatively, you can use the prebuild `user.js` file from the CI artifacts.

## Supported shortcuts
* alt+a: toggle audio
* alt+v: toggle video

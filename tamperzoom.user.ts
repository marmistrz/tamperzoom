// ==UserScript==
// @name         Zoom keyboard shortcuts
// @version      0.1
// @description  Adds keyboard shortcuts to the browser version of Zoom
// @author       Marcin Mielniczuk
// @include      https://*.zoom.us/*
// @include      https://zoom.us/*
// @grant        none
// ==/UserScript==

const clickButton = (classname: string) => {
    const button = document.getElementsByClassName(classname)[0] as HTMLElement;
    button.click();
}

const toggleAudio = () => clickButton('join-audio-container');
const toggleVideo = () => clickButton('send-video-container');

document.addEventListener('keydown', e => {
    if (!e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
        if (e.key == 'a') {
            toggleAudio();
        } else if (e.key == 'v') {
            toggleVideo();
        }
    }
}, false);

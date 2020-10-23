// ==UserScript==
// @name         Zoom keyboard shortcuts
// @version      0.1
// @description  Adds keyboard shortcuts to the browser version of Zoom
// @author       Marcin Mielniczuk
// @include      https://*.zoom.us/*
// @include      https://zoom.us/*
// @grant        none
// ==/UserScript==

const getFirstElementByClassName = (classname: string): HTMLElement | undefined => {
    return document.getElementsByClassName(classname)[0] as HTMLElement;
}

const clickButton = (classname: string) => {
    const button = getFirstElementByClassName(classname);
    button?.click();
}

const showToolbar = () => {
    const footer = getFirstElementByClassName('footer');
    footer!!.className = 'footer';
}

const toggleAudio = () => clickButton('join-audio-container__btn');
const toggleVideo = () => clickButton('send-video-container__btn');

document.addEventListener('keydown', e => {
    if (!e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
        if (e.key == 'a') {
            toggleAudio();
            showToolbar();
        } else if (e.key == 'v') {
            toggleVideo();
            showToolbar();
        }
    }
}, false);

import { refs } from "./refs.js";

export function setProgres() {
    console.log(refs.audio.currentTime)
    const time = refs.audio.currentTime;
console.log(time)
    const oneSecondInPx = refs.crossbar.clientWidth / refs.audio.duration;
    const fillWidth = (time * oneSecondInPx) / (refs.crossbar.clientWidth / 100);

    setTime(time, refs.start)
    refs.progress.style.width = `${fillWidth}%`;
    
}

export function setTime(time, elem){
    // console.log(time);
    const second = String(Math.floor(time % 60)).padStart(2, "0");
    const minute = String(Math.floor(time / 60), -1); 
    elem.textContent = `${minute}:${second}`;
}
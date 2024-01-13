import { refs } from "./refs.js";
import { next } from "./changeAudio.js";

export function setProgres() {
    const time = refs.audio.currentTime;
    const oneSecondInPx = refs.crossbar.clientWidth / refs.audio.duration;
    const fillWidth = (time * oneSecondInPx) / (refs.crossbar.clientWidth / 100);

    setTime(time, refs.start)
    refs.progress.style.width = `${fillWidth}%`;

}

export function setTime(time, elem) {
    const second = String(Math.floor(time % 60, 1)).padStart(2, "0");
    const minute = String(Math.floor(time / 60, -1));
    elem.textContent = `${minute}:${second}`;
}

export function updateTime(e) {
    if (refs.audio.currentTime == refs.audio.duration) {
        refs.audio.classList.remove("active");
        refs.btns.querySelector(".btn-js").textContent = "Play";
        refs.audio.pause();
        next()
    }
    setProgres();
}

export function changeCurrentTime(e) {
    if (!refs.audio.classList.contains("active")) {
        refs.audio.classList.add("active");
        refs.btns.querySelector(".btn-js").textContent = "Pause";
        refs.audio.play();
    }
    const left = e.target.getBoundingClientRect().left;
    const x = e.clientX;
    const width = x - left;
    refs.progress.style.width = `${width}px`;
    const oneSecondInPx = refs.crossbar.clientWidth / refs.audio.duration;
    const time = width / oneSecondInPx;
    refs.audio.currentTime = time;
}

import { refs } from "./refs.js";

export function setProgres() {
    const time = refs.audio.currentTime;
    const oneSecondInPx = refs.crossbar.clientWidth / refs.audio.duration;
    const fillWidth = (time * oneSecondInPx) / (refs.crossbar.clientWidth / 100);

    setTime(time, refs.start)
    refs.progress.style.width = `${fillWidth}%`;

}

export function setTime(time, elem) {
    const second = String(Math.floor(time % 60)).padStart(2, "0");
    const minute = String(Math.floor(time / 60), -1);
    elem.textContent = `${minute}:${second}`;
}

export function updateTime(e) {
    if (refs.audio.currentTime == refs.audio.duration) {
        refs.audio.classList.remove("active");
        e.target.parentNode.querySelector(".btn-js").textContent = "Play";
        refs.audio.pause();
    }
    setProgres();
}


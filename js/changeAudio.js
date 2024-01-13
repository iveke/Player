import { refs } from "./refs.js";
import { musics } from "./script.js";
import { setTime, setProgres } from "./time.js";
import { startAudio } from "./startAudio.js";
import { checkActive } from "./script.js";

let lastActiveMusicId = 0;


export function next() {
    checkActive();
    for (let i = 0; i < musics.length; i++) {
        if (refs.audio.dataset.id == musics[i].id) {
            if (i + 1 != musics.length) {
                changeMusic(musics[i + 1])
                return;
            }
            changeMusic(musics[0])
        }
    }
}

export function prev() {
    checkActive();

    for (let i = 0; i < musics.length; i++) {
        if (refs.audio.dataset.id == musics[i].id) {
            if (i == 0) {
                const l = musics.length - 1;
                changeMusic(musics[l])
                return;
            }
            changeMusic(musics[i - 1]);
        }
    }
}

export function chooseMusic(e) {
    const selectElem = e.target;
    if (!selectElem.classList.contains("music")) {
        return;
    }
    if (refs.audio.dataset.id == selectElem.id) {
        startAudio(refs.btns.querySelector(".btn-js"));
        return;
    }
    checkActive();

    for (let i = 0; i < musics.length; i++) {
        if (musics[i].id == selectElem.id) {
            changeMusic(musics[i]);
            break;
        }
    }
}

export function updateAudio(e) {
    setProgres();
    startAudio(refs.btns.querySelector(".btn-js"));
    setTime(e.target.duration, refs.finish);

    if (lastActiveMusicId != 0) {
        document.getElementById(lastActiveMusicId).classList.remove("activeMusic");
    }
    musics.forEach(elem => {
        if (refs.audio.dataset.id == elem.id) {
            const musa = document.getElementById(elem.id);
            musa.classList.add("activeMusic");
            lastActiveMusicId = elem.id;
        }
    })
}
export function changeMusic(elem) {
    refs.audio.src = elem.src;
    refs.image.src = elem.image;
    refs.name.textContent = elem.name;
    refs.audio.dataset.id = elem.id;
}
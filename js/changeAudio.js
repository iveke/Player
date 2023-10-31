import { refs } from "./refs.js";
import { music } from "./script.js";

export function next(e) {
    if (refs.audio.classList.contains("active")) {
        refs.audio.pause();
        refs.audio.classList.remove("active");
        e.currentTarget.querySelector(".btn-js").textContent = "Play";
    }

    for (let i = 0; i < music.length; i++) {
        if (refs.name.textContent == music[i].name) {
            if (i + 1 != music.length) {
                refs.audio.src = music[i + 1].src;
                refs.image.src = music[i + 1].image;
                refs.name.textContent = music[i + 1].name;
                return;
            }
            refs.audio.src = music[0].src;
            refs.image.src = music[0].image;
            refs.name.textContent = music[0].name;
        }
    }
}

export function prev(e) {
    if (refs.audio.classList.contains("active")) {
        refs.audio.pause();
        refs.audio.classList.remove("active");
        e.currentTarget.querySelector(".btn-js").textContent = "Play";
    }

    for (let i = 0; i < music.length; i++) {
        if (refs.name.textContent == music[i].name) {
            if (i == 0) {
                const l = music.length - 1;
                refs.audio.src = music[l].src;
                refs.image.src = music[l].image;
                refs.name.textContent = music[l].name;
                return;
            }
            refs.audio.src = music[i - 1].src;
            refs.image.src = music[i - 1].image;
            refs.name.textContent = music[i - 1].name;
        }
    }
}
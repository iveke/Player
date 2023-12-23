import { refs } from "./refs.js";
import { musics } from "./script.js";
import { setTime, setProgres } from "./time.js";
import { startAudio } from "./startAudio.js";

export function next() {
    if (refs.audio.classList.contains("active")) {
        refs.audio.pause();
        refs.audio.classList.remove("active");
    }
    for (let i = 0; i < musics.length; i++) {
        if (refs.name.textContent == musics[i].name) {
            if (i + 1 != musics.length) {
                refs.audio.src = musics[i + 1].src;
                refs.image.src = musics[i + 1].image;
                refs.name.textContent = musics[i + 1].name;
                return;
            }
            refs.audio.src = musics[0].src;
            refs.image.src = musics[0].image;
            refs.name.textContent = musics[0].name;
        }
    }
}

export function prev() {
    if (refs.audio.classList.contains("active")) {
        refs.audio.pause();
        refs.audio.classList.remove("active");
    }

    for (let i = 0; i < musics.length; i++) {
        if (refs.name.textContent == musics[i].name) {
            if (i == 0) {
                const l = musics.length - 1;
                refs.audio.src = musics[l].src;
                refs.image.src = musics[l].image;
                refs.name.textContent = musics[l].name;
                return;
            }
            refs.audio.src = musics[i - 1].src;
            refs.image.src = musics[i - 1].image;
            refs.name.textContent = musics[i - 1].name;
        }
    }
}
//доробити функціонаю коли якась музика активна щоб і в плейлисту цей трек позначався як активний типу іншим кольором
export function updateAudio(e){
    setProgres();
    const btn = e.target.parentNode.querySelector(".btn-js");
    startAudio(btn);
    setTime(e.target.duration, refs.finish);
musics.forEach(elem => {
if(elem.src == e.target.getAttribute("src")){
const musiclist = refs.list.getElementById(`${elem.id}`);
console.log(musiclist);
}
})
}
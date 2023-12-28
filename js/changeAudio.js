import { refs } from "./refs.js";
import { musics } from "./script.js";
import { setTime, setProgres } from "./time.js";
import { startAudio } from "./startAudio.js";
import { changeMusic } from "./script.js";
let lastActiveMusicId = 0;


export function next() {
    if (refs.audio.classList.contains("active")) {
        refs.audio.pause();
        refs.audio.classList.remove("active");
    }
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
    if (refs.audio.classList.contains("active")) {
        refs.audio.pause();
        refs.audio.classList.remove("active");
    }

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
//доробити функціонаю коли якась музика активна щоб і в плейлисту цей трек позначався як активний типу іншим кольором
export function updateAudio(e){
    setProgres();
    const btn = e.target.parentNode.querySelector(".btn-js");
    startAudio(btn);
    setTime(e.target.duration, refs.finish);
    
    if(lastActiveMusicId != 0){
        document.getElementById(lastActiveMusicId).classList.remove("activeMusic");
    }
   
    musics.forEach(elem => {
    if(refs.audio.dataset.id == elem.id){
        const musa = document.getElementById(elem.id);
        musa.classList.add("activeMusic");
        lastActiveMusicId = elem.id;
    }
    })
}
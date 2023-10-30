import { setProgres } from "./time.js";
import { refs } from "./refs.js";

let intervalID;


export function startAudio(e){
  console.log(refs.audio.duration)
    if (!refs.audio.classList.contains("active")) {
      refs.audio.classList.add("active");
      e.target.textContent = "Pause"
      refs.audio.play();
      intervalID = setInterval(() => {
        if (refs.audio.currentTime == refs.audio.duration) {
          clearInterval(intervalID);
          refs.audio.classList.remove("active");
          e.target.textContent = "Play"
          refs.audio.pause();
        }
  
        setProgres();
      }, 1000);
      return;
    }
    refs.audio.classList.remove("active");
    refs.audio.pause();
    setProgres();
    clearInterval(intervalID);
    e.target.textContent = "Play";
  }
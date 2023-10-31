import { refs } from "./refs.js";

export function startAudio(e){
    if (!refs.audio.classList.contains("active")) {
      refs.audio.classList.add("active");
      e.target.textContent = "Pause"
      refs.audio.play();
      return;
    }
    refs.audio.classList.remove("active");
    refs.audio.pause();
    e.target.textContent = "Play";
  }
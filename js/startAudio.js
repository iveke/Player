import { refs } from "./refs.js";

export function startAudio(btn){
    if (!refs.audio.classList.contains("active")) {
      refs.audio.classList.add("active");
      btn.textContent = "Pause";
      refs.audio.play();
      return;
    }
    refs.audio.classList.remove("active");
    refs.audio.pause();
    btn.textContent = "Play";
  }
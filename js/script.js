import { refs } from "./refs.js";
import { startAudio } from "./startAudio.js";
import { setTime, updateTime } from "./time.js";
import { next, prev } from "./changeAudio.js";

export const music = [
  {
    id: 1,
    image: "./image/dobrij-ranok-chorna-700x700.jpg",
    src: "./audio/Ukraine.mp3",
    name: "Добрий ранок, Україно",
  },
  {
    id: 2,
    image: "./image/Без названия.jpg",
    src: "./audio/Daylight.mp3",
    name: "DayLight",
  },
  {
    id: 3,
    image: "./image/maxresdefault.jpg",
    src: "./audio/Stronger.mp3",
    name: "Stronger",
  },
];

refs.btns.addEventListener("click", click);
refs.audio.addEventListener("timeupdate", updateTime);
refs.audio.addEventListener("loadeddata", (e)=>{
  setTime(e.target.duration, refs.finish);
});


function click(e) {
  if (e.target.classList.contains("btn-js")) {
    return startAudio(e);
  }
  if (e.target.classList.contains("next")) {
    return next(e);
  }
  if (e.target.classList.contains("prev")) {
    return prev(e);
  }
  return;
}

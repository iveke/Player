import { refs } from "./refs.js";
import { startAudio } from "./startAudio.js";
import {setProgres, updateTime} from "./time.js"
import { next, prev, updateAudio } from "./changeAudio.js";

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
refs.audio.addEventListener("loadeddata", updateAudio);
refs.crossbar.addEventListener("click", changeCurrentTime);

function changeCurrentTime(e){
  if(!refs.audio.classList.contains("active")){
    refs.audio.classList.add("active");
    refs.btns.querySelector(".btn-js").textContent = "Pause";
    refs.audio.play();
  }
const left = e.target.getBoundingClientRect().left;
const x = e.clientX;
const width = x - left;
refs.progress.style.width = `${width}px`
const oneSecondInPx = refs.crossbar.clientWidth / refs.audio.duration;
const time = width / oneSecondInPx;
refs.audio.currentTime = time;
}


function click(e) {
  if (e.target.classList.contains("btn-js")) {
    return startAudio(e.target);
  }
  if (e.target.classList.contains("next")) {
    return next(e);
  }
  if (e.target.classList.contains("prev")) {
    return prev(e);
  }
  return;
}

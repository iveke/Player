import { refs } from "./refs.js";
import { startAudio } from "./startAudio.js";
import { setTime } from "./time.js";

const song1 = {
  id: 1,
  image: "./image/dobrij-ranok-chorna-700x700.jpg",
  src: "./audio/Нумер 482 - Добрий ранок, Україно.mp3",
  name: "Добрий ранок, Україно"
}
const song2 = {
  id: 2,
  image: "./image/Без названия.jpg",
  src: "./audio/david-kushner-daylight.mp3",
  name: "DayLight"
}
const song3 = {
  id: 3,
  image: "./image/maxresdefault.jpg",
  src: "./audio/Kanye West Stronger.mp3",
  name: "Stronger"
}

const music = [song1, song2, song3];

refs.btns.addEventListener("click", click);

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


function next(e) {
  if (refs.audio.classList.contains("active")) {
    refs.audio.pause();
    refs.audio.classList.remove("active");
    e.currentTarget.querySelector(".btn-js").textContent = "Play";
  }
  
  console.log(refs.audio.duration);
  console.log(refs.audio);
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
  setTime(refs.audio.duration, refs.finish)
  console.log(String(refs.audio.duration))
  console.dir(refs.audio)

}

function prev(e) {
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
        setTime(refs.audio.duration, refs.finish);
        return;
      }
      refs.audio.src = music[i - 1].src;
      refs.image.src = music[i - 1].image;
      refs.name.textContent = music[i - 1].name;
      
      setTime(refs.audio.duration, refs.finish);
    }
  }


}

import { refs } from "./refs.js";
import { startAudio } from "./startAudio.js";
import { updateTime, changeCurrentTime } from "./time.js";
import { next, prev, updateAudio } from "./changeAudio.js";
import { chooseMusic, changeMusic } from "./changeAudio.js";

export const musics = [
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
  {
    id: 4,
    image: "./image/moulaga.jpg",
    src: "./audio/Moulaga.mp3",
    name: "Moulaga"
  },
  {
    id: 5,
    image: "./image/JingleBellsUa.jpg",
    src: "./audio/JingleBells.mp3",
    name: "JingleBellsUa"
  }
];

document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowRight") {
    return next();
  }
  if (e.code == "ArrowLeft") {
    return prev();
  }
});
window.addEventListener("load", addMusicInList(musics));
refs.btns.addEventListener("click", click);
refs.audio.addEventListener("timeupdate", updateTime);
refs.audio.addEventListener("loadeddata", updateAudio);
refs.crossbar.addEventListener("click", changeCurrentTime);
refs.list.addEventListener("click", chooseMusic);
refs.searchBtn.addEventListener("click", searchMusic);
refs.burgemenu.addEventListener("click", (e) => {
  if (refs.navbar.classList.contains("unvisible")) {
    refs.navbar.classList.remove("unvisible");
  } else {
    refs.navbar.classList.add("unvisible");
  }

})


function searchMusic() {
  const value = refs.search.value;
  musics.forEach(elem => {
    if (elem.name == value) {
      changeMusic(elem);
    }

  })
}


export function checkActive() {
  if (refs.audio.classList.contains("active")) {
    refs.audio.pause();
    refs.audio.classList.remove("active");
  }
}



function addMusicInList(musics) {
  const musicList = [];
  musics.forEach(elem => {
    const music = `<li class="music" id="${elem.id}">
<img class="imgList" src="${elem.image}" alt="">
 <p class="nameList">${elem.name}</p>
 </li>`;
    musicList.push(music);
  });
  refs.list.insertAdjacentHTML("beforeend", musicList.join(""));
}



function click(e) {
  const elem = e.target;
  if (elem.classList.contains("btn-js")) {
    return startAudio(elem);
  }
  if (elem.classList.contains("next")) {
    return next();
  }
  if (elem.classList.contains("prev")) {
    return prev();
  }
  return;
}

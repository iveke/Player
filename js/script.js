import { refs } from "./refs.js";
import { startAudio } from "./startAudio.js";
import { updateTime, changeCurrentTime } from "./time.js";
import { next, prev, updateAudio } from "./changeAudio.js";

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
];

document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowRight") {
    return next();
  }
  if (e.code == "ArrowLeft") {
    return prev();
  }
});
document.addEventListener("load", addMusicInList(musics));
refs.btns.addEventListener("click", click);
refs.audio.addEventListener("timeupdate", updateTime);
refs.audio.addEventListener("loadeddata", updateAudio);
refs.crossbar.addEventListener("click", changeCurrentTime);
refs.list.addEventListener("click", chooseMusic);
refs.searchBtn.addEventListener("click", searchMusic);


function searchMusic() {
  const value = refs.search.value;
  musics.forEach(elem => {
    if (elem.name == value) {
      console.log(elem.name);

    }

  })
}


function chooseMusic(e) {
  const selectElem = e.target;
  if (!selectElem.classList.contains("music")) {
    return;
  }
  if (refs.audio.dataset.id == selectElem.id) {
    startAudio(refs.btns.querySelector(".btn-js"));
    return;
  }
  if (refs.audio.classList.contains("active")) {
    refs.audio.pause();
    refs.audio.classList.remove("active");
  }

  for (let i = 0; i < musics.length; i++) {
    if (musics[i].id == selectElem.id) {
      changeMusic(musics[i]);
      break;
    }
  }
}

 export function changeMusic(elem) {
  refs.audio.src = elem.src;
  refs.image.src = elem.image;
  refs.name.textContent = elem.name;
  refs.audio.dataset.id = elem.id;
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

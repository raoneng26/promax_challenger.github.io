const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});

const containers = document.querySelectorAll(".containers");

containers.forEach((container) => {
  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - container.offsetLeft;
    const step = (x - startX) * 0.6;
    container.scrollLeft = scrollLeft - step;
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
  });

  container.addEventListener("mouseleave", () => {
    isDragging = false;
  });
});

const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const rotatingImage = document.getElementById("rotatingImage");
const songName = document.querySelector(".music-player h2");
const artistName = document.querySelector(".music-player p");

let rotating = false;
let currentRotation = 0;
let rotationInterval;

const songs = [
  {
    title: "Redemption",
    name: "Besomorph & Coopex",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Besomorph-Coopex-Redemption.mp3",
    cover:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/398875d0-9b9e-494a-8906-210aa3f777e0",
  },
  {
    title: "What's The Problem?",
    name: "OSKI",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/OSKI-Whats-The-Problem.mp3",
    cover:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/810d1ddc-1168-4990-8d43-a0ffee21fb8c",
  },
  {
    title: "Control",
    name: "Unknown Brain x Rival",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Unknown-BrainxRival-Control.mp3",
    cover:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7bd23b84-d9b0-4604-a7e3-872157a37b61",
  },
];

let currentSongIndex = 0;

function startRotation() {
  if (!rotating) {
    rotating = true;
    rotationInterval = setInterval(rotateImage, 50);
  }
}

function pauseRotation() {
  clearInterval(rotationInterval);
  rotating = false;
}

function rotateImage() {
  currentRotation += 1;
  rotatingImage.style.transform = `rotate(${currentRotation}deg)`;
}

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;
  rotatingImage.src = songs[currentSongIndex].cover;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

song.addEventListener("ended", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

function playPause() {
  if (song.paused) {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
    startRotation();
  } else {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
    pauseRotation();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
  startRotation();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  speed: 600,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 120,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
   on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

window.onload = function () {
  let timer = setInterval(get_next, 3000)
  let sz = new Array();
  let szdiv = new Array()
  var cur_ul = document.getElementById("banner");
  for (let i = 1; i <= 5; i++) {
      var cur_li = document.createElement("li");
      var cur_img = document.createElement("img");

      cur_img.src = "img/banner/" + i + ".jpg";
      cur_img.style.width = "500px";
      cur_img.style.height = "230px";
      cur_img.style.borderRadius = "10px";
      cur_img.style.margin = "-20px";
      cur_img.style.marginLeft = "-50px";
      cur_img.style.background = "#fff";
      cur_img.style.boxShadow = "-4px -4px 12px rgb(255, 255, 255),4px 4px 12px rgba(121, 130, 160, 0.747)";
      cur_img.style.border = "5px solid var(--bg)";
      cur_li.appendChild(cur_img);
      cur_li.onmouseenter = function () {
          clearInterval(timer);
      }
      cur_li.onmouseleave = function () {
          timer = setInterval(get_next, 3000)
      }

      if (i != 5) {
          cur_li.id = 5 - i;
      } else {
          cur_li.id = 5;
      }

      cur_ul.appendChild(cur_li)
      sz.push(cur_li);
      sz[sz.length - 1].style.left = "0px";
      let bottom_div = document.createElement("div");
      bottom_div.style.left = 20 * i + "px";
      bottom_div.style.marginLeft = "340px";
      bottom_div.style.border = "3.5px solid var(--bg)";
      bottom_div.name = i;
      szdiv.push(bottom_div)
      cur_ul.appendChild(bottom_div);

  }

  let pre_img = document.createElement("img")
  pre_img.src = "img/preImg.png";
  pre_img.style.position = "absolute";
  pre_img.style.left = "-50px";
  pre_img.style.width = "20px";
  pre_img.style.top = 0;
  pre_img.style.top = 0;
  pre_img.style.bottom = 0;
  pre_img.style.margin = "auto"
  pre_img.style.zIndex = 10;
  cur_ul.appendChild(pre_img);

  let nex_img = document.createElement("img")
  nex_img.src = "img/nexImg.png";
  nex_img.style.position = "absolute";
  nex_img.style.right = "-50px";
  nex_img.style.width = "20px";
  nex_img.style.top = 0;
  nex_img.style.bottom = 0;
  nex_img.style.margin = "auto"
  nex_img.style.zIndex = 10;
  cur_ul.appendChild(nex_img);

  pre_img.onclick = function () {
      clearInterval(timer);
      get_pre();
      timer = setInterval(get_next, 3000)
  }

  nex_img.onclick = function () {
      clearInterval(timer);
      get_next();
      timer = setInterval(get_next, 3000)
  }


  let len = sz.length - 1;
  sz[len - 2].style.left = "-80px";
  sz[len - 1].style.zIndex = 10;
  sz[len - 1].style.left = "200px";
  sz[len - 1].style.transform = "scale(1.3)";
  sz[len].style.left = "480px";

  szdiv[0].style.background = "#e431fc"

  for (let i = 0; i < szdiv.length; i++) {
      szdiv[i].onmouseenter = function () {
          clearInterval(timer);
          let len1 = sz[len - 1].id;
          let len2 = szdiv[i].name;
          let dis = Math.max(len1, len2) - Math.min(len1, len2)
          if (len1 > len2) {
              while (dis--)
                  get_pre()
          } else {
              while (dis--)
                  get_next()
          }
          timer = setInterval(get_next,3000)
      }
  }


  function get_pre() {
      let give_up = sz[0];
      sz.shift()
      sz.push(give_up)
      for (let i = 0; i < sz.length; i++) {
          sz[i].style.zIndex = i;
          sz[i].style.transform = "scale(1)"

      }
      sz[len - 2].style.left = "-80px";
      sz[len - 1].style.zIndex = 10
      sz[len - 1].style.left = "200px";
      sz[len - 1].style.transform = "scale(1.3)"
      sz[len - 1].style.opacity = 1;
      sz[len].style.left = "480px";

      sync_szdiv()

  }

  function get_next() {
      let give_up = sz[len];
      sz.pop()
      sz.unshift(give_up)
      for (let i = 0; i < sz.length; i++) {
          sz[i].style.zIndex = i;
          sz[i].style.transform = "scale(1)"

      }
      sz[len - 2].style.left = "-80px";
      sz[len - 1].style.zIndex = 10
      sz[len - 1].style.left = "200px";
      sz[len - 1].style.transform = "scale(1.3)"
      sz[len - 1].style.opacity = 1;
      sz[len].style.left = "480px";
      sync_szdiv()


  }


  function sync_szdiv() {
      for (let i = 0; i < szdiv.length; i++) {
          if (szdiv[i].name == sz[len - 1].id)
              szdiv[i].style.background = "#e431fc"
          else
              szdiv[i].style.background = "white"
      }
  }


}
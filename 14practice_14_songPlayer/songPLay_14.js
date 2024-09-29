let songDetail = [
  {
    songLoc: "PlayList/AKHIYAN.mp3",
    img: "https://plus.unsplash.com/premium_photo-1668638806052-4544af05f648?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "AKHIYAN STARBOY X",
    artist: "Artist/Lyricist/Composer: Harkirat Sangha",
  },
  {
    songLoc: "PlayList/Cheques.mp3",
    img: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "Cheques,Punjabi Beats Song",
    artist: " Shubh From Canada",
  },
  {
    songLoc: "PlayList/SOFTLY.mp3",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "SOFTLY Punjabi Beats Song",
    artist: "Rockstart Karan Aujla From India",
  },
  {
    songLoc: "PlayList/TuJoMileya.mp3",
    img: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "Punjabi Romantic Lover Song",
    artist: "Punjabi Singer Desii Singh",
  },
  {
    songLoc: "PlayList/Filter_GulabSidhu.mp3",
    img: "https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "SOFTLY Punjabi Beats Song",
    artist: "Rockstart Gulab Sidhu From India",
  },
  {
    songLoc: "PlayList/CALIFORNIA_GurSidhu.mp3",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    detail: "Punjabi Beats/Mashupss Song",
    artist: "Singer/Writer/Artist: Gur Sidhu",
  },
  {
    songLoc: "PlayList/ChandSifarish.mp3",
    img: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    detail: "Hindi Romantic/Mashupss Song",
    artist: "Singer/Writer/Artist: Amir Khan",
  },
];

let progress = document.querySelector(".progress");
let song = document.querySelector(".song");
let songSource = document.querySelector(".song source");
let playIcon = document.querySelector("#large");
let songPlaylist = document.querySelector(".playList-cont");
let menuIcon = document.querySelector("#menu");
let home = document.querySelector(".home");
let songImg = document.querySelector(".center img");
let songDet = document.querySelector(".center h2");
let songArtist = document.querySelector(".center h4");

console.log(songDet);

let currentSongIndex = 0;
let audio = new Audio(songDetail[currentSongIndex].songLoc);

// function for Next Song when one is completed
function playNextSong() {
  currentSongIndex++;
  if (currentSongIndex < songDetail.length) {
    songImg.src = songDetail[currentSongIndex].img;
    songDet.innerHTML = songDetail[currentSongIndex].detail;
    songArtist.innerHTML = songDetail[currentSongIndex].artist;
    audio.src = songDetail[currentSongIndex].songLoc;
    audio.play();
  } else {
    currentSongIndex = 0;
    songImg.src = songDetail[currentSongIndex].img;
    songDet.innerHTML = songDetail[currentSongIndex].detail;
    songArtist.innerHTML = songDetail[currentSongIndex].artist;
    audio.src = songDetail[currentSongIndex].songLoc;
    audio.play();
  }
}
// function to play a new song on button click
function playPause() {
  if (playIcon.classList.contains("ri-pause-circle-line")) {
    audio.pause();
    playIcon.classList.remove("ri-pause-circle-line");
    playIcon.classList.add("ri-play-large-fill");
  } else {
    audio.play();
    playIcon.classList.remove("ri-play-large-fill");
    playIcon.classList.add("ri-pause-circle-line");
  }
}
// time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  return `${formattedMinutes}:${formattedSeconds}`;
}

audio.addEventListener("timeupdate", function () {
  document.querySelector(".footer p").innerHTML = formatTime(audio.currentTime);
});

document.querySelector(".footer p").innerHTML = formatTime(audio.currentTime);

// event handler for function call to play next song
audio.addEventListener("ended", playNextSong);
// function to update progress bar according to song duration
audio.addEventListener("timeupdate", function () {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
});
// function to update the time of song when progresss bar moves
progress.onchange = function () {
  audio.play();
  audio.currentTime = progress.value;
  playIcon.classList.remove("ri-play-large-fill");
  playIcon.classList.add("ri-pause-circle-line");
};

// function to jump time frame
function moveright() {
  // console.log(Math.round(audio.currentTime));
  audio.currentTime = Math.round(audio.currentTime) + 10;
}
function moveleft() {
  // console.log(Math.round(audio.currentTime));
  audio.currentTime = Math.round(audio.currentTime) - 10;
}
menuIcon.addEventListener("click", function () {
  home.style.display = "none";
  songPlaylist.style.display = "flex";
});
function closeIcon() {
  home.style.display = "block";
  songPlaylist.style.display = "none";
  console.log("hello");
}
songDetail.forEach(function (index) {
  let playList = document.createElement("div");
  playList.classList.add("playList");
  let img = document.createElement("img");
  img.src = index.img;
  let detail = document.createElement("div");
  detail.classList.add("detail");
  let h2 = document.createElement("h2");
  h2.classList.add("h2");
  h2.innerHTML = index.detail;
  let h4 = document.createElement("h4");
  h4.classList.add("h4");
  h4.innerHTML = index.artist;
  let crossIcon = document.createElement("i");
  crossIcon.classList.add("ri-play-large-fill");
  detail.appendChild(h2);
  detail.appendChild(h4);
  playList.appendChild(img);
  playList.appendChild(detail);
  playList.appendChild(crossIcon);
  songPlaylist.appendChild(playList);

  console.log(h4);
  playList.addEventListener("click", function (e) {
    console.log(index);
    songImg.src = index.img;
    songDet.innerHTML = index.detail;
    songArtist.innerHTML = index.artist;
    audio.src = index.songLoc;
    audio.play();
    home.style.display = "block";
    songPlaylist.style.display = "none";
    playIcon.classList.remove("ri-play-large-fill");
    playIcon.classList.add("ri-pause-circle-line");
  });
  audio.addEventListener("ended", playNextSong);
});

var hamburguer = document.querySelector(".hamburguer");
 
hamburguer.addEventListener("click", function(){
     document.querySelector(".container").classList.toggle("show-menu");
});


const novoSong = document.getElementById('novo')
const novoSong1 = document.getElementById('novo1')
const novoSong2 = document.getElementById('novo2')
const novoSong3 = document.getElementById('novo3')


function img01 (){
  document.getElementById("cover").src="../../imagens/michael.jpg"
  novoSong.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/billieJean.mp3"
}
function img02 (){
  document.getElementById("cover").src="../../imagens/beethoven.jpg"
  novoSong1.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo1')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/moonlight.mp3"
}
function img03 (){
  document.getElementById("cover").src="../../imagens/Mozart.jpg"
  novoSong2.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo2')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/requiem.mp3"
}
function img04 (){
  document.getElementById("cover").src="../../imagens/pavarotti.jpg"
  novoSong3.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo3')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/nessunDorma.mp3"
}
function img05 (){
  document.getElementById("cover").src="../../imagens/joseph.jpg"
}




const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
 
const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title')
const cover = document.getElementById('cover');
 
 
const song = ['nessun', 'nessun', 'ukulele'];
let songIndex = 2;
 
 
function loadSong(song) {
  title.innerText = song;
  audio.src = `musicas/${song}.mp3`
  cover.src = `imagens/${song}.jpg`
}
 
function nextSong(song) {
    title.innerText = song;
    audio.src = `musicas/${song[song.length + 1]}.mp3`
    cover.src = `imagens/${song}.jpg`
    song++;
  }
 
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
 
  audio.play();
}
 
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
 
  audio.pause();
}
 
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`
}
 
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
 
  audio.currentTime = (clickX / width) * duration
}
 
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')
 
  if(isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})
 
 
 
nextBtn.addEventListener('click', () => {
    const isNext = musicContainer.classList.contains('next')
   
    if(isNext) {
      nextSong()
    } else {
      playSong()
    }
  })
 
audio.addEventListener('timeupdate', updateProgress)
 
progressContainer.addEventListener('click', setProgress)

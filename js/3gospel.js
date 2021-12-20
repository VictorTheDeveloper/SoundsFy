const novoSong = document.getElementById('novo')
const novoSong1 = document.getElementById('novo1')
const novoSong2 = document.getElementById('novo2')
const novoSong3 = document.getElementById('novo3')


function img01 (){
  document.getElementById("cover").src="../../imagens/leonardoFT.jpg"
  novoSong.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/bondade.mp3"
}
function img02 (){
  document.getElementById("cover").src="../../imagens/barukFT.jpg"
  novoSong1.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo1')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/teuAmorNaoFalha.mp3"
}
function img03 (){
  document.getElementById("cover").src="../../imagens/jottaA.jpg"
  novoSong2.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo2')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/Descansarei.mp3"
}
function img04 (){
  document.getElementById("cover").src="../../imagens/julianoSon.jpg"
  novoSong3.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo3')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/nuncaMeDeixou.mp3"
}
function img05 (){
  document.getElementById("cover").src="../../imagens/fernandinhoFT.jpg"
  novoSong3.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo4')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/aindaQueAFigueira.mp3"
}
function img06 (){
  document.getElementById("cover").src="../../imagens/chrisQ.jpg"
  novoSong3.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo5')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/yourLoveNeverFails.mp3"
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

var hamburguer = document.querySelector(".hamburguer");
 
hamburguer.addEventListener("click", function(){
     document.querySelector(".container").classList.toggle("show-menu");
});


const novoSong = document.getElementById('novo')
const novoSong1 = document.getElementById('novo1')
const novoSong2 = document.getElementById('novo2')
const novoSong3 = document.getElementById('novo3')
 
 
function img01 (){
  document.getElementById("cover").src="../../imagens/hbFT.jpg"
  novoSong.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/holySecret.mp3"
}
function img02 (){
  document.getElementById("cover").src="../../imagens/lifehouse.jpg"
  novoSong1.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo1')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/Storm.mp3"
}
function img03 (){
  document.getElementById("cover").src="../../imagens/bloodG.jpg"
  novoSong2.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo2')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/topOfTheMountain.mp3"
}
function img04 (){
  document.getElementById("cover").src="../../imagens/flyleaf.jpg"
  novoSong3.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo3')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/allAroundMe.mp3"
}
function img05 (){
  document.getElementById("cover").src="../../imagens/stryper.jpg"
  novoSong3.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo4')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/honestly.mp3"
}
function img06 (){
  document.getElementById("cover").src="../../imagens/skilletFT.jpg"
  novoSong3.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo5')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/awakeAndAlive.mp3"
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
 

/*
const controlContainer = document.querySelector('.controls-container');
const leftSideControls = document.querySelector('.left-side-controls');

const fullVolumeButton = volumeButton.querySelector('.full-volume');
const halfVolumeButton = volumeButton.querySelector('.half-volume');
const mutedButton = volumeButton.querySelector('.muted');
const volumeButton = document.querySelector('.volume-btn');

halfVolumeButton.style.display = 'none';
mutedButton.style.display = 'none';

const volumeControl = document.querySelector('.volume-control');
const volumePanel = document.querySelector('.volume-panel');
const volumeRange = volumePanel.querySelector('input');
const volumeProgress = volumePanel.querySelector('.volume-progress');



volumeButton.addEventListener('click', toggleMute);

volumeRange.addEventListener('input', function(e) {
  volumeProgress.style.width = volumeRange.value + '%';

  video.volume = volumeRange.value / 100;

  if (volumeRange.value <= 0) {
      fullVolumeButton.style.display = 'none';
      halfVolumeButton.style.display = 'none';
      mutedButton.style.display = '';
  } else if (volumeRange.value <= 50) {
      video.muted = false;
      fullVolumeButton.style.display = 'none';
      halfVolumeButton.style.display = '';
      mutedButton.style.display = 'none';
  } else if (volumeRange.value > 50) {
      video.muted = false;
      fullVolumeButton.style.display = '';
      halfVolumeButton.style.display = 'none';
      mutedButton.style.display = 'none';
  }
}, false);



volumeButton.addEventListener('mouseenter', function() {
  volumeControl.style.margin = '0px 2px 0px 0px';
  volumePanel.style.width = '52px';
});

leftSideControls.addEventListener('mouseleave', function() {
  volumeControl.style.margin = '0px 0px 0px 0px';
  volumePanel.style.width = '0px';
});

setInterval(function() {
  volumeProgress.style.width = volumeRange.value + '%';
}, 1);

const toggleMute = () => {
  video.muted = !video.muted;
  if (video.muted) {
      fullVolumeButton.style.display = 'none';
      halfVolumeButton.style.display = 'none';
      mutedButton.style.display = '';
      volumeRange.value = '0';
  } else {
      volumeRange.value = video.volume * 100;

      if (video.volume <= 0.5) {
          fullVolumeButton.style.display = 'none';
          halfVolumeButton.style.display = '';
          mutedButton.style.display = 'none';
      } else if (video.volume > 0.5) {
          fullVolumeButton.style.display = '';
          halfVolumeButton.style.display = 'none';
          mutedButton.style.display = 'none';
      }      
  }
};

*/
/*
var line = document.getElementsById('inputVolume');
line.addEventListener('mousemove', function () {
  var pervalue = document.getElementById('pervalue');
  var sp = document.getElementsByTagName('span')[0];
  if (line.value == 0) {
    pervalue.innerHTML = "";
    var sound = document.getElementsByClassName('sound1');
    for(var i=0; i<sound.length; i++) {
      sound[i].style.display = "none";
    } 
    document.getElementsById('mute').style.display = "block";
  }
  if (line.value > 0) {
    pervalue.innerHTML = line.value + "%";
    var sound = document.getElementsByClassName('sound1');
    for(var i=0; i<sound.length; i++) {
      sound[i].style.display = "block";
    } 
    document.getElementsById('mute').style.display = "none";
  }
})
*/


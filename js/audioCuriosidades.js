
const novoSong = document.getElementById('novo')
const novoSong1 = document.getElementById('novo1')
const novoSong2 = document.getElementById('novo2')
const novoSong3 = document.getElementById('novo3')
const novoSong4 = document.getElementById('novo4')
const novoSong5 = document.getElementById('novo5')
const novoSong6 = document.getElementById('novo6')
const novoSong7 = document.getElementById('novo7')


function img01 (){
  document.getElementById("cover").src="../../imagens/stryper.jpg"
  novoSong.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/honestly.mp3"
}
function img02 (){
  document.getElementById("cover").src="../../imagens/stryper.jpg"
  novoSong1.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo1')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/toHellWithTheDevil.mp3"
}
function img03 (){
  document.getElementById("cover").src="../../imagens/stryper.jpg"
  novoSong2.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('novo2')
   
    if(isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
  document.getElementById("audio").src="../../musicas/CallingOnYOu.mp3"
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
 
 
const song = ['nessunDorma', 'itIsTime', 'ukulele'];
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

//music 2

function img04 (){
    document.getElementById("cover1").src="../../imagens/hbFT.jpg"
    novoSong3.addEventListener('click', () => {
      const isPlaying = musicContainer1.classList.contains('novo3')
     
      if(isPlaying) {
        pauseSong1()
      } else {
        playSong1()
      }
    })
    document.getElementById("audio1").src="../../musicas/itIsTime.mp3"
  }
  function img05 (){
      document.getElementById("cover1").src="../../imagens/hbFT.jpg"
      novoSong4.addEventListener('click', () => {
        const isPlaying = musicContainer1.classList.contains('novo4')
       
        if(isPlaying) {
          pauseSong1()
        } else {
          playSong1()
        }
      })
      document.getElementById("audio1").src="../../musicas/GodHasAllGlory.mp3"
  }
  function img06 (){
      document.getElementById("cover1").src="../../imagens/hbFT.jpg"
      novoSong5.addEventListener('click', () => {
        const isPlaying = musicContainer1.classList.contains('novo5')
       
        if(isPlaying) {
          pauseSong1()
        } else {
          playSong1()
        }
      })
      document.getElementById("audio1").src="../../musicas/beAware.mp3"
  }


const musicContainer1 = document.getElementById('music-container1')
const playBtn1 = document.getElementById('play1')
const prevBtn1 = document.getElementById('prev1');
const nextBtn1 = document.getElementById('next1');
 
const audio1 = document.getElementById('audio1')
const progress1 = document.getElementById('progress1')
const progressContainer1 = document.getElementById('progress-container1');
const title1 = document.getElementById('title1')
const cover1 = document.getElementById('cover1');
 
 
const songg = ['nessunDorma', 'itIsTime', 'ukulele'];
let songIndexx = 2;
 
 
function loadSong1(songg) {
  title1.innerText = songg;
  audio1.src = `musicas/${songg}.mp3`
  cover1.src = `imagens/${songg}.jpg`
}
 
function nextSong1(songg) {
    title1.innerText = song;
    audio1.src = `musicas/${songg[song.length + 1]}.mp3`
    cover1.src = `imagens/${songg}.jpg`
    songg++;
  }
 
function playSong1() {
  musicContainer1.classList.add('play1');
  playBtn1.querySelector('i.fas').classList.remove('fa-play');
  playBtn1.querySelector('i.fas').classList.add('fa-pause');
 
  audio1.play();
}
 
function pauseSong1() {
  musicContainer1.classList.remove('play1');
  playBtn1.querySelector('i.fas').classList.add('fa-play');
  playBtn1.querySelector('i.fas').classList.remove('fa-pause');
 
  audio1.pause();
}
 
function updateProgress1(i) {
  const { duration1, currentTime } = i.srcElement;
  const progressPercent = (currentTime / duration1) * 100;
  progress1.style.width = `${progressPercent}%`
}
 
function setProgress1(i) {
  const width = this.clientWidth;
  const clickX = i.offsetX;
  const duration1 = audio1.duration1;
 
  audio1.currentTime = (clickX / width) * duration1
}
 
playBtn1.addEventListener('click', () => {
  const isPlaying = musicContainer1.classList.contains('play1')
 
  if(isPlaying) {
    pauseSong1()
  } else {
    playSong1()
  }
})
 
 
 
nextBtn1.addEventListener('click', () => {
    const isNext = musicContainer1.classList.contains('next1')
   
    if(isNext) {
      nextSong1()
    } else {
      playSong1()
    }
  })
 
audio1.addEventListener('timeupdate', updateProgress1)
 
progressContainer1.addEventListener('click', setProgress1)


//music 3

function img08 (){
    document.getElementById("cover3").src="../../imagens/rossini.jpg"
    novoSong7.addEventListener('click', () => {
      const isPlaying = musicContainer.classList.contains('novo7')
     
      if(isPlaying) {
        pauseSong3()
      } else {
        playSong3()
      }
    })
    document.getElementById("audio3").src="../../musicas/barbeiroSevilla.mp3"
}

const musicContainer2 = document.getElementById('music-container2')
const playBtn2 = document.getElementById('play2')
const prevBtn2 = document.getElementById('prev2');
const nextBtn2 = document.getElementById('next2');
 
const audio2 = document.getElementById('audio2')
const progress2 = document.getElementById('progress2')
const progressContainer2 = document.getElementById('progress-container2');
const title2 = document.getElementById('title2')
const cover2 = document.getElementById('cover2');
 
 
const song2 = ['nessunDorma', 'itIsTime', 'ukulele'];
let songIndex2 = 2;
 
 
function loadSong2(song2) {
  title2.innerText = song;
  audio2.src = `musicas/${song2}.mp3`
  cover2.src = `imagens/${song2}.jpg`
}
 
function nextSong2(song2) {
    title2.innerText = song;
    audio2.src = `musicas/${song2[song.length + 1]}.mp3`
    cover2.src = `imagens/${song2}.jpg`
    song2++;
  }
 
function playSong2() {
  musicContainer2.classList.add('play2');
  playBtn2.querySelector('i.fas').classList.remove('fa-play');
  playBtn2.querySelector('i.fas').classList.add('fa-pause');
 
  audio1.play();
}
 
function pauseSong2() {
  musicContainer2.classList.remove('play2');
  playBtn2.querySelector('i.fas').classList.add('fa-play');
  playBtn2.querySelector('i.fas').classList.remove('fa-pause');
 
  audio2.pause();
}
 
function updateProgress2(o) {
  const { duration2, currentTime } = o.srcElement;
  const progressPercent = (currentTime / duration2) * 100;
  progress2.style.width = `${progressPercent}%`
}
 
function setProgress2(o) {
  const width = this.clientWidth;
  const clickX = o.offsetX;
  const duration2 = audio1.duration2;
 
  audio2.currentTime = (clickX / width) * duration2
}
 
playBtn2.addEventListener('click', () => {
  const isPlaying = musicContainer2.classList.contains('play2')
 
  if(isPlaying) {
    pauseSong2()
  } else {
    playSong2()
  }
})
 
 
nextBtn2.addEventListener('click', () => {
    const isNext = musicContainer2.classList.contains('next2')
   
    if(isNext) {
      nextSong2()
    } else {
      playSong2()
    }
  })
 
audio2.addEventListener('timeupdate', updateProgress2)
 
progressContainer2.addEventListener('click', setProgress2)


function img07 (){
    document.getElementById("cover2").src="../../imagens/pavarotti.jpg"
    novoSong6.addEventListener('click', () => {
      const isPlaying = musicContainer2.classList.contains('novo6')
     
      if(isPlaying) {
        pauseSong2()
      } else {
        playSong2()
      }
    })
    document.getElementById("audio1").src="../../musicas/nessunDorma.mp3"
}

//musica 3

const musicContainer3 = document.getElementById('music-container3')
const playBtn3 = document.getElementById('play3')
const prevBtn3 = document.getElementById('prev3');
const nextBtn3 = document.getElementById('next3');
 
const audio3 = document.getElementById('audio3')
const progress3 = document.getElementById('progress3')
const progressContainer3 = document.getElementById('progress-container3');
const title3 = document.getElementById('title3')
const cover3 = document.getElementById('cover3');
 
 
const song3 = ['nessunDorma', 'itIsTime', 'ukulele'];
let songIndex3 = 2;
 
 
function loadSong3(song3) {
  title3.innerText = song3;
  audio3.src = `musicas/${song3}.mp3`
  cover3.src = `imagens/${song3}.jpg`
}
 
function nextSong3(song3) {
    title3.innerText = song;
    audio3.src = `musicas/${song3[song.length + 1]}.mp3`
    cover3.src = `imagens/${song3}.jpg`
    song3++;
  }
 
function playSong3() {
  musicContainer3.classList.add('play3');
  playBtn3.querySelector('i.fas').classList.remove('fa-play');
  playBtn3.querySelector('i.fas').classList.add('fa-pause');
 
  audio1.play();
}
 
function pauseSong3() {
  musicContainer3.classList.remove('play3');
  playBtn3.querySelector('i.fas').classList.add('fa-play');
  playBtn3.querySelector('i.fas').classList.remove('fa-pause');
 
  audio1.pause();
}
 
function updateProgress3(u) {
  const { duration3, currentTime } = u.srcElement;
  const progressPercent = (currentTime / duration3) * 100;
  progress3.style.width = `${progressPercent}%`
}
 
function setProgress3(u) {
  const width = this.clientWidth;
  const clickX = u.offsetX;
  const duration3 = audio3.duration3;
 
  audio3.currentTime = (clickX / width) * duration3
}
 
playBtn3.addEventListener('click', () => {
  const isPlaying = musicContainer3.classList.contains('play3')
 
  if(isPlaying) {
    pauseSong3()
  } else {
    playSong3()
  }
})
 
 
nextBtn3.addEventListener('click', () => {
    const isNext = musicContainer3.classList.contains('next3')
   
    if(isNext) {
      nextSong2()
    } else {
      playSong2()
    }
  })
 
audio3.addEventListener('timeupdate', updateProgress3)
 
progressContainer3.addEventListener('click', setProgress3)



//musica 4

function img08 (){
    document.getElementById("cover4").src="../../imagens/rossini.jpg"
    novoSong7.addEventListener('click', () => {
      const isPlaying = musicContainer4.classList.contains('novo7')
     
      if(isPlaying) {
        pauseSong4()
      } else {
        playSong4()
      }
    })
    document.getElementById("audio1").src="../../musicas/barbeiroSevilla.mp3"
}

const musicContainer4 = document.getElementById('music-container4')
const playBtn4 = document.getElementById('play4')
const prevBtn4 = document.getElementById('prev4');
const nextBtn4 = document.getElementById('next4');
 
const audio4 = document.getElementById('audio4')
const progress4 = document.getElementById('progress4')
const progressContainer4 = document.getElementById('progress-container4');
const title4 = document.getElementById('title4')
const cover4 = document.getElementById('cover4');
 
 
const song4 = ['nessunDorma', 'itIsTime', 'ukulele'];
let songIndex4 = 2;
 
 
function loadSong4(song4) {
  title4.innerText = song;
  audio4.src = `musicas/${song4}.mp3`
  cover4.src = `imagens/${song4}.jpg`
}
 
function nextSong4(song4) {
    title4.innerText = song;
    audio4.src = `musicas/${song4[song.length + 1]}.mp3`
    cover4.src = `imagens/${song4}.jpg`
    song4++;
  }
 
function playSong4() {
  musicContainer4.classList.add('play4');
  playBtn4.querySelector('i.fas').classList.remove('fa-play');
  playBtn4.querySelector('i.fas').classList.add('fa-pause');
 
  audio1.play();
}
 
function pauseSong4() {
  musicContainer4.classList.remove('play4');
  playBtn4.querySelector('i.fas').classList.add('fa-play');
  playBtn4.querySelector('i.fas').classList.remove('fa-pause');
 
  audio1.pause();
}
 
function updateProgress4(u) {
  const { duration4, currentTime } = u.srcElement;
  const progressPercent = (currentTime / duration4) * 100;
  progress4.style.width = `${progressPercent}%`
}
 
function setProgress4(u) {
  const width = this.clientWidth;
  const clickX = u.offsetX;
  const duration4 = audio4.duration4;
 
  audio4.currentTime = (clickX / width) * duration4
}
 
playBtn4.addEventListener('click', () => {
  const isPlaying = musicContainer4.classList.contains('play4')
 
  if(isPlaying) {
    pauseSong4()
  } else {
    playSong4()
  }
})
 
 
nextBtn4.addEventListener('click', () => {
    const isNext = musicContainer4.classList.contains('next4')
   
    if(isNext) {
      nextSong2()
    } else {
      playSong2()
    }
  })
 
audio4.addEventListener('timeupdate', updateProgress4)
 
progressContainer4.addEventListener('click', setProgress4)
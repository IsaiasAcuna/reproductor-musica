
const 
  sliderSingles = document.querySelector(".singles"),
  sliderAlbums = document.querySelector(".albums"),
  playPauseBtn = document.querySelector("#playPauseBtn"),
  player = document.querySelector(".player"),
  infoReproductor = document.querySelector(".reproductor"),
  tiepo = document.querySelector("#cacarika"),
  buttonFollow = document.querySelectorAll(".button-follow");


let playing = false,
  currentSong = 0,
  suffle = false,
  repeat = false,
  audio = new Audio(),
  fuckingSingles = 0,
  fuckingalbum = 0;

const songs = [
  { 
    nombre: "EY CHORY",
    artista: "Feid", 
    ruta: "EY CHORY.mp3", 
    img_src: "./img/mor.jpg",
    color: "#025a37",
  },
  { 
    nombre: "VOL 2", 
    artista: "Feid", 
    ruta: "Vol 2.mp3", 
    img_src: "./img/mor.jpg",
    color: "#025a37",
  },
  { 
    nombre: "She Got Me Like", 
    artista: "NCS", 
    ruta: "SHE GOT ME LIKE.mp3", 
    img_src: "./img/she got me like.jpg",
    color:"#275182",
  },
  { 
    nombre: "Remember Me", 
    artista: "Duki, KHEA, Bizarrap", 
    ruta: "Remember Me.mp3", 
    img_src: "./img/Antes de Ameri.jpg",
    color: "#703d4e",
  },
];


function init() {
  updatePlayList(songs)
  loadSong(currentSong)
  botonSeguir()
}

init()


function updatePlayList(songs) {

  sliderSingles.innerHTML = "";

  songs.forEach((song , index) => {
    const { img_src , nombre , artista, color } = song;

    const article = document.createElement("article")
    article.classList.add("cards")
    article.innerHTML = `
                          <img src="${img_src}" alt="${nombre}">
                          <div class="separador">
                            <h3 class="name-cards">${nombre}</h3>
                            <h3 class="name-artist">${artista}</h3>
                          </div>
                        `;
    
    sliderSingles.appendChild(article);

    article.addEventListener("click", (e) => {
      currentSong = index;
      loadSong(currentSong);
      audio.play();
      playPauseBtn.innerHTML = "<i class='bx bx-pause icon-play-pause'></i>"
      playing = true;
      player.style.backgroundColor = `${color}`;
      })

  })
}

function loadSong(num) {

  infoReproductor.innerHTML = `
          <img src="${songs[num].img_src}" alt="${songs[num].artista}">
          <div class="artist-name-reproducotr">
            <h3 class="name-song">${songs[num].nombre}</h3>
            <h3 class="name-artist">${songs[num].artista}</h3>
          </div>        
          `;

  audio.src = `media/${songs[num].ruta}`;

}

playPauseBtn.addEventListener("click", () => {
  if (playing){
    playPauseBtn.innerHTML = "<i class='bx bx-play icon-play-pause'></i>"
    playing = false
    audio.pause()
  }else {
    playPauseBtn.innerHTML = "<i class='bx bx-pause icon-play-pause'></i>"
    playing = true
    audio.play()
  }
})



function botonSeguir() {

  buttonFollow.forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.innerText === "Seguir") {
            boton.innerText = "Siguiendo";
            boton.style.backgroundColor = `#000`;
            boton.style.border = '#464646 solid 1px'
        } else {
            boton.innerText = "Seguir";
            boton.style.backgroundColor = '#154bfc'
            boton.style.border = 'none'
        }
    });
  });
}
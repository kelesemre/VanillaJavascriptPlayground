const sounds = ["applause", "boo", "gasp", "tada", "wrong"]
//create button element code side and add a click event.
sounds.forEach((sound) => {
  const btn = document.createElement("button")
  btn.classList.add("btn")
  btn.innerText = sound
  btn.addEventListener("click", () => {
    stopSongs()
    document.getElementById(sound).play()
  })
  document.getElementById("buttons").appendChild(btn)
})

function stopSongs(params) {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}

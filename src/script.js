const sounds = [
  "applause",
  "explosion",
  "ocean",
  "thunderstorm",
  "victory",
  "bells",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const mp3 = document.getElementById(sound);

    mp3.pause();
    mp3.currentTime = 0;
  });
}

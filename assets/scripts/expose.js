// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelector = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const audio = document.querySelector("audio");

  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img")

  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  hornSelector.addEventListener("change", (event) => handleHornChange(event, hornImage, audio));
  
  volumeSlider.addEventListener("input", (event) => handleVolumeChange(event, audio, volumeImage));
  
  playButton.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();

    if (audio.src.includes("party-horn")) {
      jsConfetti.addConfetti();
    }
  });

}

function handleHornChange(event, hornImage, audio) {
  const selectedHorn = event.target.value;
  console.log(selectedHorn);

  if (selectedHorn == "air-horn") {
    hornImage.src = "assets/images/air-horn.svg";
    hornImage.alt = "air horn";

    audio.src = "assets/audio/air-horn.mp3";

  } else if (selectedHorn == "car-horn") {
    hornImage.src = "assets/images/car-horn.svg";
    hornImage.alt = "car horn";

    audio.src = "assets/audio/car-horn.mp3";

  } else if (selectedHorn == "party-horn") {
    hornImage.src = "assets/images/party-horn.svg";
    hornImage.alt = "party horn";

    audio.src = "assets/audio/party-horn.mp3";

  } else {
    hornImage.src = "assets/images/no-image.png"
    hornImage.alt = "No image selected";

  }

}

function handleVolumeChange(event, audio, volumeImage) {
  const newVolume = Number(event.target.value);
  console.log(newVolume);

  audio.volume = newVolume / 100;

  if (newVolume == 0) {
    volumeImage.src = "assets/icons/volume-level-0.svg";
  } else if (newVolume < 33) {
    volumeImage.src = "assets/icons/volume-level-1.svg";
  } else if (newVolume < 67) {
    volumeImage.src = "assets/icons/volume-level-2.svg";
  } else if (newVolume <= 100) {
    volumeImage.src = "assets/icons/volume-level-3.svg";
  }

}

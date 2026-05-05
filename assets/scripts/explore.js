// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const voiceSelect = document.getElementById("voice-select");
  const face = document.querySelector("#explore img");

  const textInput = document.getElementById("text-to-speak");
  const button = document.querySelector("button");

  let voices = [];

  function loadVoices() {

    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.addEventListener("voiceschanged", loadVoices);

  loadVoices();

  button.addEventListener("click", () => {

    const text = textInput.value;

    const speech = new SpeechSynthesisUtterance(text);

    const selectedVoice = voices[voiceSelect.value];
    speech.voice = selectedVoice;

    face.src = "assets/images/smiling-open.png";

    speech.onend = () => {
      face.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(speech);
  });

}
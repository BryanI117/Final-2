const playButton = document.getElementById("playButton");
const audio = document.getElementById("myAudio");

playButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play(); 
        playButton.textContent = "Pause Sound"; // Change button text
    } else {
        audio.pause();
        playButton.textContent = "Play Sound"; // Change button text back
    }
});

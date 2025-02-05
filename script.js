document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundMusic");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playIcon = document.getElementById("playIcon");

    let isPlaying = false;

    playPauseBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playIcon.classList.replace("fa-pause", "fa-play");
        } else {
            audio.play();
            playIcon.classList.replace("fa-play", "fa-pause");
        }
        isPlaying = !isPlaying;
    });

    // Para iniciar a música automaticamente sem som (evita bloqueios)
    audio.volume = 0.5;
});

var audioPlayer = new Audio(); // Creează un singur obiect Audio

function playSong(source) {
    // Oprește redarea cântecului anterior dacă este în curs
    if (!audioPlayer.paused) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    
    // Setează sursa noului cântec și îl redă
    audioPlayer.src = source;
    audioPlayer.play();
}

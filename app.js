var findLyrics = document.getElementById("find-lyrics");
var artist = document.getElementById("artist");
var songTitle = document.getElementById("song-title");
var songLyrics = document.getElementById("song-lyrics");

findLyrics.addEventListener("click", async function() {
    songLyrics.textContent = "";

    const response = await fetch(`https://api.lyrics.ovh/v1/${artist.value}/${songTitle.value}`);
    if (response.status == 404) {
        alert("Song lyrics not found!");
        return;
    }
    
    const jsonLyrics = await response.json();
    songLyrics.textContent = jsonLyrics.lyrics;
});
function showGallery() {
    // Play birthday voice
    const audio = new Audio("birthday.mp3");
    audio.play().catch(function(err){
        console.log(err);
    });

    // Show gallery
    document.getElementById("gallery").style.display = "block";
}

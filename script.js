function showGallery() {

    document.getElementById("gallery").style.display = "block";

    const images = [
        "./images/WhatsApp Image 2026-07-13 at 4.29.36 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.37 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.38 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.38 PM (1).jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.38 PM (2).jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.39 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.39 PM (1).jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.39 PM (2).jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.40 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.29.40 PM (1).jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.44.12 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.44.13 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.44.13 PM (1).jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.44.14 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.44.15 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.44.16 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.44.17 PM.jpeg",
        "./images/WhatsApp Image 2026-07-13 at 4.44.17 PM (1).jpeg"
    ];

    let current = 0;

    const slide = document.getElementById("slideshow");

    slide.src = images[0];

    setInterval(function () {
        current++;
        if (current >= images.length) {
            current = 0;
        }
        slide.src = images[current];
    }, 3000);
}

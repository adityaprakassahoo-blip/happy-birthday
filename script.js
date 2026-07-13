const photos = [
"images/WhatsApp Image 2026-07-13 at 4.29.36 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.37 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.38 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.38 PM (2).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.38 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.39 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.39 PM (2).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.39 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.40 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.29.40 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.12 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.13 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.13 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.14 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.15 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.16 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.17 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.17 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.19 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.19 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.44.20 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.49.59 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.49.59 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.50.00 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.50.00 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.50.01 PM (1).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.50.01 PM (2).jpeg",
"images/WhatsApp Image 2026-07-13 at 4.50.01 PM.jpeg",
"images/WhatsApp Image 2026-07-13 at 4.52.16 PM.jpeg"
];

function showGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    photos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo;
        img.style.width = "250px";
        img.style.margin = "10px";
        img.style.borderRadius = "15px";
        gallery.appendChild(img);
    });
}
function showImage(imageSrc) {
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlayImage");
    overlayImage.src = imageSrc;
    overlay.style.display = "flex";
}

function closeImage() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

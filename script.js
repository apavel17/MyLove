function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random horizontal position
    heart.style.left = Math.random() * window.innerWidth + "px";

    // Random animation duration
    let duration = Math.random() * 2 + 2; // Between 2s and 4s
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Generate hearts every 300ms
setInterval(createHeart, 300);

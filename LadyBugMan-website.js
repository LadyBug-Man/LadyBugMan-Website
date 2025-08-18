// Create a cache for audio objects
const audioCache = {};

const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Add click listeners to all buttons with a data-sound attribute
document.querySelectorAll('[data-sound]').forEach(button => {
    button.addEventListener('click', () => {
        const soundSrc = button.getAttribute('data-sound');

        // If we haven't created an Audio object for this sound yet, do it now
        if (!audioCache[soundSrc]) {
            audioCache[soundSrc] = new Audio(soundSrc);
            audioCache[soundSrc].preload = 'auto';
        }

        // Rewind and play the sound
        audioCache[soundSrc].currentTime = 0;
        audioCache[soundSrc].play();
    });
});


// Load saved theme if any
if (localStorage.getItem("theme")) {
    html.setAttribute("data-theme", localStorage.getItem("theme"));
} else {
    html.setAttribute("data-theme", "light"); // default to light
}

toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});
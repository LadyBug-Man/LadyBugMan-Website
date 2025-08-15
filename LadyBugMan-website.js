// Create a cache for audio objects
const audioCache = {};

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



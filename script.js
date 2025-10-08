//your JS code here. If required.
// Array of sound files (place these files in 'sounds' folder)
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3"];

// Create a section to hold buttons
const section = document.createElement('section');
section.id = "buttons";
document.body.appendChild(section);

let currentAudio = null;

// Create sound buttons dynamically
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.className = "btn";
    btn.textContent = sound.split('.')[0]; // e.g., "sound1"
    btn.dataset.sound = sound;

    btn.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(`sounds/${btn.dataset.sound}`);
        currentAudio.play();
    });

    section.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.className = "stop";
stopBtn.textContent = "Stop";
stopBtn.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
});
section.appendChild(stopBtn);

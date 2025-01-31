document.addEventListener('keydown', (function() {
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    console.log("Konami Code Script Loaded"); // Debug message

    return function(event) {
        console.log("Key Pressed: ", event.keyCode); // Logs every key press

        if (event.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert("🚀 Secret Bull Run Activated! Moon incoming! 🌕");
                console.log("Konami Code Activated!");
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    };
})());

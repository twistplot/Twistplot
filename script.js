document.addEventListener("DOMContentLoaded", function () {
    console.log("Konami Code Script Loaded");

    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    document.addEventListener("keydown", function (event) {
        console.log("Key Pressed: ", event.keyCode);

        if (event.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert("🚀 Secret Bull Run Activated! Moon incoming! 🌕");
                console.log("Konami Code Activated!");
                document.body.style.backgroundColor = "gold"; // Bonus effect
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});

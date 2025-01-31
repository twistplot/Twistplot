document.addEventListener('keydown', (function() {
    let konamiCode = [38,38,40,40,37,39,37,39,66,65];
    let konamiIndex = 0;
    
    return function(event) {
        if (event.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert("🚀 Secret Bull Run Activated! Moon incoming! 🌕");
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    };
})());

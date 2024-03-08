const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
};

function flashScreen(message) {
    let timeUnit = 300; // milliseconds per dot/flash
    let morseMessage = message.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
    let flashes = [];

    for (let i = 0; i < morseMessage.length; i++) {
        if (morseMessage[i] === '.') {
            flashes.push({ duration: timeUnit, color: 'yellow' });
        } else if (morseMessage[i] === '-') {
            flashes.push({ duration: timeUnit * 3, color: 'yellow' });
        } else if (morseMessage[i] === ' ') {
            flashes.push({ duration: timeUnit, color: 'black' });
        } else if (morseMessage[i] === '/') {
            flashes.push({ duration: timeUnit * 3, color: 'black' });
        }
        flashes.push({ duration: timeUnit, color: 'black' }); // pause between symbols
    }

    let flashIndex = 0;

    function flash() {
        if (flashIndex >= flashes.length) return;
        let { duration, color } = flashes[flashIndex++];
        document.body.style.backgroundColor = color;
        setTimeout(() => {
            flash();
        }, duration);
    }

    flash();
}

flashScreen("Hello World");
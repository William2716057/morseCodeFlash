const morseFlasher = document.getElementById('morse-flasher');

// Morse code mapping
const morseCode = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '\'': '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': '/'
};

function flashMorseCode(message) {
    let index = 0;
    let flashingInterval = setInterval(() => {
        if (index < message.length * 2) {
            let characterIndex = Math.floor(index / 2);
            if (index % 2 === 0) {
                let character = message[characterIndex].toUpperCase();
                let morseSymbol = morseCode[character];
                if (morseSymbol) {
                    morseFlasher.textContent = morseSymbol;
                } else {
                    morseFlasher.textContent = ' ';
                }
                document.body.style.backgroundColor = 'yellow';
            } else {
                morseFlasher.textContent = '';
                document.body.style.backgroundColor = 'black';
            }
            index++;
        } else {
            clearInterval(flashingInterval);
        }
    }, 500);
}

// Flash the Morse code message
flashMorseCode("a"); // Example message to flash
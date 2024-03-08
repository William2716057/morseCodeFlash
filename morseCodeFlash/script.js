function convertToMorse() {
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/',
    };

    const textInput = document.getElementById('inputText').value.toUpperCase();
    let morseCode = '';

    for (let char of textInput) {
        if (morseCodeMap.hasOwnProperty(char)) {
            morseCode += morseCodeMap[char] + ' ';
        } else {
            // If character not found in morse code map, just append it as is
            morseCode += char;
        }
    }

    flashMorseCode(morseCode.trim());
}

function flashMorseCode(morseCode) {
    const morseSequence = morseCode.split(' ');

    let index = 0;

    const flashInterval = setInterval(() => {
        if (index < morseSequence.length) {
            flashLight(morseSequence[index]);
            index++;
        } else {
            clearInterval(flashInterval);
        }
    }, 1000);
}

function flashLight(morseChar) {
    const flashDuration = 50; // milliseconds
    const lightOnColor = '#FFFF00'; // Yellow
    const lightOffColor = '#000000'; // Black

    const light = document.body;

    switch (morseChar) {
        case '.':
            light.style.backgroundColor = lightOnColor;
            setTimeout(() => { light.style.backgroundColor = lightOffColor; }, flashDuration);
            break;
        case '-':
            light.style.backgroundColor = lightOnColor;
            setTimeout(() => { light.style.backgroundColor = lightOffColor; }, flashDuration * 3);
            break;
        case '/':
            setTimeout(() => { light.style.backgroundColor = lightOffColor; }, flashDuration * 2);
            break;
        default:
            // For any character not included in Morse code, just turn off light
            light.style.backgroundColor = lightOffColor;
            break;
    }
}
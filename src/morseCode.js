// /src/morse/morseCode.js
import { Characters } from './characters.js';

class morseCode {
    constructor() {
        this.morseCode = Characters;
    }

    encode(text) {
        let morseCode = [];
        // Split text by spaces to handle words separately
        for (const world of text.split(" ")) {
            let morseCodeWorld = [];
            for (let i = 0; i < world.length; i++) {
                const char = world[i].toUpperCase();
                // If the character exists in the Morse code map, encode it
                if (this.morseCode[char]) {
                    morseCodeWorld.push(this.morseCode[char]);
                } else {
                    // If it's an invalid character, add a placeholder (or skip)
                }
            }
            if (morseCodeWorld.length > 0) {
                morseCode.push(morseCodeWorld); // Add the encoded word to the array
            }
        }
        return morseCode; // Return array format
    }
}

export default morseCode;

# Morse-Lib

`morse-lib` is a JavaScript library designed to encode text into integers using Morse code-style patterns. This encoding is intended for use in machine learning applications, where converting textual data into integer representations may be necessary for model training or analysis.

## Features

- Encodes text characters into Morse code-like patterns.
- Converts each Morse-like pattern into integers.
- Suitable for machine learning data preprocessing.

## Installation

To install `morse-lib`, run the following command:

```bash
npm install morse-lib
```

## Usage

You can use `morse-lib` to encode text into integers using the Morse code style. Here is an example of how to use the library:

### Example

```js
import morseCode from 'morse-lib';

// Initialize the encoder
const encoder = new morseCode();

// Example text: "HELLO"
const text = 'HELLO';

// Encode the text
const encoded = encoder.encode(text);

console.log(encoded);
// Output: [[0, 0], [0, 1], [1, 0, 0], [1, 1, 0, 0], [0, 1, 1]]
```

In the example above, each character of "HELLO" is encoded into an array of integers representing Morse-like patterns. These integer arrays can be used for further machine learning tasks, such as training or analysis.

## API

### `morseCode.encode(text: string): Array`

* **Parameters:**

  * `text` (string): The text to be encoded.
* **Returns:**

  * An array of encoded Morse-like integer patterns for each character in the input text.

### Example:

```js
const encoded = morse.encode('HELLO');
console.log(encoded);
// Output: [[0, 0], [0, 1], [1, 0, 0], [1, 1, 0, 0], [0, 1, 1]]
```

## Development

### Running Tests

To run the unit tests using Jest:

```bash
npm test
```

### Adding More Characters

You can extend the library by adding more characters and their respective Morse code mappings by modifying the `characters.js` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to the development of `morse-lib`, feel free to open issues or pull requests. Please ensure your code passes the tests before submitting.

---

### Additional Notes:

* The library currently supports encoding text to integer arrays, but additional features like decoding can be added in the future.
* The patterns you receive are Morse-like and are designed to be integer-based for machine learning compatibility.
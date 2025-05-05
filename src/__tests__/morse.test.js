import morseCode from '../morseCode.js';

describe('morseCode Encoding Tests', () => {
  let morse;

  beforeAll(() => {
    morse = new morseCode();
  });

  test('Encode a simple word "HELLO"', () => {
    const text = 'HELLO';
    const expected = [        
      [      
        [ 0, 0, 0, 0 ],
        [ 0 ],
        [ 0, 1, 0, 0 ],
        [ 0, 1, 0, 0 ],
        [ 1, 1, 1 ]
      ]
    ];

    expect(morse.encode(text)).toEqual(expected);
  });

  test('Encode a phrase "HELLO WORLD"', () => {
    const text = 'HELLO WORLD';
    const expected = [        
      [      
        [ 0, 0, 0, 0 ],
        [ 0 ],
        [ 0, 1, 0, 0 ],
        [ 0, 1, 0, 0 ],
        [ 1, 1, 1 ]
      ],
      [
        [ 0, 1, 1 ],
        [ 1, 1, 1 ],
        [ 0, 1, 0 ],
        [ 0, 1, 0, 0 ],
        [ 1, 0, 0 ]
      ]
    ];

    expect(morse.encode(text)).toEqual(expected);
  });

  test('Encode text with an unknown character', () => {
    const text = 'HELLO @ WORLD';
    const expected = [
      [
        [ 0, 0, 0, 0 ],
        [ 0 ],
        [ 0, 1, 0, 0 ],
        [ 0, 1, 0, 0 ],
        [ 1, 1, 1 ]
      ],
      [
        [ 0, 1, 1 ],
        [ 1, 1, 1 ],
        [ 0, 1, 0 ],
        [ 0, 1, 0, 0 ],
        [ 1, 0, 0 ]
      ]
    ];
    
    expect(morse.encode(text)).toEqual(expected);
  });
});
const allCharacters = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  h: 'h',
  i: 'i',
  j: 'j',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  q: 'q',
  r: 'r',
  s: 's',
  t: 't',
  u: 'u',
  v: 'v',
  w: 'w',
  x: 'x',
  y: 'y',
  z: 'z',
};

function getCharacterPlaces(factor) {
  const allCharacterCopy = {};

  const characters = Object.keys(allCharacters);

  for (let i = 0; i <= characters.length - 1; i++) {
    let newIndex = i + factor > 25 ? i + factor - 26 : i + factor;

    allCharacterCopy[characters[i]] = characters[newIndex];
  }

  return allCharacterCopy;
}

function replaceCharsOfString(string, obj) {
  // object with new characters

  const finalWord = [];

  for (let letter of string.split('')) {
    let lowerCaseLetter = letter.toLowerCase();
    let isLowerCase = letter === lowerCaseLetter ? false : true;

    if (obj[lowerCaseLetter] === undefined) {
      finalWord.push(letter);
    }

    if (isLowerCase) {
      finalWord.push(obj[lowerCaseLetter].toUpperCase());
    } else {
      finalWord.push(obj[lowerCaseLetter]);
    }
  }

  return finalWord;
}

function caesarCipher(string, factor = 0) {
  const characterPlaces = getCharacterPlaces(factor);

  const finalWord = replaceCharsOfString(string, characterPlaces);

  return finalWord.join('');
}

module.exports = caesarCipher;

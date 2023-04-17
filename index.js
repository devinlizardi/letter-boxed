var words = require("an-array-of-english-words");

function getAllValidWords(grid) {
  function isValidWord(word) {
    for (let i = 1; i < word.length; i++) {
      const letter = word[i];
      const contextRow = grid.find((row) => row.includes(letter));
      if (contextRow.includes(word[i - 1]) || letter === word[i - 1]) {
        return false;
      }
    }
    return true;
  }

  const allLetters = [];
  grid.forEach((row) => {
    row.forEach((l) => allLetters.push(l));
  });
  const regexStr =
    "\\b(?=.*[" +
    allLetters.join("") +
    "]{3,})[" +
    allLetters.join("") +
    "]+\\b";
  const allWords = words.filter((d) => new RegExp(regexStr, "gi").test(d));

  let allValidWords = [];
  grid.forEach((row) => {
    for (let col = 0; col < 4; col++) {
      const wordsStartingWithLetter = allWords.filter(
        (word) => word[0] === row[col]
      );
      wordsStartingWithLetter.forEach((word) => {
        if (isValidWord(word)) {
          allValidWords.push(word);
        }
      });
    }
  });
  return allValidWords;
}

test1 = [
  ["s", "l", "r"],
  ["w", "m", "y"],
  ["t", "o", "i"],
  ["h", "n", "d"],
];

console.log(getAllValidWords(test1));

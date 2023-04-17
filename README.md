# NYT Letter Boxed Challenge

Am a fan of NYT games and wanted to see if I could... *help* myself out a little with the [Letter Boxed](https://www.nytimes.com/puzzles/letter-boxed) game, so I created a script to generate all valid words for a given game board.

My ambition was to write a script that would effectively play the game; first by generating all possible words and then searching for the optimal sequence that chains them together, but it was a bit too much for one afternoon. I set a timer for an hour and started working, though I wasn't able to write the script to finish the game I was able to generate all valid words with a given game board.

Few things I learned:

 - trying to use `<string> in <string[]>` doesn't always work, just use `<string[]>.includes()` instead
 - regex is hard for me, but not for ChatGPT
 - there are *loads* of libraries of english dictionary words out there
 - it's hard to debug when developing with a large data set (even if you thought it wasn't *thaaat* big)
 
 Some things I'd like to do eventually:
 
 - use the [pos](https://www.npmjs.com/package/pos) library to check if each word is a proper noun
 - find a library to filter out curse words (not sorry)
 - write a Puppeteer package that screenshots the latest Letter Boxed page and gives it to GPT-4 for solving
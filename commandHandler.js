import { color } from "./utils/colorText.js";

export function displayWelcome() {
    console.log(color('=== Welcome to wordPredictor© ===', null, 'rainbow'));
    console.log(color("Enter 'help' to see commands or 'exit' to quit\n\n"));        
}

export function displayHelp() {
    console.log(`Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program
  `)
}

export function handleAdd(trie, word) {
    trie.addWord(word);
    console.log(color(`Added ${word}`, 'green'));    
}

export function handleFind(trie, word) {
    const found = trie.findWord(word);
    const output = found ? color(`${word} exists in dictionary`, 'green') : color(`${word} does not exist in dictionary`, 'blue');
    console.log(output);    
}

export function handleComplete(trie, word) {
    const words = trie.predictWords(word);
    if (!words.length) console.log((color(`No suggestions found for '${word}'`, 'blue')));
    else console.log(color(`Suggestions for '${word}': ${words}`, 'blue'));
    
    
    
}
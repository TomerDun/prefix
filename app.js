import { displayHelp, displayWelcome, handleAdd } from "./commandHandler.js";
import PromptSync from "prompt-sync";
import { validateWord } from "./utils/validations.js";
import { color } from "./utils/colorText.js";
import AutoCompleteTrie from "./autoCompleteTrie.js";

const trie = new AutoCompleteTrie();

const prompt = PromptSync();

displayWelcome();

let p;

while (p !== 'exit') {
    p = prompt('> ');

    if (p === 'help') {
        displayHelp();
        continue;
    }

    let command, word = p.split(' ');

    try {
        validateWord(word);
    } catch (err) {
        console.error(color(err, 'red'));
        continue;
    }
    

    switch (command) {
        case 'add': handleAdd(trie, word);
        break;
        case 'find': handleFind(trie, word);
        break;
        case 'complete': handleComplete(trie, word);
        break;
        default: console.log(color(`Invalid command '${command}', please enter a valid command`, 'red'));
    }
}


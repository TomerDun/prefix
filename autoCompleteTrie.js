export default class AutoCompleteTrie {
    constructor(value=null, endOfWord=false) {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }

    addWord(word) {        
        if (!word.length) return; // Edge case - empty string

        const char = word[0];

        if (word.length === 1) { // Last character
            if (char in this.children) this.children[char].endOfWord = true;
            else {
                const newNode = new AutoCompleteTrie(char, true);
                this.children[char] = newNode;
            }
            return;
        }

        const nextWord = word.slice(1)

        if (!(char in this.children)) {
            const newNode = new AutoCompleteTrie(char, false);
            this.children[char] = newNode
            
        }
        this.children[char].addWord(nextWord);
    }
}
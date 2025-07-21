export default class AutoCompleteTrie {
    constructor(value = null, endOfWord = false) {
        this.value = value;
        this.children = {};
        this.endOfWord = endOfWord;
    }

    addWord(word) {
        if (!word) return; // Edge case - empty string

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

    findWord(word) {
        if (word.length < 1) return false;

        const firstChar = word[0];

        if (word.length === 1) {
            if (word in this.children && this.children[word].endOfWord) return true;
            return false;
        }

        const nextWord = word.slice(1);

        if (firstChar in this.children) {
            return this.children[firstChar].findWord(nextWord);
        }
        else return false;
    }

    predictWords(prefix) {
        const startingNode = this._getPrefixEnd(prefix);
        if (!startingNode) return []; // No words with the given prefix
        return startingNode._getAllWords(prefix.slice(0,-1));
    }

    // Helper Methods
    _getAllWords(prefix, allWords=[]) {
        prefix += this.value;
        if (this.endOfWord) {
            allWords.push(prefix);
        }
        
        for (let child of Object.values(this.children)) {
            child._getAllWords(prefix, allWords);
        }

        return allWords;
    }

    _getPrefixEnd(prefix) {
        if (prefix.length === 1) {
            if (prefix in this.children) return this.children[prefix];
            return;
        }
        
        const firstChar = prefix[0];
        const nextPrefix = prefix.slice(1);

        if (firstChar in this.children) {
            return this.children[firstChar]._getPrefixEnd(nextPrefix);
        }
        else {
            return;
        }

    }
}
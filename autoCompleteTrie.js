export default class AutoCompleteTrie {
    constructor(value, endOfWord=false) {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }
}
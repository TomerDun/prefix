import AutoCompleteTrie from "./autoCompleteTrie.js";

// Writing tests for the AutoCompleteTrie class using jest
describe('AutoCompleteTrie', () => {
    let trie;

    beforeEach(() => {
        trie = new AutoCompleteTrie();
    });

    test('should add and find words correctly', () => {
        trie.addWord('hello');
        trie.addWord('hell');
        trie.addWord('heaven');

        expect(trie.findWord('hello')).toBe(true);
        expect(trie.findWord('hell')).toBe(true);
        expect(trie.findWord('heaven')).toBe(true);
        expect(trie.findWord('he')).toBe(false);
        expect(trie.findWord('helloo')).toBe(false);
    });

    test('should handle empty strings', () => {
        trie.addWord('');
        expect(trie.findWord('')).toBe(false); // Empty string should not be found
    });

    test('should handle single character words', () => {
        trie.addWord('a');
        expect(trie.findWord('a')).toBe(true);
        expect(trie.findWord('b')).toBe(false);
    });

    test('should handle words with common prefixes', () => {
        trie.addWord('car');
        trie.addWord('cart');
        trie.addWord('cat');

        expect(trie.findWord('car')).toBe(true);
        expect(trie.findWord('cart')).toBe(true);
        expect(trie.findWord('cat')).toBe(true);
        expect(trie.findWord('cater')).toBe(false);
    });
});

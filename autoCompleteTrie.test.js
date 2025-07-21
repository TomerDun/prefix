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

    // Test for predictWords method - the order of predictions may vary, add more tests
    test('should return all words with the given prefix', () => {   
        trie.addWord('apple');
        trie.addWord('app');
        trie.addWord('apricot');
        trie.addWord('banana');

        const predictions = trie.predictWords('ap');
        expect(predictions).toEqual(expect.arrayContaining(['apple', 'app', 'apricot']));
        expect(predictions.length).toBe(3);
    });
    // More tests
    test('should return an empty array for non-existing prefixes', () => {
        trie.addWord('dog');
        trie.addWord('dove');

        const predictions = trie.predictWords('cat');
        expect(predictions).toEqual([]);
    });
    // More tests
    test('should return an empty array for empty prefix', () => {
        trie.addWord('fish');
        trie.addWord('fishing');

        const predictions = trie.predictWords('');
        expect(predictions).toEqual([]);
    });
    // More tests
    test('should return words with the same prefix', () => {
        trie.addWord('test');
        trie.addWord('testing');
        trie.addWord('tester');

        const predictions = trie.predictWords('te');
        expect(predictions).toEqual(expect.arrayContaining(['test', 'testing', 'tester']));
        expect(predictions.length).toBe(3);
    });
});

import AutoCompleteTrie from "./autoCompleteTrie.js";

const tree = new AutoCompleteTrie();

tree.addWord('true');
tree.addWord('abba');
tree.addWord('truth');
tree.addWord('trut');

console.log(tree);

console.log(tree.findWord('true'))
console.log(tree.findWord('truee'))
console.log(tree.findWord('abb'))
console.log(tree.findWord('abba'))
console.log(tree.findWord('abbaa'))


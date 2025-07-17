import AutoCompleteTrie from "./autoCompleteTrie.js";

const tree = new AutoCompleteTrie();

tree.addWord('true');
tree.addWord('abba');
tree.addWord('truth');
tree.addWord('trut');

console.log(tree);


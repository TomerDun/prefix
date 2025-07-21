import AutoCompleteTrie from "./autoCompleteTrie.js";

const tree = new AutoCompleteTrie();

tree.addWord('true');
tree.addWord('abba');
tree.addWord('truth');


console.log(tree.predictWords('t'));




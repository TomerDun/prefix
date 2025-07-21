export function validateWord(word) {    
    if (!word) throw new Error('Missing word parameter');
    return true;    
}
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetPosition = (text) => {
    return text
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((letter) => alphabet.indexOf(letter) + 1).join(' ');
}

console.log(alphabetPosition('Hello, how are YOU?'));
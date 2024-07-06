const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
const pigLatinize = (word) => {
    console.log(vowels.includes(word.charAt(0)));
    if (vowels.includes(word.charAt(0))) {
        return `${word}way`;
    }
    const removedChars = [];
    let remainingWord = word;
    const isFirstUpperCase = /^\p{Lu}/u.test(word);
    for (const index in word) {
        console.log(index, word, word.charAt(index), vowels.includes(word.charAt(index)));
        if (vowels.includes(word.charAt(index))) {
            if (!isFirstUpperCase) {
                console.log(remainingWord, removedChars);
                return `${remainingWord}${removedChars.join('')}ay`;
            }
            return `${remainingWord.charAt(0).toUpperCase()}${remainingWord.substring(1)}${removedChars.join('')}ay`;
        }
        removedChars.push(remainingWord.charAt(0).toLowerCase());
        remainingWord = remainingWord.substring(1);
    }

    return word;
};

let englishText = process.argv[2];
if (englishText.split(' ').join('') === englishText && process.argv.length != 3) {
    englishText = process.argv.splice(2).join(' ');
}

englishText = englishText.split(' ');

for (const index in englishText) {
    console.log(englishText[index]);
    englishText[index] = pigLatinize(englishText[index]);
    console.log(englishText[index]);
}

console.log(englishText);
englishText = englishText.join(' ');
console.log(englishText);

function longVowel(word) {
    const vowels = ["A", "E", "I", "O", "U"];
    let wordArray = word.split("");
    // here we are splitting the word that is passed and turning it into a list. 


    for (let i = 0; i < wordArray.length; i++) {
        const letter = wordArray[i];
        // this will iterate through the list and will access each letter of the word. 


        for (let v = 0; v < vowels.length; v++) {
            if (letter.toUpperCase() == vowels[v] && letter == wordArray[i - 1]) {
                // this if statement is changing each letter to an uppercase since the vowels array is uppercase and will check if the letter is a vowel
                // the second condition after the && and this will check if there two vowels beside one another, if so it will repeat 4
                wordArray[i] = letter.repeat(4);
            }
        }
    }
    console.log(wordArray.join(""));
}

longVowel("rude");
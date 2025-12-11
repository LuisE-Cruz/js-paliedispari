// Esercizo Palindroma

// Inserire una parola

let userWord = 'Anna'


// Funzioni

function wordReversed(word){
    let result = "";
    for(let i = word.length - 1; i >= 0; i--){
        result += word[i];
    }
    return result;
}

console.log(wordReversed(userWord));

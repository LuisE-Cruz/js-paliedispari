// Esercizo Palindroma


// Inserire una parola

let userWord = prompt("Inserisci una parola").toLowerCase();
let palindromeWord = false;

// Condizione per Palindroma o meno

if(wordReversed(userWord) === userWord){
    palindromeWord = true;
} 

// Funzioni

// Funzione per invertire la parola data

function wordReversed(word){
    let result = "";
    for(let i = word.length - 1; i >= 0; i--){
        result += word[i];
    }
    return result;
}

console.log(palindromeWord);

// Pari o Dispari

// Scelte dell'utente

let userBet = 'pari';


let numbUser = parseInt(prompt('Inserisci un numero tra 1 e 5'));


//Numero della CPU

const cpuNumber = rng(1,5);
console.log(cpuNumber);

// Operazioni
const numbSum = sum(cpuNumber, numbUser);
console.log(numbSum);


// Funzioni

// Funzione per creare numero random

function rng(min, max){
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

// Funzione per sommare

function sum(number1 ,number2){
    return number1 + number2
}

// Funzione Pari o Dispari

function oddEven(number){
    let result = "pari";
    if(number % 2 === 1){
        result = "dispari";
    }
    return result; 
}
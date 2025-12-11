// Pari o Dispari

// Scelte dell'utente

let userBet = 'pari';


let numbUser = '5';


//Numero della CPU

const cpuNumber = rng(1,5);

console.log(cpuNumber);



// Funzioni

// Funzione per creare numero random

function rng(min, max){
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
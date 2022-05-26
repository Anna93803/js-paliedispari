// Pari e Dispari

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numberRandomPc () {
    return Math.floor(Math.random() * 5 + 1);
}
const numeroPc = (numberRandomPc());
// console.log(numberRandomPc());

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function sumNumber (num1, num2) {
    
    let sum = num1 + num2;

    if( sum % 2 === 0) {
        console.log(`La somma dei numeri è PARI risultato: ${sum}`);
    }else {
        console.log(`La somma è DISPARI risultato: ${sum}`);
    }

    return sum;
}
// console.log(sumNumber(2, 6));

// L’utente sceglie pari o dispari tramite un prompt
let pariDispari = prompt("Pari o Dispari?");

while( pariDispari == "" || !isNaN(pariDispari)) {
    alert("Il campo non può restare vuoto e non può contenere numeri!!");
    pariDispari = prompt("Pari o Dispari?");
}

// L’utente inserisce anche un numero da 1 a 5.
let numberUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

while(isNaN(numberUtente)) {

    alert("attenzione inserisci un numero");
    numberUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

while(numberUtente > 5 || numberUtente < 1 ) {

    numberUtente = parseInt(prompt("Attenzione!! Inserisci un numero da 1 a 5"));
}

// Ho invocato la funzione somma e salvato dentro una variabile
const sumUtentePc = sumNumber(numberUtente, numeroPc);

console.log(`Il numero del PC è ${numeroPc}`);
console.log(`Il numero dell'utente è ${numberUtente}`);

// Dichiariamo chi ha vinto.
// Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer
if(pariDispari === "pari" && sumUtentePc % 2 === 0) { 
    alert("Ha vinto l'utente!!");

}else {
    alert("Ha vinto il PC!!");
}

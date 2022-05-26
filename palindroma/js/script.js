// Palindroma

// Creare una funzione per capire se la parola è palindroma
function parolaPalindroma (parola) {
    return parola.split("").reverse().join("");
    
}

// Chiedere all’utente di inserire una parola
const parolaUtente = prompt("Inserisci una parola");


// effettuare un controllo se la parola inserita dall'utente è palindroma oppure no
if ( parolaUtente === parolaPalindroma(parolaUtente) ) {
    alert(`La parola è Palindroma: ${parolaUtente}`);
}else {
    alert(`La parola NON è Palindroma: ${parolaUtente}`);
}


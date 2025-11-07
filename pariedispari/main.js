console.log("JS ok")

// FUNZIONI 

// Funzione numero casuale
function numeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione somma = pari/dispari
function isOdd(numero) {
    return (numero % 2 != 0);
}


// PROGRAMMA

// L'utente sceglie pari o dispari
let paridispariUtente = prompt("Scegli pari o dispari");
let paridispariComputer = "";

// Faccio un controllo sull'input dell'utente, se non valido scelgo pari per lui
if (paridispariUtente !== "pari" && paridispariUtente !== "dispari") {

    paridispariUtente = "pari";
    alert("Dovevi scegliere tra pari o dispari, sceglierò pari per te");
    console.log("L'utente ha inserito un input non valido, scelgo pari per lui");

} if (paridispariUtente === ("pari")) {

    paridispariComputer = "dispari";

} if (paridispariUtente === ("dispari")) {
    
    paridispariComputer = "pari";
}

// Il computer sceglie l'opposto della scelta dell'utente

// Mostriamo la scelta all'utente
alert(`Hai scelto ${paridispariUtente}`);
console.log("L'utente ha inserito un input valido:", paridispariUtente);
console.log(`Il computer ha scelto ${paridispariComputer}`)


// L'utente sceglie un numero da 1 a 5
let numeroUtente = prompt("Scegli un numero da 1 a 5");

// Faccio un controllo sull'input dell'utente, se non valido scelgo un numero a caso per lui
// Dovrebbe essere aggiunto un ulteriore passaggio per controllare se l'input inserito dall'utente sia un NaN
if (numeroUtente < 1 || numeroUtente > 5) {

    numeroUtente = numeroCasuale();
    alert(`Dovevi scegliere un numero compreso tra 1 e 5, sceglierò ${numeroUtente} per te`);
    console.log(`L'utente ha inserito un numero non valido, scelgo ${numeroUtente} per lui`);

}
// Mostriamo la scelta all'utente
alert(`Hai scelto ${numeroUtente}`);
console.log("L'utente ha inserito un input valido:", numeroUtente);

// Il computer genera un numero casuale
let numeroComputer = numeroCasuale();
console.log("Il computer sceglie un numero casuale:", numeroComputer)

let risultato = isOdd(numeroUtente + numeroComputer);



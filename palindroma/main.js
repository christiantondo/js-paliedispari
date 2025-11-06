console.log("JS ok")

let input = prompt("Inserisci una parola");
let inputReverse = "";

// inputReverse = input.split("").reverse().join("");

for (let i = input.length-1; i >= 0; i--) {
    const character = input.charAt[i];
    inputReverse += character;
}

if (input == inputReverse) {
    alert("Hai trovato un palindromo");
} else {
    alert("Non è un palindromo");
}
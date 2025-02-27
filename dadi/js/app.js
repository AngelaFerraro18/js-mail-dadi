
// Inizializzo due variabili che vanno ad indicare l'umano e il computer con un valore numerico random tra 1 e 6
let userDice = Math.floor(6 * Math.random()) + 1;
let computerDice = Math.floor(6 * Math.random()) + 1;

// vado a scrivere le possibilità che possono verificarsi
if (userDice > computerDice) {
    console.log(`Il valore è: ${userDice}. Il vincitore è User!`);
    console.log(`Il valore è: ${computerDice}. Mi dispiace, Computer ha perso!`);

} else if (computerDice > userDice) {
    console.log(`Il valore è: ${computerDice}. Il vincitore è Computer!`);
    console.log(`Il valore è: ${userDice}. Mi dispiace, hai perso!`);

} else {
    console.log('I numeri sono uguali, quindi è parità!');
}


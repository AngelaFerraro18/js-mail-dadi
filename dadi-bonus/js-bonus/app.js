
//creo il prompt per chiedere all'utente di scrivere un numero
let userDicePrompt = parseInt(prompt('Scrivi un numero e prova a battere il computer!'));

//scrivo delle condizioni per far in modo che l'utente non scriva numeri sbagliati o altro
const numberValidation = userDicePrompt > 0 && userDicePrompt < 7;
const numberCheck = !isNaN(userDicePrompt);
const correctNumbers = numberValidation && numberCheck;

//inizializzo la variabile per il computer con un valore randomico compreso tra 1 e 6
const computerDice = Math.floor(6 * Math.random()) + 1;

//faccio le mie verifiche, solo se l'utente immetterà il dato corretto, l'utente potrà giocare, altrimenti avrà un errore
if (correctNumbers) {

    //scrivo i vari casi possibili per determinare il vincitore
    if (userDicePrompt > computerDice) {
        console.log(`Il valore è: ${userDicePrompt}. Il vincitore è User!`);
        console.log(`Il valore è: ${computerDice}. Mi dispiace, Computer ha perso!`);

    } else if (computerDice > userDicePrompt) {
        console.log(`Il valore è: ${computerDice}. Il vincitore è Computer!`);
        console.log(`Il valore è: ${userDicePrompt}. Mi dispiace, hai perso!`);

    } else {
        console.log('I numeri sono uguali, quindi è parità!');
    }

} else {
    console.error('I dati inseriti non sono corretti');
}




// let computerDice = Math.floor(6 * Math.random()) + 1;

// // vado a scrivere le possibilità che possono verificarsi
// if (userDicePrompt > computerDice) {
//     console.log(`Il valore è: ${userDicePrompt}. Il vincitore è User!`);
//     console.log(`Il valore è: ${computerDice}. Mi dispiace, Computer ha perso!`);

// } else if (computerDice > userDicePrompt) {
//     console.log(`Il valore è: ${computerDice}. Il vincitore è Computer!`);
//     console.log(`Il valore è: ${userDicePrompt}. Mi dispiace, hai perso!`);

// } else {
//     console.log('I numeri sono uguali, quindi è parità!');
// }


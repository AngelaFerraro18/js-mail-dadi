
// creo una lista delle email dei partecipanti
const emailList = ['angela.ferraro@gmail.com', 'anna_rossi@gmail.com', 'pinopaletta@hotmail.com', 'manuele.bianchi@gmail.com', 'carmelopatti@alice.com'];

// chiedo all'utente di scrivere la propria email
const writeEmail = prompt('Ciao! Per favore, digita la tua email:');
console.log(writeEmail);

// creo dei messaggi da stampare in caso di successo e fallimento dell'azione
let successEmail = 'Ottimo! Sei presente nella lista della festa, benvenuto!';
let errorEmail = 'Mi dispiace, la tua email non è presente nella lista!';



// creo un ciclo for per controllare che l'email scritta dall'utente sia presente nella lista

let isEmailPresent = false;

for (let i = 0; i < emailList.length; i++){
    
    if (emailList[i] === writeEmail){
        isEmailPresent = true;
    }
}

if (isEmailPresent){
    
    console.log(successEmail);
} else {

    console.log(errorEmail);
}

# Esercizio 1: Crea una lista di email

**Consegna**

Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).

---

*Ragionamento*

- devo creare una lista di email
- chiedo all'utente la sua email
- devo controllare che sia presente nella lista
- passando il controllo, se è un successo, comparirà il messaggio di successo sulla console

*Pseudocodice*

- creo una variabile emailList a cui assegno un array ---> che sarà il contenitore della mia lista
- all'interno dell'array andrò a inserire le email dei partecipanti alla festa
- per controllare la presenza dell'email nella lista, userò un ciclo for
- SE l'email è presente nella lista
    - stamperò il messaggio di successo
- ALTRIMENTI 
    - stamperò il messaggio di insuccesso dell'operazione 
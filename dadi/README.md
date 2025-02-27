# Gioco dei dadi

**Consegna**

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*Bonus*
Invece di generare il numero random per l'utente, chiedilo con un prompt!

---

*Ragionamento*

- devo generare due numeri random, uno per il giocatore e uno per il computer
- vince chi ha il numero più alto

*Pseudocodice*

- andrò a creare due variabili, una per giocatore
- SE il valore del primo giocatore sarà maggiore dell'altro
    - vincerà il primo giocatore e verrà visualizzato il messaggio che decreta la vittoria e il punteggio dell'avversario
- SE il valore del secondo giocatore sarà maggiore dell'altro
    - vincerà il primo giocatore e verrà visualizzato il messaggio che decreta la vittoria e il punteggio dell'avversario
- ALTRIMENTI 
    - i numeri sono uguali e si avrà una parità

---

*Bonus*

Per il bonus:

- creo un prompt per chiedere all'utente di scrivere un numero
- effettuo i miei controlli per evitare che l'utente scriva altro non richiesto
- dichiaro la variabile  randomica compresa tra 1 e 6 per il computer
- SE l'utente ha immesso i dati corretti, il gioco inizierà
    - SE il valore del primo giocatore sarà maggiore dell'altro
    - vincerà il primo giocatore e verrà visualizzato il messaggio che decreta la vittoria e il punteggio dell'avversario
    - SE il valore del secondo giocatore sarà maggiore dell'altro
    - vincerà il primo giocatore e verrà visualizzato il messaggio che decreta la vittoria e il punteggio dell'avversario
    - ALTRIMENTI 
    - i numeri sono uguali e si avrà una parità
- ALTRIMENTI l'utente incorrerà in un errore
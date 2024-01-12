## TRACCIA
```
Ciao ragazzi,
Esercizio di oggi: JS Mail & Dadi
nome repo: js-mail-dadi

1) Mail:
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

2) Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
- Che ci sia un array da qualche parte?
- Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
```

### SVOLGIMENTO

1) Mail:
- Creo lista delle mail accettate
- Chiedo di inserire la mail
- Controllo SE è presente nella lista
    - Stampo esito positivo
- ALTRIMENTI
    - Stampo esito negativo

2) Dadi:
- Creo un generatore casuale di numeri da 1 a 6 per l'utente
- Creo un generatore casuale di numeri da 1 a 6 per il computer
- SE l'utente ha il numero più alto del computer
    - Stampo la vittoria dell'utente
- ALTRIMENTI
    - Stampo la vittoria del computer

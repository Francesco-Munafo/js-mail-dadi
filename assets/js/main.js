/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/

// Sviluppo la scelta dei dadi

let playerChoice = Math.floor(Math.random() * 6) + 1;
console.log('Scelta per il giocatore' + " " +playerChoice);
let computerChoice = Math.floor(Math.random() * 6) + 1;
console.log('Scelta per il computer' + " " +computerChoice);



if (playerChoice < computerChoice) {
    console.log('CPU wins!');
} else if (playerChoice > computerChoice) {
    console.log('You win!');
} else {
    console.log('Draw');
}
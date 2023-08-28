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
console.log('Scelta per il giocatore' + " " + playerChoice);
let computerChoice = Math.floor(Math.random() * 6) + 1;
console.log('Scelta per il computer' + " " + computerChoice);

// Stampo i puntini sui dadi NOTA*** Molto complesso attualmente in quanto bisognerebbe cambiare manualmente la position dei puntini ogni volta e poi far aggiungere i div

// let userDice = document.querySelector('.user-dice')

// const computerDice = document.querySelector('.cpu-dice')


const result = document.getElementById('result')

if (playerChoice < computerChoice) {
    result.innerHTML = 'CPU wins'
    console.log('CPU wins!');

} else if (playerChoice > computerChoice) {
    result.innerHTML = 'You win!'
    console.log('You win!');

} else {
    result.innerHTML = 'Draw!'
    console.log('Draw');
}

// ***Mi limito a far comparire il numero sul dado


const userDiceNumber = document.querySelector('.dot-1');
userDiceNumber.innerHTML = playerChoice;

const cpuDiceNumber = document.querySelector('.dot-2');
cpuDiceNumber.innerHTML = computerChoice;


// Email
// Creo un array con varie email



// Creo

const submit = document.getElementById("submit");
const whitelistedEmails = ['email1@email.com', 'email2@email.com', 'email3@email.com', 'email4@email.com', 'email5@email.com'];
const userEmail = document.getElementById('user-mail').value;
const whitelistCheck = document.getElementById('whitelist-result')

submit.addEventListener('click',
    function () {
        for (let i = 0; i < whitelistedEmails.length; i++) {
            const email = whitelistedEmails[i];

            if (userEmail === email) {
                whitelistCheck.innerHTML = "Bentornato" + " " + userEmail;
                console.log("Bentornato");
            }


        }
        whitelistCheck.innerHTML = "You're not in whitelist"
    }
)



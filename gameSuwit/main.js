const player = document.querySelector('#playRes');
const com = document.querySelector('#compRes');
const result = document.querySelector('#resultMatch');
const papper = document.querySelector('.kertas');
const rock = document.querySelector('.batu');
const scisscors = document.querySelector('.gunting');


let compRes = 0;
let playRes = 0;

let playerChoices;
let computerChoices;
com.innerHTML = compRes;
player.innerHTML = playRes;

function getComputerChoices() {
    const choices = ["kertas", "batu", "gunting"];
    const compRand = Math.floor(Math.random() * 3);
    return choices[compRand];
}

function game(playerChoices) {
    computerChoices = getComputerChoices();
    // console.log(playerChoices+computerChoices);
    switch (playerChoices + " " + computerChoices) {
        case "kertas batu":
        case "batu gunting":
        case "gunting kertas":
            win();
            break;

        case "kertas kertas":
        case "batu batu":
        case "gunting gunting":
            draw();
            break;

        default:
            lose();
    }
}

function win() {
    playRes++;
    player.innerHTML = playRes;
    result.innerHTML = "you win!😁";
}
function lose() {
    compRes++;
    com.innerHTML = compRes;
    result.innerHTML = "sorry, you lose😢";
}
function draw() {
    result.innerHTML = "draw huh😩";
}
// kertas.addEventListener('click', function() {
//     console.log('ok')
// })
papper.addEventListener('click', function () {
    game("kertas");
});
rock.addEventListener('click', function () {
    game("batu");
})
scisscors.addEventListener('click', function () {
    game("gunting");
})



const darkMode = document.querySelector('#darkModeButton');
const darkModeButton = document.querySelector('.dark-mode-button');
const playerBanner = document.querySelector('#player');
const comBanner = document.querySelector('#computer');
const resultBanner = document.querySelector('#result');

darkModeButton.addEventListener('click', function() {
    darkModeButton.classList.toggle('dark-mode-button-on');
    darkModeButton.classList.toggle('darkBanner');
    document.body.classList.toggle('dark-mode');
    playerBanner.classList.toggle('playerDark');
    comBanner.classList.toggle('comDark');
    resultBanner.classList.toggle('darkBanner');
})
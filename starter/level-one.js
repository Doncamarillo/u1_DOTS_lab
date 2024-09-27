
const dot = document.querySelector('.js-ball');
const winner = document.querySelector('.level-winner');
const scoreCounter = document.querySelector('.js-score'); 
const winningSong = document.querySelector('.jsWinningSound');

let score = 0; 

dot.addEventListener('click', () => {
    score += 10; 
    scoreCounter.textContent = score; 

    if (score >= 100) {
        console.log("Level 1 Complete!");
        winner.style.opacity = 1;
        winningSong.play();
    }})

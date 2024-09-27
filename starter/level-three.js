

const dots = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score'); 
const winner = document.querySelector('.level-winner'); 
const winningSong = document.querySelector('.jsWinningSound');


let score = 0; 


function dotClick(e) {
    (e.target.classList.contains ('js-ball'))
    score += parseInt(e.target.dataset.increment)

    scoreDisplay.textContent = score;
    

    if (score >= 100) { 
        console.log("You've beaten the level!"); 
        winner.style.opacity = 1; 
        winningSong.play();
    }
}


dots.forEach(dot => {
    dot.addEventListener('click', dotClick);
   
});

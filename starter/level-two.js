

const dots = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score'); 
const winner = document.querySelector('.level-winner'); 
const winningSong = document.querySelector('.jsWinningSound');


let score = 0; 


function dotClick() {
    score += 10; 
    scoreDisplay.innerText = score ; 

    if (score >= 100) { 
        console.log("You've beaten the level!"); 
        winner.style.opacity = 1; 
        winningSong.play();
    }
}

// Add event listener to each ball
dots.forEach(dot => {
    dot.addEventListener('click', dotClick);
});

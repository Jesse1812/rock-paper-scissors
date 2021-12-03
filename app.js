let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  let choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById('r');
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats 
  ${convertToWord(computerChoice)}${smallCompWord}. You win 🔥`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function () {
    userChoice_div.classList.remove('green-glow');
  }, 1000);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById('p');
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} lose to 
  ${convertToWord(computerChoice)}${smallCompWord}. You lost 😱 `;
  userChoice_div.classList.add('red-glow');
  setTimeout(function () {
    userChoice_div.classList.remove('red-glow');
  }, 1000);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  const userChoice_div = document.getElementById('s');
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals 
  ${convertToWord(computerChoice)}${smallCompWord}. It's a draw 🥝 `;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function () {
    userChoice_div.classList.remove('gray-glow');
  }, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win();
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose();
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw();
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    game('r');
  });
  paper_div.addEventListener('click', function () {
    game('p');
  });
  scissors_div.addEventListener('click', function () {
    game('s');
  });
}
main();

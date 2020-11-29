const cells = document.querySelectorAll('.cell');
let goblin;
const startGame = document.querySelector('.start-game');
let start = false;
const container = document.querySelector('.container');
let interval;

// eslint-disable-next-line consistent-return
function getNowGoblinPosition() {
  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i].firstChild) {
      return i;
    }
  }
}

function getRandomCellNumber() {
  const arr = [];
  for (let i = 0; i < cells.length; i += 1) {
    if (getNowGoblinPosition() !== i) {
      arr.push(i);
    }
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

function goblinMove() {
  cells[getRandomCellNumber()].appendChild(goblin);
}

startGame.addEventListener('click', () => {
  if (!start) {
    start = true;
    goblin = document.createElement('div');
    goblin.classList.add('goblin');
    cells[getRandomCellNumber()].appendChild(goblin);
    interval = setInterval(goblinMove, 1000);
  }
});

container.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  if (event.target.classList.contains('goblin')) {
    start = false;
    // eslint-disable-next-line no-alert
    alert('Вы победитель!');
    cells[getNowGoblinPosition()].removeChild(goblin);
    clearInterval(interval);
  }
});

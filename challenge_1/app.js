
var current = 'X';
var currentPath = './lib/x.png';
var currentClass = 'class-x';
function change() {

  if (current === 'X') {
    current = 'O';
    currentPath = './lib/o.png';
    currentClass = 'class-o';
  } else {
    current = 'X';
    currentPath = './lib/x.png';
    currentClass = 'class-x';
  }
}
var storage = {
  X: [],
  O: []
}

var winner = 'X';

var xWinsCounter = 0;
var oWinsCounter = 0;

var player1 = 'player1: '
var player1 = 'player2: '

player1 = prompt('Enter Player 1\'s names')
player2 = prompt('Enter Player 2\'s names')
document.getElementById('player1').innerHTML = `X - ${player1}: `;
document.getElementById('player2').innerHTML = `O - ${player2}: `;

//declare wins
var win1 = ['row1-col1', 'row1-col2', 'row1-col3'];
var win2 = ['row2-col1', 'row2-col2', 'row2-col3'];
var win3 = ['row3-col1', 'row3-col2', 'row3-col3'];
var win4 = ['row1-col1', 'row2-col1', 'row3-col1'];
var win5 = ['row1-col2', 'row2-col2', 'row3-col2'];
var win6 = ['row1-col3', 'row2-col3', 'row3-col3'];
var win7 = ['row1-col1', 'row2-col2', 'row3-col3'];
var win8 = ['row1-col3', 'row2-col2', 'row3-col1'];

var theBoard = ['row1-col1', 'row1-col2', 'row1-col3', 'row2-col1', 'row2-col2', 'row2-col3', 'row3-col1', 'row3-col2', 'row3-col3'];

var isWin = false;

var message = document.getElementById('message');
var node = document.createTextNode(`Game Over`);

var board = document.getElementById('board')
board.addEventListener('click', function (event) {
  console.log(current)
  var id = event.target.id
  if ((!isWin) && (storage['X'].indexOf(id) === -1 && storage['O'].indexOf(id)) === -1) {
    document.getElementById(id).setAttribute('class', currentClass);
    storage[current].push(id)
    if (
      win1.every(elem => storage['X'].includes(elem)) ||
      win2.every(elem => storage['X'].includes(elem)) ||
      win3.every(elem => storage['X'].includes(elem)) ||
      win4.every(elem => storage['X'].includes(elem)) ||
      win5.every(elem => storage['X'].includes(elem)) ||
      win6.every(elem => storage['X'].includes(elem)) ||
      win7.every(elem => storage['X'].includes(elem)) ||
      win8.every(elem => storage['X'].includes(elem))
    ) {
      message.appendChild(node);
      isWin = true;
      winner = 'X';
      xWinsCounter++;
    } else if (
      win1.every(elem => storage['O'].includes(elem)) ||
      win2.every(elem => storage['O'].includes(elem)) ||
      win3.every(elem => storage['O'].includes(elem)) ||
      win4.every(elem => storage['O'].includes(elem)) ||
      win5.every(elem => storage['O'].includes(elem)) ||
      win6.every(elem => storage['O'].includes(elem)) ||
      win7.every(elem => storage['O'].includes(elem)) ||
      win8.every(elem => storage['O'].includes(elem))
    ) {
      message.appendChild(node);
      isWin = true;
      winner = 'O';
      oWinsCounter++;
    }
    change()
  }
});

function resetGame() {
  for (key in storage) {
    storage[key] = []
  }

  theBoard.forEach(function (element) {
    var theClasses = document.getElementById(element).classList;
    if (theClasses.contains('class-x')) {
      theClasses.remove('class-x');
    }
    if (theClasses.contains('class-o')) {
      theClasses.remove('class-o');
    }
  });


  if (winner === 'X') {
    current = 'X';
    currentPath = './lib/x.png';
    currentClass = 'class-x';
  } else {
    current = 'O';
    currentPath = './lib/o.png';
    currentClass = 'class-o';
  }
  if (isWin) {
    message.removeChild(node);
  }
  console.log(xWinsCounter)
  document.getElementById('xWins').innerHTML = xWinsCounter;
  document.getElementById('oWins').innerHTML = oWinsCounter;

  isWin = false;
}



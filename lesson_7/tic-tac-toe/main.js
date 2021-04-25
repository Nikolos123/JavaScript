const equals3 = (a, b, c) => {
  return (a == b && b == c && a != '');
}

const checkWinner = (model) => {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(model[i][0], model[i][1], model[i][2])) {
      winner = model[i][0];
    }
  }  

  // vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(model[0][i], model[1][i], model[2][i])) {
      winner = model[0][i];
    }
  }

  // diagonal
  if (equals3(model[0][0], model[1][1], model[2][2])) {
    winner = model[0][0];
  }
  if (equals3(model[0][2], model[1][1], model[2][0])) {
    winner = model[0][2];
  }


  return winner;
}

const checkDraw = (model)=> {
      
      for (let i = 0; i <3; i++){
         for(let j = 0; j <3; j++){
           if (model[i][j] == ""){
             return false
           }
      }
}
    return true
}
const game = (X) => {
  const model = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const playerX = 'X';
  const playerO = 'O';
  let currentPlayer = playerX;

  const $game = document.querySelector('#game');
  const $table = document.createElement('table');

  for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    $tr.dataset.index = i;

    for (let j = 0; j < 3; j++) {
      const $td = document.createElement('td');
      $td.dataset.index = j;
      $tr.appendChild($td);
    }

    $table.appendChild($tr);
  }

  $game.appendChild($table);

  $table.addEventListener('click', (e) => {
    const row = e.target.parentNode.dataset.index;
    const column = e.target.dataset.index;

    // debugger
    // 2. check if td assigned
    if (e.target.innerHTML == ""){
    model[row][column] = currentPlayer;
    e.target.innerHTML = currentPlayer;
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
  }
    

    const Draw = checkDraw(model);
    const winner = checkWinner(model);
    if (winner) {
      alert(`Winner: ${winner}`);
      window.location.reload();
    }
    else if  (Draw){
      alert(`Drawn beetwen: ${playerO} and ${playerX}`)
      window.location.reload();
    } 
  });
}

window.onload = () => {
  game('X');
};

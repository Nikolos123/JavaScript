
function number(i, doc, text, j) {

  if (i == 0 & j == 0) {
    doc.className = text;
    doc.innerHTML = '1'
  }

  /* figure_other(i,doc,color_table) */

}

function figure_pawn(i, doc, color_table) {

  if (i == 1 || i == 6) {
    doc.className = color_table;
    doc.innerHTML = 'Pawn'
  }
  else {
    doc.className = color_table;
  }
  /* figure_other(i,doc,color_table) */

}

function figure_other(i, doc, color_table, j) {

  if (i == 0 & j == 0 || i == 0 & j == 7 || i == 7 & j == 0 || i == 7 & j == 7) {
    doc.className = color_table;
    doc.innerHTML = 'Rook'
  }
  else if (i == 0 & j == 1 || i == 0 & j == 6 || i == 7 & j == 1 || i == 7 & j == 6) {
    doc.className = color_table;
    doc.innerHTML = 'Knight';
  }
  else if (i == 0 & j == 2 || i == 0 & j == 5 || i == 7 & j == 2 || i == 7 & j == 5) {
    doc.className = color_table;
    doc.innerHTML = 'Bishop';
  }
  else if (i == 0 & j == 3 || i == 7 & j == 3) {
    doc.className = color_table;
    doc.innerHTML = 'King';
  }
  else if (i == 0 & j == 4 || i == 7 & j == 4) {
    doc.className = color_table;
    doc.innerHTML = 'Quin';
  }
}

function drawBoard() {

  let board = document.querySelector('.board');

  let block;

  // let text_block;

  let flag = true; // белая-черная клетка

  block = document.createElement('div');
  /* block.className='blocknumber'; */
  board.appendChild(block);
  for (let i = 0; i < 8; i++) {



    for (let j = 0; j < 8; j++) {



      if (j == 0)

        flag = !flag;



      block = document.createElement('div');
      // text_block = document.createTextNode('div');


      if (flag) {

        number(i, block, 'block1 text', j);
        figure_other(i, block, 'block black text', j);
        figure_pawn(i, block, 'block black text');
      }
      else {
        figure_other(i, block, 'block white text', j)
        figure_pawn(i, block, 'block white text');
      }

      //вывел

      board.appendChild(block);


      //поменял с черного на белое

      flag = !flag;

    }

  }

}



drawBoard();  
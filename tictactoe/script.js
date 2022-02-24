let cells = document.getElementsByClassName("cell");
let sign = "X";
let msg = document.querySelector(".msg");
let msg_text;
let overlay = document.querySelector(".overlay");
let resetBtn = document.querySelector("#resetBtn");
let winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], //orizzontali
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], //verticali
  [0, 4, 8],
  [2, 4, 6] //diagonali
];

function checkStatus() {
  let finished = false;
  for (let i = 0; i < winningPositions.length; i++) {
    if (cells[winningPositions[i][0]].innerHTML == cells[winningPositions[i][1]].innerHTML && cells[winningPositions[i][1]].innerHTML == cells[winningPositions[i][2]].innerHTML && cells[winningPositions[i][0]].innerHTML != "") {
      msg_text = `Hai vinto ${sign}`;
      finished = true;
    }
  }
  let isComplete = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "") {
      isComplete = false;
    }
  }

  if (isComplete && !finished) {
    msg_text = `Pareggio`;
    finished = true;
  }

  if (finished) {
    overlay.style.display = "block";
    msg.innerHTML = msg_text;
  }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (cells[i].innerHTML == "") {
      cells[i].innerHTML = sign;

      checkStatus();
      sign == "X" ? sign = "O" : sign = "X";

      cells[i].classList.remove("preview-effect");
      for (let i = 0; i < cells.length; i++) {
        cells[i].dataset.sign = sign;
      }
    }
  });
}

resetBtn.addEventListener("click", function(){
	sign = "X";
  overlay.style.display = "none";
  for(let i = 0; i < cells.length; i++){
  	cells[i].innerHTML = "";
    cells[i].dataset.sign = "X";
    cells[i].classList.add("preview-effect");
  }
});
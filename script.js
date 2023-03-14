const gameBoard = (function () {
  const x = "X";
  const o = "O";
  const e = "";
  const gameArr = [e, e, e, e, e, e, e, e, e];

  const gameContainer = document.getElementById("gamecontainer");
  let playerOneTurn = true;
  const xDiv = document.getElementById("x");
  xDiv.classList.add("active");
  const oDiv = document.getElementById("o");

  const winner = document.getElementById("winner");
  function checkWinner() {
    // check horizontal rows
    for (let i = 0; i < 9; i += 3) {
      if (
        gameArr[i] !== e &&
        gameArr[i] === gameArr[i + 1] &&
        gameArr[i] === gameArr[i + 2]
      ) {
        winner.textContent = `${gameArr[i]} wins`;
        return;
      }
    }

    // check vertical columns
    for (let i = 0; i < 3; i++) {
      if (
        gameArr[i] !== e &&
        gameArr[i] === gameArr[i + 3] &&
        gameArr[i] === gameArr[i + 6]
      ) {
        winner.textContent = `${gameArr[i]} wins`;
        return;
      }
    }

    // check diagonal lines
    if (
      gameArr[0] !== e &&
      gameArr[0] === gameArr[4] &&
      gameArr[0] === gameArr[8]
    ) {
      winner.textContent = `${gameArr[0]} wins`;
      return;
    }
    if (
      gameArr[2] !== e &&
      gameArr[2] === gameArr[4] &&
      gameArr[2] === gameArr[6]
    ) {
      winner.textContent = `${gameArr[2]} wins`;
      return;
    }

    // check for tie
    if (!gameArr.includes(e)) {
      console.log("Tie game");
      winner.textContent = "Tie";
      return;
    }
  }

  gameArr.forEach((value, index) => {
    const div = document.createElement("div");
    div.innerText = value;
    gameContainer.appendChild(div);
    div.addEventListener("click", function () {
      if (gameArr[index] === e) {
        if (playerOneTurn) {
          gameArr[index] = playerOne.symbol;
          playerOneTurn = false;
          xDiv.classList.remove("active");
          oDiv.classList.add("active");
          checkWinner();
        } else {
          gameArr[index] = playerTwo.symbol;
          playerOneTurn = true;
          xDiv.classList.add("active");
          oDiv.classList.remove("active");
          checkWinner();
        }
        div.innerText = gameArr[index];
      }
    });
  });

  return {
    gameArr,
    x,
    o,
  };
})();

const playerFactory = (name, symbol) => {
  const sayHello = () => console.log("hello!");
  return { name, symbol, sayHello };
};

const playerOne = playerFactory("Player 1", "X");
const playerTwo = playerFactory("Player 2", "O");

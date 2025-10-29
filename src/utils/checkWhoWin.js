export function checkWhoWin(board) {
  for (let row = 0; row < 3; row++) {
    {
      if (
        board[row][0] === board[row][1] &&
        board[row][1] === board[row][2] &&
        board[row][0] !== null
      ) {
        const winCells = [
          [row, 0],
          [row, 1],
          [row, 2],
        ];
        return { player: board[row][0], winCells };
      }
    }
  }
  for (let col = 0; col < 3; col++) {
    {
      if (
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col] &&
        board[0][col] !== null
      ) {
        const winCells = [
          [0, col],
          [1, col],
          [2, col],
        ];
        return { player: board[0][col], winCells };
      }
    }
  }

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== null
  ) {
    const winCells = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    return { player: board[0][0], winCells };
  }

  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== null
  ) {
    const winCells = [
      [0, 2],
      [1, 1],
      [2, 0],
    ];
    return { player: board[0][2], winCells };
  }
  return null;
}

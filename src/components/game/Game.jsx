import GameBoard from "./game_board/GameBoard.jsx";
import Score from "./score/Score.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  GAME_STATE,
  makeMove,
  newRound,
  restartGame,
} from "../../store/gameSlice.js";

function Game() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game);

  const onMakeMove = (rowIndex, columnIndex, player) => {
    dispatch(
      makeMove({
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        player: player,
      }),
    );
  };

  const onNewRound = () => {
    dispatch(newRound());
  };

  const onRestartGame = () => {
    dispatch(restartGame());
  };

  return (
    <div>
      <GameBoard
        firstPlayer={state.firstPlayer}
        cpuPlayerActive={state.cpuPlayerActive}
        isXTurn={state.isXTurn}
        restartBoard={onRestartGame}
        gameResult={state.gameResult}
        board={state.board}
        makeMove={onMakeMove}
        winCells={state.winningCombination}
        winResult={state.roundResult}
      />
      {state.gameState === GAME_STATE.ROUND_SUMMARY && (
        <Score
          firstPlayer={state.firstPlayer}
          restartBoard={onNewRound}
          restartGame={onRestartGame}
          cpuPlayerActive={state.cpuPlayerActive}
          roundResult={state.roundResult}
        />
      )}
    </div>
  );
}

export default Game;

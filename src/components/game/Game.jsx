import GameBoard from "./game_board/GameBoard.jsx";
import Score from "./score/Score.jsx";
import {useDispatch, useSelector} from "react-redux";
import {GAME_STATE, makeMove, newRound, restartGame} from "../../store/gameSlice.js";

function Game () {
    const dispatch = useDispatch()
    const gameState = useSelector((state) => state.game.gameState)
    const firstPlayer = useSelector((state) => state.game.firstPlayer)
    const cpuPlayerActive = useSelector((state) => state.game.cpuPlayerActive)
    const isXTurn = useSelector((state) => state.game.isXTurn)
    const board = useSelector((state) => state.game.board)
    const winningCombination = useSelector((state) => state.game.winningCombination)
    const gameResult = useSelector((state) => state.game.gameResult)
    const roundResult = useSelector((state) => state.game.roundResult)

    const onMakeMove = (rowIndex, columnIndex, player) => {
        dispatch(makeMove({rowIndex: rowIndex, columnIndex: columnIndex, player: player}))
    }

    const onNewRound = () => {
        dispatch(newRound())
    }

    const onRestartGame = () => {
        dispatch(restartGame())
    }

    return (
        <div>
            <GameBoard
                firstPlayer={firstPlayer}
                cpuPlayerActive={cpuPlayerActive}
                isXTurn={isXTurn}
                restartBoard={onRestartGame}
                gameResult={gameResult}
                board={board}
                makeMove={onMakeMove}
                winCells={winningCombination}
                winResult={roundResult}
            />
            {gameState === GAME_STATE.ROUND_SUMMARY && <Score
                firstPlayer={firstPlayer}
                restartBoard={onNewRound}
                restartGame={onRestartGame}
                cpuPlayerActive={cpuPlayerActive}
                roundResult={roundResult}
            />}
        </div>
    )
}

export default Game
import './App.css'
import GameBoard from "./components/game_board/GameBoard.jsx";
import Menu from "./components/menu/Menu.jsx";
import Score from "./components/score/Score.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setFirstPlayer, startGame, restartGame, makeMove, newRound} from "./store/gameSlice.js";

function App() {
    const dispatch = useDispatch()
    const firstPlayer = useSelector((state) => state.game.firstPlayer)
    const cpuPlayerActive = useSelector((state) => state.game.cpuPlayerActive)
    const gameInProgress = useSelector((state) => state.game.gameInProgress)
    const isXTurn = useSelector((state) => state.game.isXTurn)
    const board = useSelector((state) => state.game.board)
    const winningCombination = useSelector((state) => state.game.winningCombination)
    const winningPlayer = useSelector((state) => state.game.winningPlayer)
    const gameResult = useSelector((state) => state.game.gameResult)
    const gameOver = useSelector((state) => state.game.gameOver)
    const roundResult = useSelector((state) => state.game.roundResult)


    const onStartGame = (playWithCpu) => {
        dispatch(startGame(playWithCpu))
    }

    const onMakeMove = (rowIndex, columnIndex, player) => {
        dispatch(makeMove({rowIndex: rowIndex, columnIndex: columnIndex, player: player}))
    }

    const onChoosePlayer = (user) => {
        dispatch(setFirstPlayer(user));
    }

    const onNewRound = () => {
        dispatch(newRound())
    }

    const onRestartGame = () => {
        dispatch(restartGame())
    }

    return (
        <>
            <div className="container">
                {!gameInProgress &&
                    <Menu
                        choosePlayer={onChoosePlayer}
                        firstPlayer={firstPlayer}
                        startGame={onStartGame}/>}
                {gameInProgress &&
                    <GameBoard
                        firstPlayer={firstPlayer}
                        cpuPlayerActive={cpuPlayerActive}
                        isXTurn={isXTurn}
                        restartBoard={onRestartGame}
                        gameResult={gameResult}
                        board={board}
                        makeMove={onMakeMove}
                        winCells={winningCombination}
                        winResult={winningPlayer}
                    />}
                {gameOver && <Score
                    firstPlayer={firstPlayer}
                    restartBoard={onNewRound}
                    restartGame={onRestartGame}
                    cpuPlayerActive={cpuPlayerActive}
                    winResult={winningPlayer}
                    roundResult={roundResult}
                />}
            </div>
        </>
    )
}

export default App

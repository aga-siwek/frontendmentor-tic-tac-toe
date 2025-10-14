import './App.css'
import {useState, useEffect} from 'react'
import GameBoard from "./components/game_board/GameBoard.jsx";
import PickPlayer from "./components/pick_player/PickPlayer.jsx";
import Score from "./components/score/Score.jsx";
import {checkWhoWin} from "./utils/checkWhoWin.js";
import {checkIsFullBoard} from "./utils/checkIsFullBoard.js";
import {makeCpuMove} from "./utils/makeCpuMove.js";
import {minMaxCpuMove} from "./utils/minMaxCpuMove.js";

function App() {

    const [firstPlayer, setFirstPlayer] = useState("o");
    const [cpuPlayerActive, setCpuPlayerActive] = useState(false);
    const [isXTurn, setIsXTurn] = useState(true);
    const [board, setBoard] = useState(
        [
            [null, null, null],
            [null, null, null],
            [null, null, null]])

    const [winningCombination, setWinningCombination] = useState()
    const [winningPlayer, setWinningPlayer] = useState("")
    const [gameResult, setGameResult] = useState({
        "x": 0,
        "o": 0,
        "Ties": 0
    })
    const [gameOver, setGameOver] = useState(false);
    const [gameInProgress, setGameInProgress] = useState(false);
    const [roundResult, setRoundResult] = useState(null);


    const startGame = (playWithCpu) => {
        setCpuPlayerActive(playWithCpu)
        setGameInProgress(true);
    }

    const makeMove = (rowIndex, columnIndex, player) => {
        setBoard(prev => {
            const newBoard = prev.map(row => [...row]);
            newBoard[rowIndex][columnIndex] = player;
            return newBoard;
        })
        setIsXTurn(!isXTurn)
    }

    const choosePlayer = (user) => {
        setFirstPlayer(user)
        return firstPlayer
    }

    const restartBoard = () => {
        setBoard([
            [null, null, null],
            [null, null, null],
            [null, null, null]])
        setIsXTurn(() => true)
        setGameOver(() => false)
        setWinningCombination(null)
        setWinningPlayer("")
        setRoundResult(null)
    }

    const restartGame = () => {
        restartBoard()
        setGameResult({
            "x": 0,
            "o": 0,
            "Ties": 0
        })
        setGameInProgress(false)
    }

    useEffect(() => {
        const winData = checkWhoWin(board);
        const isBoardFull = checkIsFullBoard(board)

        // if player won
        if (winData != null && !gameOver) {
            setWinningCombination(winData.winCells)
            setWinningPlayer(winData.player)
            setGameOver(true);
            setGameResult((prevGameResult) => ({
                ...prevGameResult,
                [`${winData.player}`]: prevGameResult[winData.player] + 1
            }));
            setRoundResult(winData.player)
            console.log("round result from ue win result", winData.player)
            console.log("round result from ue", winData.player)
            return;
        }
        //if nobody won

        if (isBoardFull && !gameOver) {
            setGameOver(true);
            setGameResult((prevGameResult) => ({...prevGameResult, ["Ties"]: prevGameResult["Ties"] + 1}));
            setRoundResult("tie")
            console.log("round result from ue tie", roundResult)
            return;
        }
        if (cpuPlayerActive) {
            const cpuPlayer = firstPlayer === "o" ? "x" : "o";
            const isCpuMove = (firstPlayer === "o" && isXTurn) || (firstPlayer === "x" && !isXTurn)
            if (!gameOver) {
                if (isCpuMove) {
                    // const move = makeCpuMove(board, cpuPlayer)
                    const move = minMaxCpuMove(
                        board,
                        cpuPlayer,
                        firstPlayer,
                    )
                    if (move === null) {
                        return
                    }
                    const [rowIndex, colIndex] = move
                    makeMove(rowIndex, colIndex, cpuPlayer)
                    setIsXTurn(!isXTurn)
                }
            }
        }
    }, [
        board,
        gameOver,
        isXTurn,
        cpuPlayerActive,
        winningCombination,
        winningPlayer,
        roundResult])

    return (
        <>
            <div className="container">
                {!gameInProgress &&
                    <PickPlayer
                        choosePlayer={choosePlayer}
                        firstPlayer={firstPlayer}
                        startGame={startGame}/>}
                {gameInProgress &&
                    <GameBoard
                        firstPlayer={firstPlayer}
                        cpuPlayerActive={cpuPlayerActive}
                        isXTurn={isXTurn}
                        restartBoard={restartBoard}
                        gameResult={gameResult}
                        board={board}
                        makeMove={makeMove}
                        winCells={winningCombination}
                        winResult={winningPlayer}
                    />}
                {gameOver && <Score
                    firstPlayer={firstPlayer}
                    restartBoard={restartBoard}
                    restartGame={restartGame}
                    cpuPlayerActive={cpuPlayerActive}
                    winResult={winningPlayer}
                    roundResult={roundResult}
                />}
            </div>
        </>
    )
}

export default App

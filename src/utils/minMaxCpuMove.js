import {checkIsFullBoard} from "./checkIsFullBoard.js";
import {checkWhoWin} from "./checkWhoWin.js";


export function minMaxCpuMove(board, cpuPlayer, firstPlayer, isXTurn) {
    let minMaxScores
    let cpuBoard = structuredClone(board)
    let bestScore = -Infinity;
    let bestMove;
    let depth;
    let score;
    let finalDepth = 0

    if (cpuPlayer === "x") {
        minMaxScores = {
            "x": 1,
            "o": -1,
            "Tie": 0
        };
    } else {
        minMaxScores = {
            "x": -1,
            "o": 1,
            "Tie": 0
        };
    }

    const minMax = (someBoard, depth, isMaximizing) => {
        let minMaxBoard = structuredClone(someBoard)
        const whoWinReturn = checkWhoWin(minMaxBoard)
        let isFull = checkIsFullBoard(minMaxBoard)
        let score

        if (whoWinReturn === null) {
            if (isFull) {
                return [minMaxScores["Tie"], depth]
            } else if (isMaximizing) {
                debugger
                let bestScore = -Infinity
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                    for (let colIndex = 0; colIndex < 3; colIndex++) {
                        if (minMaxBoard[rowIndex][colIndex] === null) {
                            minMaxBoard[rowIndex][colIndex] = cpuPlayer
                            ;[score, depth] = minMax(minMaxBoard, depth + 1, false)
                            minMaxBoard[rowIndex][colIndex] = null
                            bestScore = Math.max(score, bestScore)
                        }
                    }
                }
                return [bestScore, depth]
            } else {
                let bestScore = Infinity
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                    for (let colIndex = 0; colIndex < 3; colIndex++) {
                        if (minMaxBoard[rowIndex][colIndex] === null) {
                            minMaxBoard[rowIndex][colIndex] = firstPlayer
                            ;[score, depth] = minMax(minMaxBoard, depth + 1, true)
                            minMaxBoard[rowIndex][colIndex] = null
                            bestScore = Math.min(score, bestScore)
                        }
                    }
                }
                return [bestScore, depth]
            }

        } else {
            let [winResult, winCells] = whoWinReturn
            return [minMaxScores[winResult], depth]
        }
    }

    if (board.flat().every(cell => cell !== cpuPlayer)) {
        while (true) {
            const randomRowIndex = Math.floor(Math.random() * 3);
            const randomColIndex = Math.floor(Math.random() * 3);
            if (board[randomRowIndex][randomColIndex] === null) {
                return [randomRowIndex, randomColIndex]
            }
        }
    }

    if (!board.flat().includes(null)) {
        return null
    }

    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 3; colIndex++) {
            debugger

            depth = 0
            if (cpuBoard[rowIndex][colIndex] === null) {
                cpuBoard[rowIndex][colIndex] = cpuPlayer
                ;[score, depth] = minMax(cpuBoard, depth, false)
                console.log("row, col", rowIndex, colIndex)
                console.log("score, depth", score, depth)
                cpuBoard[rowIndex][colIndex] = null

                if (score > bestScore) {
                    bestScore = score
                    bestMove = [rowIndex, colIndex]
                    finalDepth = depth
                }
            }
        }
    }
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        let whoWin
        let winCells
        for (let colIndex = 0; colIndex < 3; colIndex++) {
            if (cpuBoard[rowIndex][colIndex] === null) {
                cpuBoard[rowIndex][colIndex] = firstPlayer
                const whoWinReturn = checkWhoWin(cpuBoard)
                if (whoWinReturn !== null) {
                    [whoWin, winCells] = whoWinReturn

                    if (whoWin === firstPlayer && finalDepth !== 0) {
                        bestMove = [rowIndex, colIndex]
                        console.log("who win", winCells)
                    }
                }
                cpuBoard[rowIndex][colIndex] = null
            }
        }
    }
    console.log("bestMove, depth, best score", bestMove, depth, bestScore)
    return bestMove;
}
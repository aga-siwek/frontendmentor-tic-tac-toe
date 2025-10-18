import {createListenerMiddleware, createSlice, isAnyOf} from '@reduxjs/toolkit'
import {checkWhoWin} from "../utils/checkWhoWin.js";
import {checkIsFullBoard} from "../utils/checkIsFullBoard.js";
import {minMaxCpuMove} from "../utils/minMaxCpuMove.js";

export const GAME_STATE = {
    MENU: "menu",
    IN_PROGRESS: "in_progress",
    SHOW_WIN: "show_win",
    ROUND_SUMMARY: "round_summary"
}

const PLAYER = {
    X: "x",
    O: "o"
}

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameState: GAME_STATE.MENU,
        firstPlayer: PLAYER.O,
        cpuPlayerActive: false,
        isXTurn: true,
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]],
        winningCombination: null,
        gameResult: {
            "x": 0,
            "o": 0,
            "Ties": 0
        },
        roundResult: null
    },
    reducers: {
        setFirstPlayer: (state, action) => {
            state.firstPlayer = action.payload
        },
        startGame: (state, action) => {
            state.gameState = GAME_STATE.IN_PROGRESS
            state.cpuPlayerActive = action.payload

        },
        restartGame: (state) => {
            state.gameState = GAME_STATE.MENU
            state.firstPlayer = "o"
            state.cpuPlayerActive = false
            state.isXTurn = true
            state.board = [
                [null, null, null],
                [null, null, null],
                [null, null, null]]
            state.winningCombination = null
            state.gameResult = {
                "x": 0,
                "o": 0,
                "Ties": 0
            }
            state.roundResult = null
        },
        makeMove: (state, action) => {
            const {rowIndex, columnIndex, player} = action.payload
            state.board[rowIndex][columnIndex] = player
            state.isXTurn = !state.isXTurn
        },
        finishGame: (state, action) => {
            state.gameState = GAME_STATE.SHOW_WIN
            const {player, winCells} = action.payload
            if (player !== "") {
                state.winningCombination = winCells
                state.gameResult[player] += 1
                state.roundResult = player
            } else {
                state.gameResult["Ties"] += 1
                state.roundResult = "tie"
            }
        },
        showSummary: (state) => {
            state.gameState = GAME_STATE.ROUND_SUMMARY
        },
        newRound: (state) => {
            state.gameState = GAME_STATE.IN_PROGRESS
            state.board = [
                [null, null, null],
                [null, null, null],
                [null, null, null]]
            state.isXTurn = true
            state.winningCombination = null
            state.roundResult = null
        },

    },
})

export const listenerMiddleware = createListenerMiddleware()

// check if game finish after move
listenerMiddleware.startListening({
    actionCreator: gameSlice.actions.makeMove,
    effect: async (action, listenerApi) => {
        const state = listenerApi.getState().game
        const winData = checkWhoWin(state.board);
        const isBoardFull = checkIsFullBoard(state.board)

        if (winData != null && state.gameState === GAME_STATE.IN_PROGRESS) {
            listenerApi.dispatch(gameSlice.actions.finishGame(winData))
        } else if (isBoardFull && state.gameState === GAME_STATE.IN_PROGRESS) {
            listenerApi.dispatch(gameSlice.actions.finishGame({player: "", winCells: []}))
        }
    }
})

// make cpu move
listenerMiddleware.startListening({
    matcher: isAnyOf(gameSlice.actions.makeMove, gameSlice.actions.startGame, gameSlice.actions.newRound),
    effect: (action, listenerApi) => {
        const state = listenerApi.getState().game
        if (state.cpuPlayerActive) {
            const cpuPlayer = state.firstPlayer === "o" ? "x" : "o";
            const isCpuMove = (state.firstPlayer === "o" && state.isXTurn) || (state.firstPlayer === "x" && !state.isXTurn);
            if (state.gameState === GAME_STATE.IN_PROGRESS) {
                if (isCpuMove) {
                    const move = minMaxCpuMove(state.board, cpuPlayer, state.firstPlayer)
                    if (move === null) {
                        return
                    }
                    const [rowIndex, columnIndex] = move
                    listenerApi.dispatch(gameSlice.actions.makeMove({
                        rowIndex: rowIndex,
                        columnIndex: columnIndex,
                        player: cpuPlayer
                    }))
                }
            }
        }
    }
})

// delay summary screen
listenerMiddleware.startListening({
    matcher: isAnyOf(gameSlice.actions.finishGame),
    effect: (action, listenerApi) => {
        const SHOW_SUMMARY_DELAY = 500;

        const showSummary = () => {
            listenerApi.dispatch(gameSlice.actions.showSummary());
        };

        setTimeout(showSummary, SHOW_SUMMARY_DELAY);
    }
})


// Action creators are generated for each case reducer function
export const {setFirstPlayer, startGame, restartGame, makeMove, newRound} = gameSlice.actions
export default gameSlice.reducer
export function makeCpuMove(board, cpuPlayer) {

    while (true) {
        console.log("board from makecpumove", board)

        if (!board.flat().includes(null)) {
            return null
        }
        const randomRowIndex = Math.floor(Math.random() * 3);
        const randomColIndex = Math.floor(Math.random() * 3);
        if (board[randomRowIndex][randomColIndex] === null) {
            return [randomRowIndex, randomColIndex]
        }

    }

}
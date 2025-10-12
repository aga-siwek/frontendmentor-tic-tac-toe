export function checkIsFullBoard(board) {
    return !board.flat().includes(null)
}
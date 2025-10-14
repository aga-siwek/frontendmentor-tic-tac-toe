import styles from "./MainBoard.module.css"
import MainBoardSquare from "./MainBoardSquare.jsx";

function MainBoard({
                       firstPlayer,
                       cpuPlayerActive,
                       gameplayResult,
                       changeGameResult,
                       isXTurn,
                       board,
                       makeMove,
                       winCells = [],
                       winResult = ""

                   }) {

    const ShowWinCells = (cell) => {
        console.log("win cells form mainboard", winCells)
        console.log("cell from mainboard", cell);
        if (!winCells || winCells.length === 0) return false;

        return winCells.some(
            ([r, c]) => r === cell[0] && c === cell[1]
        );
    };

    const showGameCells = () => {
        return board.map((row, rowIndex) =>
            row.map((column, columnIndex) => (
                <MainBoardSquare
                    key={`${rowIndex}.${columnIndex}`}
                    player={column}
                    isXTurn={isXTurn}
                    changeGameResult={changeGameResult}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    makeMove={makeMove}
                    isWinCell = {ShowWinCells([rowIndex, columnIndex])}
                    winResult = {winResult}
                />
            ))
        );
    }


    return (
        <div className={styles.main_board_conteiner}>
            {showGameCells()}
        </div>)
}

export default MainBoard
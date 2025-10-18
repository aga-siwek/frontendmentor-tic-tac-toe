import styles from "./MainBoardSquare.module.css"
import iconX from "../../../assets/icon-x.svg"
import iconO from "../../../assets/icon-o.svg"
import iconX_outline from "../../../assets/icon-x-outline.svg"
import iconO_outline from "../../../assets/icon-o-outline.svg"

import {ReactSVG} from "react-svg";

function MainBoardSquare({
                             player = null,
                             isXTurn,
                             rowIndex,
                             columnIndex,
                             makeMove,
                             isWinCell,
                             winResult
                         }) {

    const highlightCell = () => {

        if (isWinCell && winResult === "o") {
            return styles.highlight_o;
        } else if (isWinCell && winResult === "x") {
            return styles.highlight_x;
        } else {
            return styles.unhighlight;
        }
    };

    const clickCell = () => {
        if (isXTurn) {
            makeMove(rowIndex, columnIndex, "x")
        } else {
            makeMove(rowIndex, columnIndex, "o")
        }
    }
    const showCell = () => {
        if (player === null)
            return (
                <div className={`${styles.main_board_file_conteiner} ${highlightCell()}`}>
                    {isXTurn ? (
                        <div className={styles.icon_x_hover_svg}
                             onClick={clickCell}>
                            <ReactSVG
                                src={iconX_outline}
                                className={styles.icon_x_outline_svg}/>
                        </div>) : (
                        <div className={styles.icon_hover_o_svg}
                             onClick={clickCell}>
                            <ReactSVG src={iconO_outline}
                                      className={styles.icon_o_outline_svg}/>
                        </div>)}

                </div>
            )
        if (player === "x") {
            return (
                <div className={`${styles.main_board_file_conteiner} ${highlightCell()}`}>
                    <ReactSVG src={iconX} className={`${styles.icon_x_svg} ${highlightCell()}`}/>
                </div>)
        }
        if (player === "o") {
            return (
                <div className={`${styles.main_board_file_conteiner} ${highlightCell()}`}>
                    <ReactSVG src={iconO} className={`${styles.icon_o_svg} ${highlightCell()}`}/>
                </div>)
        }
    }
    return (showCell())
}

export default MainBoardSquare
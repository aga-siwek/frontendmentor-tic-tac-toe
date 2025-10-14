import styles from "./Score.module.css"
import {ReactSVG} from "react-svg";
import xIcon from "../../assets/icon-x.svg"
import oIcon from "../../assets/icon-o.svg"
import Button from "../common/button/ButtonSecondary.jsx"
import {useState, useEffect} from "react";

function Score({firstPlayer, restartBoard, restartGame, cpuPlayerActive, roundResult}) {
    const [visiable, setVisiable] = useState(false);
    const showContent = () => {
        return (
            <div className={styles.score_background}>
                {cpuPlayerActive ? (
                        <div className={styles.conteiner_score}>
                            {(roundResult === "tie") ? (
                                <div className={styles.who_won}>
                                    <p className={styles.body_text}></p>

                                    <div className={styles.score_content}>
                                        <div className={styles.take_round}>
                                            <p className={styles.take_round_ties_text}>RESTART GAME?</p>
                                        </div>
                                        <div className={styles.restart_buttons_cpu_ties}>
                                            <div className={styles.restart_button_one_cpu_ties}>
                                                <Button text="NO, CANCEL" color="silver" onClick={() => restartGame()}/>
                                            </div>
                                            <div className={styles.restart_button_two_cpu_ties}>
                                                <Button text="YES, RESTART" color="yellow" onClick={() => restartBoard()}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.who_won}>
                                    {
                                        (roundResult === firstPlayer) ? (<p className={styles.body_text}>YOU WON!</p>) :
                                            (<p className={styles.body_text}>OH NO, YOU LOST…</p>)}

                                    <div className={styles.score_content}>
                                        {roundResult === "x" ? (
                                            <div className={styles.take_round}>
                                                <ReactSVG src={xIcon} className={styles.take_round_x_icon}/>
                                                <p className={styles.take_round_x_text}>TAKES THE ROUND</p>
                                            </div>) : (
                                            <div className={styles.take_round}>
                                                <ReactSVG src={oIcon} className={styles.take_round_o_icon}/>
                                                <p className={styles.take_round_o_text}>TAKES THE ROUND</p>
                                            </div>
                                        )}
                                        <div className={styles.restart_buttons}>
                                            <div className={styles.restart_button_one_cpu}>
                                                <Button text="QUIT" color="silver" onClick={() => restartGame()}/>
                                            </div>
                                            <div className={styles.restart_button_two_cpu}>
                                                <Button text="NEW ROUND" color="yellow" onClick={() => restartBoard()}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>) :
                    (
                        <div className={styles.conteiner_score}>
                            {(roundResult === "tie") ? (
                                <div className={styles.who_won}>
                                    <p className={styles.body_text}></p>
                                    <div className={styles.score_content}>
                                        <div className={styles.take_round}>
                                            <p className={styles.take_round_ties_text}>ROUND TIED</p>
                                        </div>
                                        <div className={styles.restart_buttons}>
                                            <div className={styles.restart_button_one}>
                                                <Button text="QUIT" color="silver" onClick={() => restartGame()}/>
                                            </div>
                                            <div className={styles.restart_button_two}>
                                                <Button text="NEXT ROUND" color="yellow"
                                                        onClick={() => restartBoard()}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.who_won}>
                                    {
                                        (roundResult === firstPlayer) ? (
                                                <p className={styles.body_text}>PLAYER 1 WINS!</p>) :
                                            (<p className={styles.body_text}>PLAYER 2 WINS!</p>)}

                                    <div className={styles.score_content}>
                                        {roundResult === "x" ? (
                                            <div className={styles.take_round}>
                                                <ReactSVG src={xIcon} className={styles.take_round_x_icon}/>
                                                <p className={styles.take_round_x_text}>TAKES THE ROUND</p>
                                            </div>) : (
                                            <div className={styles.take_round}>
                                                <ReactSVG src={oIcon} className={styles.take_round_o_icon}/>
                                                <p className={styles.take_round_o_text}>TAKES THE ROUND</p>
                                            </div>
                                        )}
                                        <div className={styles.restart_buttons}>
                                            <div className={styles.restart_button_one}>
                                                <Button text="QUIT" color="silver" onClick={() => restartGame()}/>
                                            </div>
                                            <div className={styles.restart_button_two}>
                                                <Button text="NEW ROUND" color="yellow" onClick={() => restartBoard()}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>)}
                        </div>)}
            </div>)
    }

    useEffect(() => {
        setTimeout(() => {
            console.log("Past 0,5 second");
            setVisiable(true);
        }, 500);
    }, [])
    return <>{visiable ? showContent() : null}</>
}


export default Score
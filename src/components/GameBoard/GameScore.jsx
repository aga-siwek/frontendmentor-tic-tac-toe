import styles from "./GameScore.module.css"

function GameScore({gameResult, firstPlayer, cpuPlayerActive}) {

    const showScore = () => {
        if (firstPlayer === "x") {
            return (
                <div className={styles.conteiner_scores}>
                    <div className={`${styles.x_player} ${styles.score_box}`}>
                        {cpuPlayerActive ? <p className={styles.header}>X (YOU)</p> :
                            <p className={styles.header}>X (P1)</p>}
                        <p className={styles.score}>{gameResult["x"]}</p>
                    </div>
                    <div className={`${styles.ties} ${styles.score_box}`}>
                        <p className={styles.header}>Ties</p>
                        <p className={styles.score}>{gameResult["Ties"]}</p>
                    </div>
                    {!cpuPlayerActive ?
                        <div className={`${styles.o_player} ${styles.score_box}`}>
                            <p className={styles.header}>O (P2)</p>
                            <p className={styles.score}>{gameResult["o"]}</p>
                        </div> :
                        <div className={`${styles.o_player} ${styles.score_box}`}>
                            <p className={styles.header}>O (CPU)</p>
                            <p className={styles.score}>{gameResult["o"]}</p>
                        </div>
                    }
                </div>)
        } else {
            return (
                <div className={styles.conteiner_scores}>
                    {!cpuPlayerActive ?
                        <div className={`${styles.x_player} ${styles.score_box}`}>
                            <p className={styles.header}>X (P2)</p>
                            <p className={styles.score}>{gameResult["x"]}</p>
                        </div> :
                        <div className={`${styles.x_player} ${styles.score_box}`}>
                            <p className={styles.header}>X (CPU)</p>
                            <p className={styles.score}>{gameResult["x"]}</p>
                        </div>
                    }
                    <div className={`${styles.ties} ${styles.score_box}`}>
                        <p className={styles.header}>Ties</p>
                        <p className={styles.score}>{gameResult["Ties"]}</p>
                    </div>
                    <div className={`${styles.o_player} ${styles.score_box}`}>
                        {cpuPlayerActive ? <p className={styles.header}>O (YOU)</p> :
                            <p className={styles.header}>O (P1)</p>}
                        <p className={styles.score}>{gameResult["o"]}</p>
                    </div>
                </div>)
        }
    }
    return showScore()
}

export default GameScore
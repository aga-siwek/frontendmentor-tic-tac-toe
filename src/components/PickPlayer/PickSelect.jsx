import styles from "./PickSelect.module.css"
import xIcon from "../../assets/icon-x.svg"
import oIcon from "../../assets/icon-o.svg"
import {ReactSVG} from 'react-svg'

function PickSelect({choosePlayer, firstPlayer}) {

    const playerStyleX = () => {
        console.log("firstPlayer", firstPlayer)
        if (firstPlayer === "x") {
            console.log("x is active")
            return styles.active_file
        }
        if (firstPlayer === "o") {
            console.log("o is active")
            return styles.inactive_file
        }
    }

    const playerStyleO = () => {
        console.log("firstPlayer", firstPlayer)
        if (firstPlayer === "o") {
            console.log("x is active")
            return styles.active_file
        }
        if (firstPlayer === "x") {
            console.log("o is active")
            return styles.inactive_file
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.select_header}>
                <p className={styles.header_text}>PICK PLAYER 1'S MARK</p>
            </div>
            <div className={styles.select_content}>
                <div className={styles.select_container}>
                    <div className={`${styles.select_container_x} ${playerStyleX()}`} onClick={() => choosePlayer("x")}>
                        <ReactSVG src={xIcon} alt="x icon" className={styles.icon}/>
                    </div>
                    <div className={`${styles.select_container_o} ${playerStyleO()}`} onClick={() => choosePlayer("o")}>
                        <ReactSVG src={oIcon} alt="o icon" className={styles.icon}/>
                    </div>
                </div>
                <div className={styles.select_body}>
                    <p className={styles.body_text}>REMEMBER : X GOES FIRST</p>
                </div>
            </div>
        </div>
    )
}

export default PickSelect
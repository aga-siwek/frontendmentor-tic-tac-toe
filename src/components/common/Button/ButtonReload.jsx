import styles from "./ButtonReload.module.css"
import restartIcon from "../../../assets/icon-restart.svg"
import {ReactSVG} from 'react-svg'

function ButtonReload({click_function}) {
    return (
        <button
            className={styles.button_container}
            onClick={click_function}>
            <ReactSVG
                src={restartIcon}
                alt="restart Icon"
                className={styles.button_icon}/>

        </button>)
}

export default ButtonReload
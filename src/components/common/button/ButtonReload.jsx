import styles from "./ButtonReload.module.css"
import restartIcon from "../../../assets/icon-restart.svg"
import {ReactSVG} from 'react-svg'

function ButtonReload({onClick=null}) {
    return (
        <button
            className={styles.button_container}
            onClick={(e) => onClick(e)}>
            <ReactSVG
                src={restartIcon}
                alt="restart Icon"
                className={styles.button_icon}/>

        </button>)
}

export default ButtonReload
import styles from "./GameHeader.module.css"
import Logo from "../common/Logo/Logo.jsx";
import ButtonReload from "../common/Button/ButtonReload.jsx";
import iconX from "../../assets/icon-x.svg"
import iconO from "../../assets/icon-o.svg"
import {ReactSVG} from "react-svg";

function GameHeader({isXTurn, restartBoard}) {

    return (
        <div className={styles.header_container}>
            <div className={styles.header_content}>
                <Logo/>
                <div className={styles.header_turn}>
                    <div className={styles.header_turn_icon}>
                        {isXTurn ?
                            (<ReactSVG
                                src={iconX}
                                className={styles.header_turn_icon_svg}/>)
                            : (<ReactSVG
                                src={iconO}
                                className={styles.header_turn_icon_svg}/>)
                        }
                    </div>
                    <div className={styles.header_turn_text}>TURN</div>
                </div>
            </div>
            <ButtonReload
                className={styles.header_button}
                click_function={restartBoard}/>

        </div>)
}

export default GameHeader
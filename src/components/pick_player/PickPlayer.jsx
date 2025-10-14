import styles from "./PickPlayer.module.css"
import Logo from "../common/logo/Logo.jsx"
import PickSelect from "./PickSelect.jsx";
import ButtonPrimary from "../common/button/ButtonPrimary.jsx";


function PickPlayer({choosePlayer, firstPlayer, startGame}) {
    return (
        <div className={styles.pick_player_container}>
            <div className={styles.pick_player_header}>
                <Logo/>
            </div>
            <PickSelect
                choosePlayer={choosePlayer}
                firstPlayer={firstPlayer}/>

            <div className={styles.pick_player_buttons}>
                <ButtonPrimary text="NEW GAME (VS CPU)"
                               color="yellow"
                               onClick={() => startGame(true)}
                             />
                <ButtonPrimary
                    text="NEW GAME  (VS PLAYER)"
                    color="blue"
                    onClick={() => startGame(false)}
                />
            </div>
        </div>)
}

export default PickPlayer
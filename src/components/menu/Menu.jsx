import styles from "./Menu.module.css"
import Logo from "../common/logo/Logo.jsx"
import PlayerSelect from "./PlayerSelect.jsx";
import ButtonPrimary from "../common/button/ButtonPrimary.jsx";

function Menu({choosePlayer, firstPlayer, startGame}) {
    return (
        <div className={styles.pick_player_container}>
            <div className={styles.pick_player_header}>
                <Logo/>
            </div>
            <PlayerSelect
                choosePlayer={choosePlayer}
                firstPlayer={firstPlayer}/>

            <div className={styles.pick_player_buttons}>
                <ButtonPrimary
                    text="NEW GAME (VS CPU)"
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

export default Menu
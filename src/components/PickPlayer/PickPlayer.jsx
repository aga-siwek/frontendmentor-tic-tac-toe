import styles from "./PickPlayer.module.css"
import Logo from "../common/Logo/Logo.jsx"
import PickSelect from "./PickSelect.jsx";
import ButtonPrimary from "../common/Button/ButtonPrimary.jsx";


function PickPlayer({choosePlayer, firstPlayer, playWithCpu}) {
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
                               clickFunction={playWithCpu}
                               arg={true}/>
                <ButtonPrimary
                    text="NEW GAME  (VS PLAYER)"
                    color="blue"
                    clickFunction={playWithCpu}
                    arg={false}/>
            </div>
        </div>)
}

export default PickPlayer
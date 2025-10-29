import styles from "./Menu.module.css";
import Logo from "../common/logo/Logo.jsx";
import PlayerSelect from "./PlayerSelect.jsx";
import ButtonPrimary from "../common/button/ButtonPrimary.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setFirstPlayer, startGame } from "../../store/gameSlice.js";

function Menu() {
  const dispatch = useDispatch();
  const firstPlayer = useSelector((state) => state.game.firstPlayer);

  const onStartGame = (playWithCpu) => {
    dispatch(startGame(playWithCpu));
  };

  const onChoosePlayer = (user) => {
    dispatch(setFirstPlayer(user));
  };

  return (
    <div className={styles.pick_player_container}>
      <div className={styles.pick_player_header}>
        <Logo />
      </div>
      <PlayerSelect choosePlayer={onChoosePlayer} firstPlayer={firstPlayer} />

      <div className={styles.pick_player_buttons}>
        <ButtonPrimary
          text="NEW GAME (VS CPU)"
          color="yellow"
          onClick={() => onStartGame(true)}
        />
        <ButtonPrimary
          text="NEW GAME  (VS PLAYER)"
          color="blue"
          onClick={() => onStartGame(false)}
        />
      </div>
    </div>
  );
}

export default Menu;

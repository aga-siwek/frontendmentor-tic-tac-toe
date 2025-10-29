import "./App.css";
import Menu from "./components/menu/Menu.jsx";
import { useSelector } from "react-redux";
import { GAME_STATE } from "./store/gameSlice.js";
import Game from "./components/game/Game.jsx";

function App() {
  const gameState = useSelector((state) => state.game.gameState);

  return (
    <div className="container">
      {gameState === GAME_STATE.MENU ? <Menu /> : <Game />}
    </div>
  );
}

export default App;

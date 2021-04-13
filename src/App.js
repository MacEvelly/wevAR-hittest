import HUD from "./component/HUD";
import { Scene3D } from "./component/Scene3D";
import "./style/styles.css";

export default function App() {
  return (
    <div className="App">
      <HUD />
      <Scene3D />
    </div>
  );
}

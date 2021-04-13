import { useStore } from "../utility/useStore";

export default function HUD() {
  const position = useStore((state) => state.position);
  return <div id="HUD">Test:{position}</div>;
}

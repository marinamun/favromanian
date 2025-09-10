import adult from "../../public/adult.png";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

const screen2 = () => {
  return (
    <>
      <div className="screen-container">
        <Fireworks autorun={{ speed: 2 }} />;<h1>Happy birthday!!!</h1>
        <img src={adult} style={{ width: "60%" }} />
      </div>
    </>
  );
};
export default screen2;

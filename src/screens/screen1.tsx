//baby catalin is born in romania
import { Link } from "react-router-dom";
import baby from "../../public/baby.png";
import "../style.css";

const screen1 = () => {
  return (
    <>
      <div className="screen-container">
        <h1>28 years ago a tiny romanian baby was born</h1>
        <img src={baby} style={{ width: "60%" }} />
        <br />
        <Link to="/screen2">
          <button className="secondaryButton">next</button>
        </Link>
      </div>
    </>
  );
};
export default screen1;

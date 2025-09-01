//baby catalin is born in romania
import { Link } from "react-router-dom";

const screen1 = () => {
  return (
    <>
      <h1>Once upon a time, a tiny romanian baby was born</h1>
      <Link to="/screen2">
        <button>next</button>
      </Link>
    </>
  );
};
export default screen1;

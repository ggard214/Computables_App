import "./index.css";
import { useSelector } from "react-redux";
import logo from "./logo/logo.png";

const  Overclock = () => {
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  return (
    <div>
      <div id="top-bar">
        <div>
          <img className="logo" src={logo} alt="Computables Logo" />
        </div>
        <h1>overclocking</h1>
      </div>
      <div id="build-page-container"></div>
    </div>
  );
};

export default Overclock;

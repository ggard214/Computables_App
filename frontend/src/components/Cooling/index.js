import "../pagecss/index.css";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo/logo.png";
import getCoolings from "../../store/cooling";

const Cooling = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });
  const coolings = useSelector((state) => state.coolings);

  return (
    coolings && (
      <div>
        <div id="top-bar">
          <div>
            <img className="logo" src={logo} alt="Computables Logo" />
          </div>
          <h1>cooling</h1>
        </div>
        <div id="build-page-container">
          {coolings.builds.map((cooling, index) => {
            console.log(
              "my conole log of images",
              cooling.Project.PicVids.picvidURL
            );
            return (
              <div key={index} className="buildarea">
                <div className="builds">
                  <img
                    className="projimg"
                    src={cooling.Project.PicVids[0].picvidURL}
                    alt="Project Image"
                  />
                  <div className="bottomitems">
                    <h1 className="title">{cooling.Project.title}</h1>
                    <p className="author">
                      Author: {cooling.Project.User.username}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Cooling;

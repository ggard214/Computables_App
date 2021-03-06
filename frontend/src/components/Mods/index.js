import "../pagecss/index.css";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo/logo.png";
import { useHistory } from "react-router-dom";

const Mods = () => {
  const history = useHistory();
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });
  const mods = useSelector((state) => state.mods);
  console.log("mod stuff", mods)

  return (
    mods && (
      <div>
        <div id="top-bar">
          <div>
            <img className="logo" src={logo} alt="Computables Logo" />
          </div>
          <h1>modification</h1>
        </div>
        <div id="build-page-container">
          {mods.builds.map((mod, index) => {
            console.log(
              "my console log of the images",
              mod.Project.PicVids.picvidURL
            );
            return (
              <div key={index} className="buildarea">
                <div
                  className="builds"
                  onClick={() => history.push(`/modification/${mod.projId}`)}
                >
                  <img
                    className="projimg"
                    src={mod.Project.PicVids[0].picvidURL}
                    alt="Project Image"
                  />
                  <div className="bottomitems">
                    <h1 className="title">{mod.Project.title}</h1>
                    <p className="author">
                      Author: {mod.Project.User.username}
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

export default Mods;

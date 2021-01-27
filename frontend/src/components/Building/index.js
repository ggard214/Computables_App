import "../pagecss/index.css";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo/logo.png";
import getBuildings from "../../store/building";

const Building = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });
  const buildings = useSelector((state) => state.buildings);

  return (
    buildings && (
      <div>
        <div id="top-bar">
          <div>
            <img className="logo" src={logo} alt="Computables Logo" />
          </div>
          <h1>pc builds</h1>
        </div>
        <div id="build-page-container">
          {buildings.builds.map((building, index) => {
            console.log(
              "my console log of the images",
              building.Project.PicVids.picvidURL
            );
            return (
              <div key={index} className="buildarea">
                <div className="builds">
                  <img
                    className="projimg"
                    src={building.Project.PicVids[0].picvidURL}
                    alt="Project Image"
                  />
                  <div className="bottomitems">
                    <h1 className="title">{building.Project.title}</h1>
                    <p className="author">
                      Author: {building.Project.User.username}
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

export default Building;

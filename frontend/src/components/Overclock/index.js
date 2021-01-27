import "../pagecss/index.css";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo/logo.png";
import getOcs from '../../store/oc';

const Overclock = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  const ocs = useSelector((state) => state.ocs);

  return (
    ocs && (
      <div>
        <div id="top-bar">
          <div>
            <img className="logo" src={logo} alt="Computables Logo" />
          </div>
          <h1>overclocking</h1>
        </div>
        <div id="build-page-container">
          {ocs.builds.map((oc, index) => {
            console.log(
              "my console log of the images",
              oc.Project.PicVids.picvidURL
            );
            return (
              <div key={index} className="buildarea">
                <div className="builds">
                  <img
                    className="projimg"
                    src={oc.Project.PicVids[0].picvidURL}
                    alt="Project Image"
                  />
                  <div className="bottomitems">
                    <h1 className="title">{oc.Project.title}</h1>
                    <p className="author">
                      Author: {oc.Project.User.username}
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

export default Overclock;

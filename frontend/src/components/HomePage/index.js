import "./index.css";
import { useSelector } from "react-redux";
import backgroundpic1 from "./backgroundimage/homebackground.jpg";
import logo from "./logo/logo.png";
import backgroundpic2 from "./backgroundimage/pc2.jpg";
import backgroundpic3 from "./backgroundimage/pc3.jpg";

const Home = () => {
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  return (
    <div>
      <div id="top-bar">
        <div>
          <img className="logo" src={logo} alt="Computables Logo" />
        </div>
        <h1>computables</h1>
      </div>
      <div id="home-page-container">
        <div>
          <img
            className="backgroundimage"
            src={backgroundpic1}
            alt="Computables"
          />
        </div>
        <div id="home-page-overlay">
          <h1>YOURS FOR THE MAKING!</h1>
          <div id="overlaytext">
            <p>
              Computables is a community for people who like to build and modify
              computers explore, share and build your next computer with us!
            </p>
          </div>
        </div>
      </div>
      <div id="about">
        <h1 id="step">STEP-BY-STEP</h1>
        <div id="stepdesc">
          <p>
            We make it easy to learn how to build or modify your computer, one
            step at a time. From installing a video card to doing a custom water
            loop. You are sure to be inspired by the awesome projects shared on
            Computables.
          </p>
        </div>
        <h1 id="made">MADE BY YOU</h1>
        <div id="madedesc">
          <p>
            Computables are created by you. No matter who you are, we all have
            secret skills to share. Come join our community of curious computer
            makers, innovators, teachers and life long learners who love to
            share what they make.
          </p>
        </div>
        <h1 id="happy">A HAPPY PLACE</h1>
        <div id="happydesc">
          <p>
            Making things makes people happy. We can't prove it, but we know it
            to be true. Find your happy place and join one of the friendliest
            online communities anywhere.
          </p>
        </div>
      </div>
      <hr id="bar1"></hr>
      <div id="projbox">
        <h1 id="explore">EXPLORE PROJECTS</h1>
      </div>
    </div>
  );
};

export default Home;

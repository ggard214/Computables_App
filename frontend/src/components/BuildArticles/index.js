import "../articlesCss/index.css";
import { useEffect } from "react";
import { getOneBuild } from "../../store/building";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo/logo.png";

const BuildArticles = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const projId = location.pathname.match(/\d+/);

  useEffect(() => {
    dispatch(getOneBuild(projId));
  }, [dispatch]);

  const article = useSelector((state) => state.buildings.article);

  if (!article) return <h1>Loading Something here!</h1>;

    console.log("user info", article.Project.Comments[1].User.username);
  return (
    article && (
      <div>
        <div id="top-bar">
          <div>
            <img className="logo" src={logo} alt="Computables Logo" />
          </div>
          <h1>pc builds</h1>
        </div>
        <br></br>
        <div className="tite">
          <h1>{article.Project.title}</h1>
          <p>
            Written By: {article.Project.User.username} in{" "}
            {article.Project.Topics[0].topic}
          </p>
        </div>
        <div><br></br></div>
        <div className="artpic">
          <img className="artimg" src={article.Project.PicVids[0].picvidURL} />
        </div>
        <div><br></br></div>
        <div className="sum">
          <h1>Summary:</h1>
          <p>{article.Project.summary}</p>
        </div>
        <div><br></br></div>
        <div className="steps">
          <h1>Steps:</h1>
          <p>{article.Project.steps}</p>
        </div>
        <div><br></br></div>
        <div className="commentsarea">
          <h1 className="comhead">Comments</h1>
          <br></br>
          <div className="combox">
            <div className="comuser">
              <h1>{article.Project.Comments[0].User.username}</h1>
              </div>
              <div className="comquote">
              <p>{article.Project.Comments[0].comment}</p>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    )
  );
};

export default BuildArticles;

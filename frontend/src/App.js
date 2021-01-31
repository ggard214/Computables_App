import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/HomePage"
import Building from './components/Building';
import Cooling from './components/Cooling';
import Mods from './components/Mods';
import Overclock from './components/Overclock';
import { getBuildings } from "./store/building";
import { getCoolings } from "./store/cooling";
import { getOcs } from "./store/oc";
import { getMods } from "./store/mod";
import BuildArticles from './components/BuildArticles';
import CoolArticles from './components/coolArticles';
import OCArticles from './components/OverclockArticles';
import ModArticles from './components/ModsArticles';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    dispatch(getBuildings())
    dispatch(getCoolings())
    dispatch(getOcs())
    dispatch(getMods())
    .then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/building">
            <Building />
          </Route>
          <Route path="/building/:projId">
            <BuildArticles />
          </Route>
          <Route exact path="/cooling">
            <Cooling />
          </Route>
          <Route path="/cooling/:projId">
            <CoolArticles />
          </Route>
          <Route exact path="/modification">
            <Mods />
            </Route>
            <Route path="/modification/:projId">
            <ModArticles />
          </Route>
          <Route exact path="/overclocking">
            <Overclock />
            </Route>
          <Route path="/overclocking/:projId">
          <OCArticles />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

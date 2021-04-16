import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "./Loader";
const Home = lazy(() => import("./components/Home/Home"));
const NotFound = lazy(() => import("./NotFound"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;

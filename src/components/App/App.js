import { Route, Switch } from "react-router";
import React, { lazy, Suspense } from "react";
import s from "./App.module.scss";
import Navigation from "../Navigation";
import Loader from "react-loader-spinner";

const Home = lazy(() => import("../views/Home"));
const Movie = lazy(() => import("../views/Movie"));
const MovieDetails = lazy(() => import("../views/MovieDetails"));

function App() {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>

      <main className={s.mainApp}>
        <div className={s.container}>
          <Suspense
            fallback={
              <div className={s.containerLoader}>
                <Loader
                  type="TailSpin"
                  color="rgb(95, 22, 163)"
                  height={200}
                  width={200}
                  timeout={4000}
                />
              </div>
            }
          >
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/movie" exact>
                <Movie />
              </Route>

              <Route path="/movie/:movieId">
                <MovieDetails />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default App;

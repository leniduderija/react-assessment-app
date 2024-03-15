import React, { lazy, Suspense } from "react";
import "normalize.css";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/not-found/NotFound";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
            {/*<Route*/}
            {/*  path="/flowers"*/}
            {/*  index*/}
            {/*  element={<Flowers />}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*  path="/flowers/:id"*/}
            {/*  element={<Flower />}*/}
            {/*/>*/}

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

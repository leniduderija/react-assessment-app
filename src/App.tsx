import React, { lazy, Suspense } from 'react';
import 'normalize.css';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/not-found/NotFound';
import { Layout } from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Flowers = lazy(() => import('./pages/flowers/Flowers'));
const Flower = lazy(() => import('./pages/flowers/[id]/Flower'));
const LatestSightings = lazy(
  () => import('./pages/latest-sightings/LatestSightings'),
);
const Favorites = lazy(() => import('./pages/favorites/Favorites'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Layout>Loading...</Layout>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index path="/" element={<Home />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/flowers/:id" element={<Flower />} />
            <Route
              path="/latest-sightings"
              index
              element={<LatestSightings />}
            />
            <Route path="/favorites" index element={<Favorites />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom'
import Movies from './pages/Movies';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Navigation from './components/Navigation'
import Actors from './pages/Actors';
import Actor from './pages/Actor';

export default function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="movies" >
        <Route index element={<Movies />} />
        <Route path=":slug" element={<Movie />} />
      </Route>
      <Route path="actors" >
        <Route index element={<Actors />} />
        <Route path=":slug" element={<Actor />} />
      </Route>
    </Routes>
    </>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Tvshows from "./pages/Tvshows";
import Movies from "./pages/Movies";
import New from "./pages/New";
import UpcomingReleases from "./pages/UpcomingReleases";
import MoviesGenre from "./pages/MoviesGenre";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/UpcomingReleases" element={<UpcomingReleases />} />
          <Route path="/Tvshows" element={<Tvshows />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/New & Popular" element={<New />} />
          <Route path="/MoviesGenre/:gid" element={<MoviesGenre />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

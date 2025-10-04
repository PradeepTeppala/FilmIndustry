import BollyWoodPage from "./Components/BollyWoodPage/BollyWoodPage";
import Home from "./Components/Home";
import HomeMovies from "./Components/HomeMovies";
import KollywoodPage from "./Components/KollyWoodPage/KollyWoodPage";
import MollyWoodPage from "./Components/MollyWoodPage/MollyWoodPage";
import SandalwoodPage from "./Components/SandalWoodPage/SandalWoodPage";
import TollyWoodPage from "./Components/TollyWoodPage/TollyWoodPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <TollyWoodPage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<HomeMovies/>} />
          <Route path="/tollywood" element={<TollyWoodPage />} />
          <Route path="/bollywood" element={<BollyWoodPage />} />
          <Route path="/kollywood" element={<KollywoodPage />} />
          <Route path="/mollywood" element={<MollyWoodPage />} />
          <Route path="/sandalwood" element={<SandalwoodPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

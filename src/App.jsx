import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CitiesPage from "./pages/CitiesPage";
import CityPage from "./pages/CityPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import GalleryPage from "./pages/GalleryPage";
import CuisinePage from "./pages/CuisinePage";
import ReviewsPage from "./pages/ReviewsPage";
import MapPage from "./pages/MapPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cities" element={<CitiesPage />} />
            <Route path="/city/:slug" element={<CityPage />} />
            <Route path="/cuisine" element={<CuisinePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

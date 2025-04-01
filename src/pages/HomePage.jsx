// HomePage.jsx
import HeroBanner from "../components/HeroBanner";
import CityCarousel from "../components/CityCarousel";
import cityData from "../data/azerbaijan.json";
import FeaturedCuisine from "../components/FeaturedCuisine";
import PhotoGallery from "../components/PhotoGallery";
import ThingsToDo from "../components/ThingsToDo";
import Testimonials from "../components/Testimonials";
import MiniMap from "../components/MiniMap";

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <HeroBanner />

            <h1 className="text-3xl font-bold text-center text-gray-800 pt-10">
                Explore Cities in Azerbaijan
            </h1>

            <CityCarousel cities={cityData} />
            <FeaturedCuisine />
            <PhotoGallery />
            <ThingsToDo />
            <Testimonials />
            <MiniMap />
        </div>
    );
};

export default HomePage;

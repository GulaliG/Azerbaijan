// HomePage.jsx
import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import TourSearchPanel from "../components/TourSearchPanel";
import TourList from "../components/TourList";
import CityCarousel from "../components/CityCarousel";
import cityData from "../data/azerbaijan.json";
import FeaturedCuisine from "../components/FeaturedCuisine";
import PhotoGallery from "../components/PhotoGallery";
import ThingsToDo from "../components/ThingsToDo";
import Reviews from "../components/Reviews";
import MiniMap3D from "../components/MiniMap3D";

const HomePage = () => {
    const [filteredTours, setFilteredTours] = useState([]);

    const allTours = [
        {
            title: "Baku City Tour",
            image: "/assets/tours/baku.jpg",
            description: "Explore Icherisheher, Flame Towers, and more.",
            people: 2,
            bags: 2,
            price: 49,
        },
        {
            title: "Gabala Nature Tour",
            image: "/assets/tours/gabala.jpg",
            description: "Cable car, waterfalls, and nature experience.",
            people: 4,
            bags: 3,
            price: 89,
        },
    ];

    const handleSearchTours = (criteria) => {
        // Mock filter logic
        const result = allTours.filter((t) =>
            t.title.toLowerCase().includes(criteria.to.toLowerCase())
        );
        setFilteredTours(result);
    };


    return (
        <div className="bg-gray-100 min-h-screen">
            <HeroBanner />
            <TourSearchPanel onSearch={handleSearchTours} />
            <TourList tours={filteredTours} />

            <h1 className="text-3xl font-bold text-center text-gray-800 pt-10">
                Explore Cities in Azerbaijan
            </h1>

            <CityCarousel cities={cityData} />
            <FeaturedCuisine />
            <PhotoGallery />
            <ThingsToDo />
            <Reviews />
            <MiniMap3D />
        </div>
    );
};

export default HomePage;

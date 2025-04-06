import TourSearchPanel from "./TourSearchPanel";

const HeroBanner = () => {
    return (
        <section
            className="relative w-full h-[75vh] bg-cover bg-center"
            style={{ backgroundImage: `url('/hero.jpg')` }}
        >
            {/* Search Panel üstte */}
            <TourSearchPanel />

            {/* Overlay ve yazılar */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <div className="text-center text-white px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Explore Azerbaijan 🇦🇿
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Discover stunning cities, rich culture, and unforgettable experiences.
                    </p>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg text-sm">
                        Start Exploring
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;

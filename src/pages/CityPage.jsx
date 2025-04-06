// src/pages/CityPage.jsx
import { useParams, Link } from "react-router-dom";
import data from "../data/azerbaijan.json";
import { MapPin, Utensils, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const CityPage = () => {
    const { slug } = useParams();
    const city = data.find((c) => c.slug === slug);

    if (!city) {
        return <div className="p-6 text-center text-red-500">City not found.</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto px-4 py-12"
        >
            {/* Header Image */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-10  max-h-[500px]">
                <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-[350px] mt-4 md:h-[450px] object-cover"
                />
            </div>

            {/* Title */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-3">{city.name}</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{city.description}</p>
            </div>

            {/* Grid Sections */}
            <div className="grid md:grid-cols-2 gap-12">
                {/* Places */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <MapPin className="text-blue-600" size={22} />
                        <h2 className="text-2xl font-semibold text-blue-700">Places to Visit</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {city.places.map((place, i) => (
                            <div
                                key={i}
                                className="bg-white shadow hover:shadow-lg rounded-lg overflow-hidden flex gap-3 items-center transition"
                            >
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-20 h-20 object-cover rounded-l-lg"
                                />
                                <p className="font-medium text-gray-800 text-sm pr-3">{place.name}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Foods */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Utensils className="text-green-600" size={22} />
                        <h2 className="text-2xl font-semibold text-green-700">Famous Foods</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {city.foods.map((food, i) => (
                            <div
                                key={i}
                                className="bg-white shadow hover:shadow-lg rounded-lg overflow-hidden flex gap-3 items-center transition"
                            >
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-20 h-20 object-cover rounded-l-lg"
                                />
                                <p className="font-medium text-gray-800 text-sm pr-3">{food.name}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Back Button */}
            <div className="text-start mt-16">
                <Link
                    to="/cities"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition text-sm"
                >
                    <ArrowLeft size={16} />
                    Back to Cities
                </Link>
            </div>
        </motion.div>
    );
};

export default CityPage;

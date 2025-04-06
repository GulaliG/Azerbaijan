// src/pages/CitiesPage.jsx
import { Link } from "react-router-dom";
import data from "../data/azerbaijan.json";

const CitiesPage = () => {
    return (
        <div className="max-w-6xl mx-auto  mt-12 px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((city) => (
                    <Link
                        to={`/city/${city.slug}`}
                        key={city.slug}
                        className="block bg-white rounded-xl shadow hover:shadow-lg transition"
                    >
                        <img
                            src={city.image}
                            alt={city.name}
                            className="w-full h-40 object-cover rounded-t-xl"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">{city.name}</h2>
                            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{city.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CitiesPage;

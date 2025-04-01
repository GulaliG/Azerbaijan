// CityCard.jsx
import { Link } from "react-router-dom";

const CityCard = ({ city }) => {
    return (
        <div className="max-w-xs bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col mx-auto">
            {/* Görsel */}
            <img
                src={city.image}
                alt={city.name}
                className="w-full h-48 object-cover"
            />

            {/* Metinler + Buton */}
            <div className="p-4 flex flex-col flex-grow text-center">
                <h2 className="text-lg font-bold text-gray-800 mb-1">{city.name}</h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{city.description}</p>
                <button className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm transition">
                    Learn more
                </button>
            </div>
        </div>
    );
};

export default CityCard;


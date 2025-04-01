import { useParams } from "react-router-dom";
import data from "../data/azerbaijan.json";

const CityPage = () => {
    const { slug } = useParams();
    const city = data.find((c) => c.slug === slug);

    if (!city) {
        return <div className="p-4">City not found.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <img src={city.image} alt={city.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-4xl font-bold mb-2">{city.name}</h1>
            <p className="text-lg text-gray-700 mb-4">{city.description}</p>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Places to Visit</h2>
                <ul className="list-disc list-inside text-gray-600">
                    {city.places.map((place, i) => (
                        <li key={i}>{place}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Famous Foods</h2>
                <ul className="list-disc list-inside text-gray-600">
                    {city.foods.map((food, i) => (
                        <li key={i}>{food}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CityPage;

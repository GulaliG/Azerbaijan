// src/pages/CuisinePage.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

const CuisinePage = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulated API fetch (replace with actual endpoint if available)
        setTimeout(() => {
            setFoods([
                {
                    name: "Plov",
                    image: "/assets/foods/plov.jpg",
                    description: "A saffron-infused rice dish with meat, vegetables, and spices."
                },
                {
                    name: "Dolma",
                    image: "/assets/foods/dolma.jpg",
                    description: "Grape leaves or vegetables stuffed with rice and minced meat."
                },
                {
                    name: "Piti",
                    image: "/assets/foods/piti.jpg",
                    description: "A rich lamb stew cooked in earthenware pots."
                },
                {
                    name: "Dushbara",
                    image: "/assets/foods/dushbara.jpg",
                    description: "Tiny dumplings filled with minced lamb in a savory broth."
                },
                {
                    name: "Qutab",
                    image: "/assets/foods/qutab.jpg",
                    description: "Stuffed flatbread with greens, cheese, or meat."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
                {
                    name: "Lavangi",
                    image: "/assets/foods/lavangi.jpg",
                    description: "Walnut-stuffed chicken or fish, rich in flavor and tradition."
                },
            ]);
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 mt-12"
            >
                <ChefHat className="mx-auto text-red-500 mb-2" size={40} />
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Cuisine in Azerbaijan
                </h1>
                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                    Explore traditional Azerbaijani dishes like plov, dolma, piti, and more.
                </p>
            </motion.div>

            {loading ? (
                <div className="text-center text-gray-500">Loading dishes...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {foods.map((food, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{food.name}</h3>
                                <p className="text-sm text-gray-600">{food.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CuisinePage;

import CuisineCard from "./CuisineCard";

const dishes = [
    {
        name: "Plov",
        image: "/assets/plov.jpg",
        description: "Azerbaijan’s signature rice dish cooked with saffron and meat.",
    },
    {
        name: "Dolma",
        image: "/assets/dolma.jpg",
        description: "Stuffed grape leaves with meat and rice — a classic.",
    },
    {
        name: "Qutab",
        image: "/assets/qutab.jpg",
        description: "Thin dough filled with greens, cheese, or meat, folded and grilled.",
    },
];

const FeaturedCuisine = () => {
    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Discover Traditional Dishes
            </h2>
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {dishes.map((dish, index) => (
                    <CuisineCard key={index} dish={dish} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedCuisine;

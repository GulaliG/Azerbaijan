const CuisineCard = ({ dish }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-64 mx-auto">
            <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{dish.description}</p>
            </div>
        </div>
    );
};

export default CuisineCard;

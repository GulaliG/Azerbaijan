const TourCard = ({ tour }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow w-[260px]">
            <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="font-bold text-lg mb-1">{tour.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{tour.description}</p>
            <div className="text-sm flex justify-between text-gray-500">
                <span>👤 {tour.people} People</span>
                <span>🧳 {tour.bags} Bags</span>
            </div>
            <div className="text-green-600 font-bold text-xl mt-2">{tour.price} AZN</div>
            <button className="mt-2 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600">
                Select
            </button>
        </div>
    );
};

export default TourCard;

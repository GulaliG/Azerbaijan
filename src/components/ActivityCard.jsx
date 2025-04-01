const ActivityCard = ({ activity }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-64 mx-auto">
            <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{activity.description}</p>
            </div>
        </div>
    );
};

export default ActivityCard;

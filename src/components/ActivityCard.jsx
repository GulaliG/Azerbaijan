const ActivityCard = ({ activity }) => {
    return (
        <div className="w-72 bg-white rounded-xl overflow-hidden  gap-6 shadow-md transition-transform duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 hover:rotate-[0.5deg]">
            <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-44 object-cover"
            />
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
            </div>
        </div>
    );
};

export default ActivityCard;

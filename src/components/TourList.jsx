import TourCard from "./TourCard";

const TourList = ({ tours }) => {
    if (!tours.length) {
        return <p className="text-center text-xl text-gray-600 mt-6">Find Your Tour</p>;
    }

    return (
        <div className="flex flex-wrap gap-6 justify-center py-6 max-w-6xl mx-auto">
            {tours.map((tour, index) => (
                <TourCard key={index} tour={tour} />
            ))}
        </div>
    );
};

export default TourList;

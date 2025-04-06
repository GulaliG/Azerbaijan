import { useState } from "react";
import { motion } from "framer-motion";
import ReservationDropdown from "../components/ReservationDropdown";

const mockActivities = [
    {
        title: "Hiking in Gabala",
        image: "/assets/activities/hiking.jpg",
        description: "Explore the beautiful Caucasus Mountains on foot.",
    },
    {
        title: "Hot Springs in Masalli",
        image: "/assets/activities/springs.jpg",
        description: "Relax in natural mineral springs in the south of Azerbaijan.",
    },
    {
        title: "Wine Tasting in Jalilabad",
        image: "/assets/activities/wine.jpg",
        description: "Sample local wines and enjoy scenic vineyards.",
    },
    {
        title: "Cable Car Ride in Tufandag",
        image: "/assets/activities/cablecar.jpg",
        description: "Take in stunning views over snowy mountains.",
    },
    {
        title: "Historical Walk in Sheki",
        image: "/assets/activities/walk.jpg",
        description: "Visit ancient palaces and charming alleys of Sheki.",
    },
    {
        title: "Boating on Mingachevir River",
        image: "/assets/activities/boat.jpg",
        description: "Enjoy the calm waters of the Kura river on a boat tour.",
    },
];

const ActivitiesPage = () => {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        from: "",
        to: "",
    });

    const handleToggleDropdown = (index) => {
        setSelectedActivity(selectedActivity === index ? null : index);
    };

    const handleSubmit = (formData, activity) => {
        console.log("✅ Reservation submitted:", formData, activity);
        setSelectedActivity(null);
        setForm({
            name: "",
            email: "",
            phone: "",
            from: "",
            to: "",
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 mt-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Things to Do in Azerbaijan</h1>
                <p className="text-gray-600">
                    From nature hikes to historic tours, explore activities for every traveler.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {mockActivities.map((activity, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                    >
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex-grow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {activity.title}
                            </h3>
                            <p className="text-sm text-gray-600">{activity.description}</p>
                        </div>
                        <div className="p-4 pt-0">
                            <button
                                onClick={() => handleToggleDropdown(index)}
                                className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                            >
                                {selectedActivity === index ? "Close" : "Book Now"}
                            </button>

                            {selectedActivity === index && (
                                <ReservationDropdown
                                    activity={activity}
                                    onClose={() => setSelectedActivity(null)}
                                    onSubmit={handleSubmit}
                                    form={form}
                                    setForm={setForm}
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ActivitiesPage;

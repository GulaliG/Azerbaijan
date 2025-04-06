import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Mock review data
const reviews = [
    {
        name: "Aylin M.",
        location: "Baku",
        comment: "Exploring Baku with this guide was the best part of my trip. Everything was so easy and organized!",
        rating: 5,
    },
    {
        name: "Emil R.",
        location: "Gabala",
        comment: "Loved the nature tours. The cable car and waterfalls were stunning!",
        rating: 4,
    },
    {
        name: "Leyla K.",
        location: "Sheki",
        comment: "Such a culturally rich place. Food recommendations were on point!",
        rating: 5,
    },
    {
        name: "Javid A.",
        location: "Shamakhi",
        comment: "History and hospitality combined beautifully. Will return!",
        rating: 4,
    },
    {
        name: "Sevda T.",
        location: "Lankaran",
        comment: "The citrus gardens and tea houses were a delight. Highly recommended!",
        rating: 5,
    },
    {
        name: "Murad N.",
        location: "Nakhchivan",
        comment: "Unique architecture and peaceful atmosphere. A must-see!",
        rating: 4,
    },
];

const ReviewsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-14 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800">Traveler Reviews</h1>
                    <p className="text-gray-600 mt-2 text-sm">
                        What recent visitors are saying about Azerbaijan
                    </p>
                </div>

                {/* Review Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow p-6 hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                                <div className="flex text-yellow-400">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 italic mb-2">Visited: {review.location}</p>
                            <p className="text-gray-700 text-sm">{review.comment}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;

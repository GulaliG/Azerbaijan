import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Dummy review data
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
];

const Reviews = () => {
    return (
        <section className="bg-gray-50 py-14" id="reviews">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">What Travelers Say</h2>
                    <p className="text-gray-600 text-sm mt-1">Genuine reviews from recent visitors</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-800">{review.name}</h3>
                                <div className="flex text-yellow-400">
                                    {Array.from({ length: review.rating }, (_, i) => (
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
        </section>
    );
};

export default Reviews;

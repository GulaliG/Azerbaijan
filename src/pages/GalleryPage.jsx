import { motion } from "framer-motion";

// Fake data örneği
const galleryData = [
    {
        src: "/assets/gallery/baku.jpg",
        title: "Baku",
    },
    {
        src: "/assets/gallery/gabala.jpg",
        title: "Gabala Nature",
    },
    {
        src: "/assets/gallery/sheki.jpg",
        title: "Sheki Old Town",
    },
    {
        src: "/assets/gallery/lake.jpg",
        title: "Lake Goygol",
    },
    {
        src: "/assets/gallery/quba.jpg",
        title: "Quba Mountains",
    },
    {
        src: "/assets/gallery/nakhchivan.jpg",
        title: "Nakhchivan Fortress",
    },
];

const GalleryPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 mt-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Photo Gallery</h1>
                <p className="text-gray-600 text-lg">
                    Explore the beauty of Azerbaijan through breathtaking images.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryData.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer transform hover:scale-[1.02] transition"
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="bg-white p-3 text-center">
                            <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;

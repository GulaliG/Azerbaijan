const photos = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
    "/assets/gallery5.jpg",
    "/assets/gallery6.jpg",
];

const PhotoGallery = () => {
    return (
        <section className="py-12 bg-white">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Explore Beautiful Destinations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
                {photos.map((src, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl shadow hover:shadow-xl transition transform hover:scale-105 duration-300"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-60 object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotoGallery;

import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        name: "Anna Müller",
        photo: "/assets/testimonials/anna.jpg",
        comment: "Gobustan was magical. The petroglyphs and views were unforgettable!",
        rating: 5,
        location: "Germany",
    },
    {
        name: "Liam O'Connor",
        photo: "/assets/testimonials/liam.jpg",
        comment: "Loved the food in Sheki! So authentic and flavorful.",
        rating: 4,
        location: "Ireland",
    },
    {
        name: "Sara Khan",
        photo: "/assets/testimonials/sara.jpg",
        comment: "I fell in love with Baku's modern vibe and rich culture.",
        rating: 5,
        location: "UAE",
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                What Travelers Say
            </h2>
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {testimonials.map((item, index) => (
                    <TestimonialCard key={index} testimonial={item} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

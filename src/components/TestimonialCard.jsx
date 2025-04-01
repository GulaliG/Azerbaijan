const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm mx-auto text-center hover:shadow-lg transition">
            <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-sm text-gray-600 italic mb-3">"{testimonial.comment}"</p>
            <div className="text-yellow-400 mb-2">
                {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
            </div>
            <h4 className="text-md font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
    );
};

export default TestimonialCard;

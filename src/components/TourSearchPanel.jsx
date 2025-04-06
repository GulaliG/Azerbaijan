import { useState } from "react";

const TourSearchPanel = ({ onSearch }) => {
    const [form, setForm] = useState({
        from: "",
        to: "",
        date: "",
        time: "", // Saat buraya eklendi
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch?.(form);
        alert(`Searching from ${form.from} to ${form.to} on ${form.date} at ${form.time}`);
    };

    return (
        <div className="relative z-20 flex justify-center mt-[-40px] mb-6 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-wrap justify-center items-center gap-4 max-w-5xl w-full h-32"
            >
                <input
                    type="text"
                    name="from"
                    placeholder="From"
                    value={form.from}
                    onChange={handleChange}
                    className="w-32 md:w-40 p-2 border rounded text-sm"
                    required
                />
                <input
                    type="text"
                    name="to"
                    placeholder="To"
                    value={form.to}
                    onChange={handleChange}
                    className="w-32 md:w-40 p-2 border rounded text-sm"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="p-2 border rounded text-sm"
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="p-2 border rounded text-sm"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition text-sm"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default TourSearchPanel;

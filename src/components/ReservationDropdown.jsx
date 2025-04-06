import { useRef, useEffect } from "react";

const ReservationDropdown = ({ activity, onClose, onSubmit, form, setForm }) => {
    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form, activity);
        setForm({ name: "", email: "", phone: "", date: "", time: "" });
    };

    return (
        <div
            ref={dropdownRef}
            className="border bg-white rounded-xl p-4 w-[260px] shadow-xl text-xs space-y-2"
        >
            <p className="font-medium text-gray-700 mb-1">
                Booking for <span className="text-blue-600">{activity.name}</span>
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border p-1.5 rounded"
                    required
                />
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border p-1.5 rounded"
                    required
                />
                <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border p-1.5 rounded"
                    required
                />
                <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border p-1.5 rounded"
                    required
                />
                <input
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full border p-1.5 rounded"
                    required
                />
                <div className="flex justify-between items-center pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-500 hover:underline"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReservationDropdown;

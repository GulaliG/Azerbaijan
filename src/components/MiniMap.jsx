import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Marker icon fix (Leaflet default icon)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    iconUrl: "/leaflet/marker-icon.png",
    shadowUrl: "/leaflet/marker-shadow.png",
});

const cities = [
    {
        name: "Baku",
        coords: [40.4093, 49.8671],
        description: "Capital of Azerbaijan",
    },
    {
        name: "Sheki",
        coords: [41.1919, 47.1706],
        description: "Historic Silk Road town",
    },
    {
        name: "Ganja",
        coords: [40.6828, 46.3606],
        description: "One of the oldest cities",
    },
];

const MiniMap = () => {
    return (
        <section className="py-12 bg-white">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Explore on the Map
            </h2>
            <div className="w-full max-w-5xl mx-auto h-[500px] px-4">
                <MapContainer
                    center={[40.4093, 49.8671]}
                    zoom={6}
                    scrollWheelZoom={false}
                    className="h-full w-full rounded-xl shadow"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {cities.map((city, i) => (
                        <Marker key={i} position={city.coords}>
                            <Popup>
                                <strong>{city.name}</strong>
                                <br />
                                {city.description}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
};

export default MiniMap;

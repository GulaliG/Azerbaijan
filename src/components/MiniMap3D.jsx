// src/components/MiniMap3D.jsx
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import azerbaijanData from "../data/azerbaijan.json";
import Custom3DMarker from "./Custom3DMarker";

const cityCoords = {
    Baku: [49.8671, 40.4093],
    Sheki: [47.1706, 41.1919],
    Ganja: [46.3606, 40.6828],
    Gabala: [47.8456, 40.9845],
    Lankaran: [48.851, 38.754],
    Shamakhi: [48.6419, 40.6318],
    Nakhchivan: [45.412, 39.208],
    Quba: [48.5131, 41.3611],
    Sumqayit: [49.6686, 40.5897],
    Mingachevir: [47.048, 40.7706],
    Zaqatala: [46.6431, 41.6316],
    Gakh: [46.9326, 41.1006],
    Ismayilli: [48.1516, 40.7891],
    Masalli: [48.6651, 39.0345],
    Jalilabad: [48.4913, 39.2095],
    Shirvan: [48.9283, 39.931],
    Salyan: [48.9796, 39.5959],
    Yevlakh: [47.15, 40.6186],
    Agdam: [46.9266, 39.9871],
};

const MiniMap3D = () => {
    const [cities, setCities] = useState([]);
    const AzerbaijanMesh = () => {
        const gltf = useGLTF("/models/azmap.glb");
        return <primitive object={gltf.scene} scale={2} position={[0, 0, 0]} />;
    };


    useEffect(() => {
        const mapped = azerbaijanData
            .filter((city) => cityCoords[city.name])
            .map((city) => ({
                ...city,
                coords: cityCoords[city.name],
            }));
        setCities(mapped);
    }, []);

    const transformCoords = ([lon, lat]) => [
        (lon - 47) * 2,
        (lat - 40) * 2
    ];



    return (
        <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16">
            <h2 className="text-3xl font-bold text-center mb-6">
                🌐 3D Map View & Booking Dropdown
            </h2>

            <div className="w-full h-[700px] max-w-screen-xl mx-auto rounded-2xl shadow-xl overflow-hidden border">
                <Canvas camera={{ position: [0, -20, 15], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Environment preset="sunset" background={false} />
                    <OrbitControls enablePan enableZoom enableRotate />

                    {/* 3D Azerbaycan Modeli */}
                    <AzerbaijanMesh />

                    {/* Markerlar */}
                    {cities.map((city, i) => (
                        <Custom3DMarker
                            key={i}
                            position={transformCoords(city.coords)}
                            name={city.name}
                        />
                    ))}
                </Canvas>

            </div>
        </section>
    );
};

export default MiniMap3D;

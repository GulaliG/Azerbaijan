// src/components/MiniGlobe.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

// Azerbaycan koordinatları
const azCoords = {
    lat: 40.4093,
    lng: 49.8671,
};

// Dünya üzerindeki pozisyona dönüştür
const latLngToXYZ = (radius, lat, lng) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return [x, y, z];
};

const Globe = () => {
    const earthRadius = 2;
    const azPos = latLngToXYZ(earthRadius + 0.02, azCoords.lat, azCoords.lng);

    return (
        <>
            {/* Dünya */}
            <mesh>
                <sphereGeometry args={[earthRadius, 64, 64]} />
                <meshStandardMaterial
                    map={new THREE.TextureLoader().load("/earth_daymap.jpg")}
                />
            </mesh>

            {/* Marker (Azerbaycan) */}
            <mesh position={azPos}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshStandardMaterial color="red" />
            </mesh>

            {/* Label */}
            <Html position={azPos}>
                <div className="text-xs px-2 py-1 bg-white rounded shadow text-blue-600 font-bold">
                    Azerbaijan
                </div>
            </Html>
        </>
    );
};

const MiniGlobe = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-white">
            <h2 className="text-3xl font-extrabold text-center mb-6">
                🌍 3D Map View & Booking Dropdown
            </h2>
            <div className="max-w-5xl mx-auto rounded-2xl shadow-xl overflow-hidden h-[600px] border bg-white">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} intensity={1} />
                    <Globe />
                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
                        minDistance={3}
                        maxDistance={10}
                    />
                </Canvas>
            </div>
        </section>
    );
};

export default MiniGlobe;

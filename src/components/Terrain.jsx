// src/components/Terrain.jsx
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef } from 'react';

const Terrain = () => {
    const heightMap = useLoader(TextureLoader, "/map.png");
    const meshRef = useRef();

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[10, 10, 256, 256]} />
            <meshStandardMaterial
                displacementMap={heightMap}
                displacementScale={1.5}
                color="#88cc88"
                wireframe={false}
            />
        </mesh>
    );
};

export default Terrain;

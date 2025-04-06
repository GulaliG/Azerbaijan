import { Billboard, Text } from "@react-three/drei";

const Custom3DMarker = ({ position, name }) => {
    return (
        <Billboard position={position}>
            <Text
                color="black"
                fontSize={0.3}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.01}
                outlineColor="#fff"
            >
                {name}
            </Text>
        </Billboard>
    );
};

export default Custom3DMarker;

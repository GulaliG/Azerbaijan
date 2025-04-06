import * as THREE from "three";

export function getAzerbaijanShape() {
    const shape = new THREE.Shape();

    // Basit Azerbaycan silueti gibi şekil
    shape.moveTo(0, 0);
    shape.lineTo(2, 1);
    shape.lineTo(3, 2.5);
    shape.lineTo(2.5, 3.5);
    shape.lineTo(1.5, 3.8);
    shape.lineTo(0, 3.2);
    shape.lineTo(-1, 2);
    shape.lineTo(-1.5, 1);
    shape.lineTo(0, 0); // başlangıca dönüş

    return shape;
}

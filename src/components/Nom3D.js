import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";

function AnimatedText({ children, position }) {
    const textRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        textRef.current.position.y = position[1] + Math.sin(t * 1) * 0.3;
        textRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
        textRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;
    });

    return (
        <Text3D ref={textRef} font="/BebasNeue.json" size={5} height={0.2} position={position}>
            {children}
            <meshPhysicalMaterial
                color="#4c96bd"
                metalness={0.8}
                roughness={0.2}
                clearcoat={0.5}
                clearcoatRoughness={0.2}
            />
        </Text3D>
    );
}

function Nom3D() {
    return (
        <Canvas
            style={{ width: "100%", height: "200px" }}
            camera={{ position: [0, 0, 10] }}
            gl={{ alpha: true, physicallyCorrectLights: true }}
        >
            <ambientLight intensity={1.9} />
            <spotLight
                position={[0, 20, 10]}
                power={15000}
                angle={Math.PI / 3}
                penumbra={1}
                distance={100}
                castShadow
            />

            <Suspense fallback={null}>
                <AnimatedText position={[-6, 0.5, 0]}>LORIS</AnimatedText>
                <AnimatedText position={[-6, -5.5, 0]}>NEVE</AnimatedText>
            </Suspense>
        </Canvas>
    );
}

export default Nom3D;

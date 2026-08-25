import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

function Vehicle() {
  const { scene } = useGLTF("/model_ball.glb");

  return (
    <primitive
      object={scene}
      scale={2.4}
      position={[0, -0.8, 0]}
    />
  );
}

export default function VehicleModel() {
  return (
    <Canvas
      camera={{
        position: [4, 2.5, 6],
        fov: 35,
      }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <Environment preset="studio" />

      <Vehicle />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
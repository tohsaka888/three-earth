import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";

export default function Container() {
  return (
    <Canvas
      camera={{ fov: 90, position: [0, 0, 10], up: [0, 0, 1], aspect: 2 }}
      style={{ width: "100vw", height: "100vh" }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0);
      }}
    >
      <ambientLight />
      <pointLight color={"#ffffff"} position={[-5, -10, 5]} />
      <Earth />
    </Canvas>
  );
}

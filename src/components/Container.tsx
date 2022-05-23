import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";
import Ground from "./Ground";

export default function Container() {
  return (
    <Canvas
      camera={{ fov: 90, position: [0, 0, 10], up: [0, 0, 1] }}
      style={{ width: "100vw", height: "100vh" }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0);
      }}
      shadows={{enabled: true}}
    >
      {/* <ambientLight /> */}
      <pointLight color={"#ffffff"} position={[0, 10, 10]} castShadow={true} intensity={1} />
      <Earth />
      <Ground />
    </Canvas>
  );
}

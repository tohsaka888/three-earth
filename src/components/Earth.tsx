import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh, TextureLoader } from "three";

function Earth() {
  console.log("render");
  const earthRef = useRef<Mesh>(null!);
  const loader = useLoader(
    TextureLoader,
    "https://img-blog.csdnimg.cn/20200630214117533.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE4NDIwNjQx,size_16,color_FFFFFF,t_70"
  );
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh position={[0, 0, 0]} ref={earthRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial
        emissive={"#000"}
        metalness={0.5}
        roughness={0.5}
        map={loader}
      />
    </mesh>
  );
}

export default Earth;

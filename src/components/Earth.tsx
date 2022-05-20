import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh, TextureLoader } from "three";

function Earth() {
  console.log("render");
  const earthRef = useRef<Mesh>(null!);
  const maploader = useLoader(
    TextureLoader,
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg"
  );
  const bumpTexture = useLoader(
    TextureLoader,
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthbump1k.jpg"
  );
  const specularTexture = useLoader(
    TextureLoader,
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthspec1k.jpg"
  );
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh position={[0, 0, 0]} ref={earthRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshPhongMaterial
        emissive={"#000000"}
        map={maploader}
        bumpMap={bumpTexture}
        specularMap={specularTexture}
      />
    </mesh>
  );
}

export default Earth;

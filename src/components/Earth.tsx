import { useLoader, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader, Vector3, Mesh } from "three";
import { a, useSpring } from "@react-spring/three";
import { useGesture } from "@use-gesture/react";

function Earth() {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
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

  const [style, set] = useSpring(
    () => ({
      rotation: [0, 0, 0],
      position: [0, 0, 0],
    })
  );

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      set.start({ rotation: [-x / aspect, y / aspect, 0] });
    },
  });
  return (
    <a.mesh ref={earthRef} {...style} {...bind()}>
      <sphereGeometry args={[5, 360, 360]} />
      <meshPhongMaterial
        emissive={"#000000"}
        map={maploader}
        bumpMap={bumpTexture}
        specularMap={specularTexture}
      />
    </a.mesh>
  );
}

export default Earth;

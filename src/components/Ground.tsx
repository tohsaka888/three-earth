import React from "react";

function Ground() {
  return (
    <mesh
      position={[5, 0, 0]}
      receiveShadow={true}
      castShadow={true}
      rotation={[0, Math.PI * -0.5, 0]}
    >
      <planeGeometry args={[15, 20]} />
      <meshPhongMaterial />
    </mesh>
  );
}

export default Ground;

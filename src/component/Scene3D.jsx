import React, { Suspense } from "react";
import { DefaultXRControllers, ARCanvas } from "@react-three/xr";
import Reticle from "./3D/Reticle";

export function Scene3D() {
  return (
    <ARCanvas
      sessionInit={{
        requiredFeatures: ["hit-test"],
        optionalFeatures: ["dom-overlay"],
        domOverlay: { root: document.body }
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Reticle />
      </Suspense>
      <DefaultXRControllers />
    </ARCanvas>
  );
}

/*
        optionalFeatures: ["dom-overlay"],
        domOverlay: { root: document.getElementById("HUD") },
*/

"use client"

import { ReactNode, Suspense } from "react";
import {Canvas} from "@react-three/fiber"

export default function ThreeScene({children} : {children: ReactNode}) {
    return (
        <Suspense>
            <Canvas
                shadows
                camera={{fov:74}}
                // dpr={{1,2}}
            >
                {children}
            </Canvas>
        </Suspense>
    )
}
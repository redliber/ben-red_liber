"use client"

import { AnimationOptions, hover, inView, motion, stagger, useAnimate, useInView } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react"
import { mat3 } from "three/src/nodes/TSL.js"
import { getCurrentStack } from "three/tsl"
import { useScreenSize } from "use-screen-size"
import { fitRange } from "../../lib/utils"
import { type AnimWord, constColors } from "../../lib/const"
import AnimLetter from "./anim-letter"



export default function AnimWord({
    children,
    className,
    initColor = constColors.abyss,
    hoverColor = constColors.beige,
    mouseDownColor = constColors.dirtyYellow,
    inViewTransition = false,
    floating = true,
    maxFloat
}: AnimWord) {
    let lettersArray
    if (typeof children == "string" && children) {
        lettersArray = children.split("")

        return (
            <div className={`${className} flex flex-row gap-0`}>
                {
                    lettersArray.map((item, index) => {
                        if (item == " ") {
                            return (
                                <p key={index}>
                                    &nbsp;&nbsp;
                                </p>
                            )
                        }
                        return (
                            <AnimLetter
                                key={index}
                                idx={index}
                                letter={item}
                                initColor={initColor}
                                hoverColor={hoverColor}
                                mouseDownColor={mouseDownColor}
                                inViewTransition={inViewTransition}
                                floating={floating}
                                maxFloat={maxFloat}
                            />
                        )
                    })
                }
            </div>
        )
    }
}


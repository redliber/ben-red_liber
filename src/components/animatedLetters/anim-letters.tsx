"use client"

import { inView, motion, stagger, useAnimate, useInView } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react"
import { mat3 } from "three/src/nodes/TSL.js"
import { getCurrentStack } from "three/tsl"
import { useScreenSize } from "use-screen-size"
import { fitRange } from "../../lib/utils"

export default function AnimLetters({
    children,
    className
}: {
    children: ReactNode
    className: string
}) {
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
                            <Letter
                                key={index}
                                idx={index}
                                letter={item}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

function Letter({
    letter,
    idx,
}: {
    letter: String
    idx: number
}) {
    const [scope, animate] = useAnimate()
    const [hovered, setHovered] = useState(false)
    const [maxFloat, setMaxFloat] = useState(25)
    const [maxEntrance, setMaxEntrance] = useState(-150)
    const [indicateDone, setDone] = useState(false)
    const [currentYPos, setYPos] = useState(0)

    const isInView = useInView(scope)
    const { width, height } = useScreenSize()

    useEffect(() => {
        if (width > 768) {
            setMaxFloat(100)
            setMaxEntrance(-500)
        }
    }, [width])

    const rotationRange = fitRange(Math.random(), 0, 1, 8, 12)
    const rotateAmt = Math.random() > 0.5 ? rotationRange : -rotationRange

    const floatingRange = fitRange(Math.random(), 0, 1, -maxFloat, maxFloat)
    const floatingAmt = Math.random() > 0.5 ? floatingRange : -1 * floatingRange

    const hoveredState = {
        anim: { scale: 1.1, rotate: rotateAmt * 0.8 },
        transition: { duration: 0.3, type: "spring" }
    }

    useEffect(() => {
        if (isInView && !indicateDone) {
            animate([
                [
                    scope.current,
                    { opacity: 0, scale: 1, y: maxEntrance },
                    { duration: 0, type: "spring" }
                ],
                [
                    scope.current,
                    { opacity: 1, scale: 1, y: floatingAmt },
                    {
                        duration: 1, type: "spring", delay: idx * 0.15
                    }
                ]
            ])
            setDone(true)
        }
    }, [isInView])

    useEffect(() => {
        hovered ? hoverLetter() : hoverLetterEnd()
    }, [hovered, animate, scope])

    function hoverLetter() {
        animate(scope.current, hoveredState.anim, hoveredState.transition)
    }

    function mouseDownLetter() {
        animate(
            scope.current,
            {
                scale: 1.2,
                rotate: rotateAmt * 0.5,
            }, {
            duration: 0.5, type: "spring"
        }
        )
    }

    function mouseUpLetter() {
        animate(scope.current, hoveredState.anim, hoveredState.transition)
    }

    function hoverLetterEnd() {
        animate(scope.current, { scale: 1, rotate: 0 }, { duration: 1, type: "spring", })

    }

    return (
        <>
            <p
                ref={scope}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                onMouseDown={() => mouseDownLetter()}
                onMouseUp={() => mouseUpLetter()}
                style={{ opacity: 0 }}
            >
                {letter}
            </p>
        </>
    )
}
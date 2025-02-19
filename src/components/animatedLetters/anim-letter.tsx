"use client"
import { AnimationOptions, hover, inView, motion, stagger, transform, useAnimate, useInView } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react"
import { constColors, type AnimLetter } from "../../lib/const"
import { useScreenSize } from "use-screen-size"
import { fitRange } from "~/lib/utils"

export default function AnimLetter({
    letter,
    idx,
    initColor = constColors.abyss,
    hoverColor = constColors.beige,
    mouseDownColor = constColors.dirtyYellow,
    inViewTransition,
    floating,
    maxFloat = 25
}: AnimLetter) {
    const [scope, animate] = useAnimate()
    const [hovered, setHovered] = useState(false)
    const [useMaxFloat, setMaxFloat] = useState(maxFloat)
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

    const floatingRange = fitRange(Math.random(), 0, 1, -useMaxFloat, useMaxFloat)
    const floatingAmt = Math.random() > 0.5 ? floatingRange : -1 * floatingRange

    const hoveredAnim = { scale: 1.1, rotate: rotateAmt * 0.8, color: hoverColor }
    const hoveredTransition: AnimationOptions = { duration: 0.3, type: "spring" }

    useEffect(() => {
        if (isInView && !indicateDone && inViewTransition) {
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
        const translateY = idx % 2 ? -maxFloat : maxFloat
        if (!inViewTransition) setDone(true)
        if (floating && indicateDone) {
            animate(scope.current,
                {
                    translateY: [translateY,-translateY]
                },
                {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    type: "tween"
                }
            )
        }
    }, [hovered, animate, scope, indicateDone])

    useEffect(() => {
        hovered ? hoverLetter() : hoverLetterEnd()
    }, [hovered, animate, scope])

    function hoverLetter() {
        animate(scope.current, hoveredAnim, hoveredTransition)
    }

    function mouseDownLetter() {
        animate(
            scope.current,
            {
                scale: 1.2,
                rotate: rotateAmt * 0.5,
                color: mouseDownColor
            }, {
            duration: 0.5, type: "spring"
        }
        )
    }

    function mouseUpLetter() {
        animate(scope.current, hoveredAnim, hoveredTransition)
    }

    function hoverLetterEnd() {
        animate(scope.current, { scale: 1, rotate: 0, color: initColor }, { duration: 1, type: "spring", })

    }

    return (
        <>
            <p
                ref={scope}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                onMouseDown={() => mouseDownLetter()}
                onMouseUp={() => mouseUpLetter()}
                style={{ color: initColor }}
            >
                {letter}
            </p>
        </>
    )
}
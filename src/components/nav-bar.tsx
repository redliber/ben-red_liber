"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimationOptions, inView, motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect, useState } from "react"
import { fitRange } from "~/lib/utils"
import { usePathname } from "next/navigation"

export function NavBar() {
    const usePath = usePathname().split("");
    const pathName = usePath.slice(1).join("");

    const paths = ["home", "works", "blog"];

    const [scope, animate] = useAnimate()
    const [useHovered, setHovered] = useState(false)

    const rotationRange = fitRange(Math.random(), 0, 1, 8, 12)
    const rotateAmt = Math.random() > 0.5 ? rotationRange : -rotationRange

    const hoveredAnim = { scale: 1.5, rotate: 315 }
    const hoveredTransition: AnimationOptions = { duration: 0.3, type: "spring" }

    useEffect(() => {
        animate(scope.current,
            {
                y: [-2, 2]
            },
            {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                type: "tween"
            }
        )
    }, [useHovered, animate, scope])

    useEffect(() => {
        useHovered ? hoverAnimate() : hoverAnimateEnd()
    }, [useHovered, animate, scope])

    function hoverAnimate() {
        animate(scope.current, hoveredAnim, hoveredTransition)
    }

    function hoverAnimateEnd() {
        animate(scope.current, { scale: 1, rotate: 0 }, { duration: 1, type: "spring", })
    }

    function mouseDown() {
        animate(
            scope.current,
            {
                scale: 0.75,
                // rotate: rotateAmt * 0.5,
            }, {
            duration: 0.5, type: "spring"
        }
        )
    }

    function mouseUp() {
        animate(scope.current, hoveredAnim, hoveredTransition)
    }

    return (
        <header className="flex sticky top-0 p-2 md:p-4 w-full z-10 overflow-clip bg-transparent">
            <div className="none text-lg font-semibold leading-5">
                {paths.map((item, index) => {
                    const link = item == "home" ? "" : item;
                    return (
                        <Link key={index} href={`/${link}`}>
                            {link == pathName ? (
                                <p className="text-beige active:text-dirtyYellow hover:text-abyss">
                                    {item.toUpperCase()}
                                </p>
                            ) : (
                                    <p className="text-bloodDark active:text-dirtyYellow hover:text-beige mix-blend-screen">
                                    {item.toUpperCase()}
                                </p>
                            )}
                        </Link>
                    );
                })}
            </div>
            <div className="grow justify-items-end">
                <Image
                    ref={scope}
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    onMouseDown={() => mouseDown()}
                    onMouseUp={() => mouseUp()}
                    src='/logos/beige_REDLIBER-main_logo.ico'
                    width={35}
                    height={35}
                    alt="Red Liber Logo Beige"
                    className=""
                />
            </div>
        </header>
    )
}
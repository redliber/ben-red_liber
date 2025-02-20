'use client'
import Image from "next/image";
import AnimWord from "../components/animatedLetters/anim-word";
import AnimLetter from "~/components/animatedLetters/anim-letter";
import { useRef, useState } from "react";
import { useIntersectionObserver, useWindowScroll } from "@uidotdev/usehooks";
import Link from "next/link";
import { constColors } from "~/lib/const";

export default function HomePage() {
    const professions = [
        'DESIGNER',
        'SCREENWRITER',
        'DEVELOPER'
    ]

    const professionsDetails = [
        'best art sculpts skeletons out of flesh, crafting truth by exposing the essence of being.🎨',
        'The best stories are written in blood, tapping into the primeval circuitries of our subconscious.🖋️',
        'The best experiences pump the heart, accelerating time with us none the wiser.💻'
    ]

    const [useDesigner, setDesigner] = useState(false)
    const [useScreenwriter, setScreenwriter] = useState(false)
    const [useDeveloper, setDeveloper] = useState(false)

    const [hovered, setHovered] = useState(-1)
    const [{x,y}, scrollTo] = useWindowScroll()

    return (
        <>
            <main className=" ">
                <div className="bg-blood flex flex-col justify-items-center content-center justify-between align-middle min-h-[90svh] max-w-[100vw] p-2 md:p-4 overflow-hidden">
                    <div>
                        &nbsp;
                    </div>
                    <div className="items-center self-center">
                        <AnimWord
                            className="text-[45vw] md:text-[42vw] font-display text-center select-none -z-[100] leading-[0.75] flex flex-row"
                            inViewTransition={true}
                            floating={true}
                        >
                            BEN
                        </AnimWord>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between text-xl z-10 leading-6 sticky top-0">
                        <div className="flex flex-col font-semibold md:flex-row md:gap-4">
                            {professions.map((item, index) => (
                                <div 
                                    key={index}
                                    onMouseEnter={() => {
                                        setHovered(index)
                                    }}
                                onMouseLeave={() => {
                                    setHovered(-1)
                                }}
                                >
                                    <AnimLetter
                                        letter={item}
                                        idx={index}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <Link href={'/#contact'} className="text-beige">CONTACT ME</Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 md:p-4">
                    <p className="text-5xl overflow-hidden md:text-7xl group">I believe that&nbsp;
                        {professionsDetails.map((item, index) => {
                            return (
                                <SpanItems hovered={hovered} index={index} item={item} key={index}/>
                        )})}
                    </p>
                </div>
                <div className="bg-abyss p-2 md:p-4 min-h-[200vh] flex flex-col justify-end">
                    <p className="font-black text-blood text-[12vw] md:text-[10vw] leading-[0.8]">CREATIVITY AT THE SPEED OF&nbsp;
                        {
                            ["D","A","R","K"].map((item, index) => (
                                <span key={index} className="hover:text-abyss active:text-zinc-500 transition duration-500 text-bloodDark">
                                    {item}
                                </span>
                            ))
                        }
                    </p>
                </div>
                <div className="px-2 md:px-4 py-42 md:py-48 flex flex-col items-end min-h-[60vh] overflow-hidden">
                    <div className="my-32 justify-end text-[12vw] md:text-[10vw] leading-[0.8]">
                        <AnimWord
                            className="justify-end font-black text-right select-none -z-[100] flex flex-wrap"
                            // inViewTransition={true}
                            floating={false}
                        >
                            DON'T BE SHY
                        </AnimWord>
                        <AnimWord
                            className="justify-end font-black text-right select-none -z-[100] flex flex-wrap"
                            // inViewTransition={true}
                            floating={false}
                        >
                            DON'T BE SHY
                        </AnimWord>
                        <AnimWord
                            className="justify-end font-black text-right select-none -z-[100] flex flex-wrap"
                            // inViewTransition={true}
                            floating={false}
                        >
                            DON'T BE SHY
                        </AnimWord>
                        <AnimWord
                            className="justify-end font-black text-right select-none -z-[100] flex flex-wrap"
                            inViewTransition={true}
                            floating={true}
                            maxFloat={10}
                            initColor={constColors.beige}
                            hoverColor={constColors.bloodDark}
                            mouseDownColor={constColors.dirtyYellow}
                        >
                            CONTACT ME
                        </AnimWord>
                    </div>
                    <div id="contact" className="items-end content-end justify-end justify-items-end text-lg leading-5 md:text-5xl mt-20">
                        <a href="mailto:redliber@tutamail.com" className="hover:text-beige underline">redliber@tutamail.com</a>
                        <p className="hover:text-bloodDark">Whatsapp: <span className="underline hover:text-beige">+1 778 985 2178</span></p>
                        <p className="hover:text-bloodDark">Phone: <span className="underline hover:text-beige">+62 812 950 72726</span></p>
                        <a href="https://x.com/bb_redliber" className="hover:text-bloodDark">X: <span className="underline hover:text-beige">@bb_redliber</span></a>
                    </div>
                    
                </div>
            </main>
        </>
    )
}

function SpanItems({item, hovered, index}: {item: String; hovered: number; index: number}) {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });

    return (
        <span ref={ref} className={
            `transition duration-500 peer peer-hover:text-red-50 hover:text-blood ${hovered == index ? 'text-blood' : hovered == -1 ? "text-abyss" : "text-red-50"}`
        }>
            {item}
        </span>
    )
}
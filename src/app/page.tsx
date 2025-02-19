'use client'
import Image from "next/image";
import AnimWord from "../components/animatedLetters/anim-word";
import AnimLetter from "~/components/animatedLetters/anim-letter";
import { useRef, useState } from "react";
import { useIntersectionObserver, useWindowScroll } from "@uidotdev/usehooks";
import Link from "next/link";

export default function HomePage() {
    const professions = [
        'DESIGNER',
        'SCREENWRITER',
        'DEVELOPER'
    ]

    const professionsDetails = [
        'President Trump said: “Well, we have a situation where we haven’t had elections in Ukraine.🎨',
        'Where we have martial law, martial law essentially, in Ukraine, where the leader — I hate to say it — he’s down to four per cent approval rating.🖋️',
        'It’s a country that’s been blown to smithereens. Most of the cities are laying on their side.💻'
    ]

    const [useDesigner, setDesigner] = useState(false)
    const [useScreenwriter, setScreenwriter] = useState(false)
    const [useDeveloper, setDeveloper] = useState(false)

    const [hovered, setHovered] = useState(-1)
    const [{x,y}, scrollTo] = useWindowScroll()

    return (
        <>
            <main className="">
                <div className="bg-blood flex flex-col justify-items-center content-center justify-between align-middle min-h-svh max-w-[100vw] p-2 md:p-4 overflow-hidden">
                    <div>
                        &nbsp;
                    </div>
                    <div className="items-center self-center">
                        <AnimWord
                            className="text-[45vw] md:text-[42vw] font-display text-center select-none -z-[100] leading-[0.75] flex md:flex-row flex-col"
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
                    <p className="text-5xl group">
                        {professionsDetails.map((item, index) => {
                            return (
                                <SpanItems hovered={hovered} index={index} item={item} key={index}/>
                        )})}
                    </p>
                </div>
                <div className="bg-abyss h-96">
                    <p className="font-display text-blood text-9xl">CREATIVITY AT THE SPEED OF DARK</p>
                </div>
                <div className="p-2 md:p-4 ">
                    <div className="my-32">
                        <AnimWord
                            className="text-8xl md:text-8xl font-black text-center select-none -z-[100] flex flex-wrap"
                            // inViewTransition={true}
                            floating={false}
                        >
                            DON'T BE SHY, CONTACT ME
                        </AnimWord>
                    </div>
                    <div id="contact" className="items-end content-end justify-end justify-items-end">
                        <p>redliber@tutamail.com</p>
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
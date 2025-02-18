import Image from "next/image";
import AnimLetters from "../components/animatedLetters/anim-letters";

export default function HomePage() {
    return (
        <>
            <main className="">
                <div className="bg-blood flex-row justify-items-center content-center justify-center min-h-svh max-w-[100vw]">

                    {/* <p className="text-4xl mt-20 font-display">RED LIBER STUDIO</p> */}
                    <AnimLetters className="text-[30vw] -mt-[12vw] font-display text-center self-center">
                        BEN
                    </AnimLetters>
                    {/* <p className="text-[34vw] -mt-[12vw] font-display overflow-hidden text-center self-center">BEN</p> */}
                </div>
                <div className="flex-col min-h-svh p-6">
                    <p className="text-4xl">His analysis of the brutalities of life stemmed from his not at all objective accounts of his time in Auschwitz wherein Victor Emil Frankl had to endure the horrors and evil that reside in the human heart. He made the case that, in spite of that, there is meaning to life. He began his case by recounting his not so special, so far, time in imprisonment. Interesting and logical explanation of Phases an Auschwitz Prisoners Might Experience with Delusion of Reprieve being brutally true. Technically, it cost 25 cents at the time to maintain one prisoner or $5 adjusted for inflation. SS Officers pointing to the left means that death follows and one's body will soon become ashes emitting from the crematorium. capos were the most fascinating kind of "officer", expanding the psychopathology of even those who are being tortured.</p>
                </div>
            </main>
        </>
    )
}
import { constColors } from "~/lib/const";
import AnimWord from "../components/animatedLetters/anim-word";

export default function CustomFooter(){
    return (
        <div className="bg-abyss max-w-[100vw]  flex flex-col text-beige items-center self-center overflow-hidden p-2 md:p-4 mt-40">
            <div className="flex flex-row justify-between w-full md:text-lg text-[0.5rem]">
                <p>BEN © 2025 </p>
                <p>BERNARDUS BERNARD</p>
            </div>
            <AnimWord
                className="text-[30vw] md:text-[42vw] font-display text-center select-none  leading-[0.75] flex"
                inViewTransition={false}
                floating={true}
                initColor={constColors.beige}
                hoverColor={constColors.dirtyYellow}
                mouseDownColor={constColors.blood}
                maxFloat={10}
            >
                BEN
            </AnimWord>
        </div>
    )
} 
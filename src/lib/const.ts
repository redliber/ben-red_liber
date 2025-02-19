import { ReactNode } from "react"

const constColors = {
    blood: '#E23C46',
    bloodDark: '#962930',
    dirtyYellow: "#E3BD3D",
    abyss: '#231F1A',
    beige: '#F4DFC3'
}

interface ColorPhases {
    initColor?: string
    hoverColor?: string
    mouseDownColor?: string
}

interface AnimTransition {
    inViewTransition?: boolean
    floating? : boolean
    maxFloat? : number
}

interface AnimWord extends ColorPhases, AnimTransition {
    children?: ReactNode
    className?: string
}

interface AnimLetter extends ColorPhases, AnimTransition {
    letter: String
    idx: number
}

export {
    constColors,
}

export type {
    ColorPhases,
    AnimTransition,
    AnimWord,
    AnimLetter
}
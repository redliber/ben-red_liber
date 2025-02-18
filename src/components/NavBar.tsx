"use client"

import Image from "next/image"
import Link from "next/link"

export function NavBar() {
    return (
        <header
            className="flex absolute top-0 mt-4 w-full">
            <div className="flex flex-row w-full justify-center">
                <Image
                    src='/logos/beige_REDLIBER-main_logo.ico'
                    width={50}
                    height={50}
                    alt="Red Liber Logo Beige"
                    className=""
                />
            </div>
        </header>
    )
}
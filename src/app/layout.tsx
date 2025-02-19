import "../styles/globals.css";

import local from "next/font/local"
import { Archivo } from "next/font/google"

import React from "react";
import { NavBar } from "../components/NavBar";
import Cursor from "~/components/cursor";

const mainFont = Archivo({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
    subsets: ["latin"],
});

const displayFont = local({
    src: [
        {
            path: "../../public/fonts/display/akira-expanded.otf"
        }
    ],
    variable: "--font-display"
})

export const metadata = {
    title: "Ben",
    description: "Creativity at the speed of dark"
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={`${displayFont.variable} ${mainFont.className}`}
        >
            <body className=" text-abyss tracking-tight bg-blood">
                <NavBar />
                {children}
                <Cursor/>
            </body>
        </html>
    )
}
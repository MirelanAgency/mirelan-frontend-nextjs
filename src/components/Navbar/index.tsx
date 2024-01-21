"use client"
import React, {useState} from "react";
import Link from "next/link";
import Brand from "@/components/Brand";
import {HeaderNavs} from "@/components/Navbar/constants";
import HeaderNav from "@/components/HeaderNav";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full flex justify-center py-4 md:py-6 relative">
            <div className="w-full max-w-screen-2xl flex justify-between items-center px-4 md:px-0">
                <Link href={"/"} className="mr-24">
                    <Brand/>
                </Link>

                <div className="flex items-center">
                    <nav className="hidden md:flex gap-10">
                        {HeaderNavs.map((el, _i) => (
                            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href}/>
                        ))}
                    </nav>

                    <div className="hidden md:flex mx-8 border-r border-black p-2"/>

                    <Link href="Connect" className="hidden md:flex text-black font-bold">
                        Se connecter
                    </Link>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <div className="h-6 w-6 bg-amber-500"/> : <div className="h-6 w-6 bg-amber-900"/>}
                    </button>
                </div>

                <Link href="Connect"
                      className="hidden md:flex text-black font-bold outline outline-1 px-6 py-3 rounded-3xl outline-orange-500 bg-[#FFE6CD]">
                    Venez Discutez !
                </Link>


                <div
                    className={`absolute top-full left-0 w-full bg-white border-t-2 border-[#F3F3F3] md:hidden ${isMenuOpen ? "flex" : "hidden"} flex-col items-center`}>
                    {HeaderNavs.map((el, _i) => (
                        <Link href={el.href} key={_i} className="py-2">
                            {el.value}
                        </Link>
                    ))}
                    <Link href="Connect" className="py-2">
                        Se connecter
                    </Link>
                    <Link href="Connect"
                          className="py-2 text-black font-bold outline outline-1 px-6 py-3 rounded-3xl outline-orange-500 bg-[#FFE6CD]">
                        Venez Discutez !
                    </Link>
                </div>
            </div>
        </header>
    );
}

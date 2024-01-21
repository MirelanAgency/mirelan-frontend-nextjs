import React from "react";
import Link from "next/link";
import Brand from "@/components/Brand";
import { HeaderNavs } from "@/components/Navbar/constants";
import HeaderNav from "@/components/HeaderNav";

export default function Navbar() {
    return (
        <header className="w-full flex justify-center py-4 md:py-8 border-b-2 border-[#F3F3F3] relative">
            <div className="w-full max-w-screen-2xl flex justify-between items-center">
                <div className="flex items-center">
                    <Link href={"/"} className="mr-24">
                        <Brand/>
                    </Link>
                    <nav className="gap-10 hidden lg:flex ml-24">
                        {HeaderNavs.map((el, _i) => (
                            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href}/>
                        ))}
                    </nav>


                    <div className="mx-8 border-r border-black p-2"/>


                    <Link href="Connect" className="text-black font-bold">
                        Se connecter
                    </Link>
                </div>

                <Link href="Connect" className="text-black font-bold outline outline-1 px-6 py-3 rounded-3xl outline-amber-100 bg-[#FFE6CD]">
                    Venez Discutez !
                </Link>

            </div>
        </header>
    );
}

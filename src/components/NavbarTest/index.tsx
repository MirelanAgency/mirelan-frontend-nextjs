"use client";

import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import Brand from "../Brand";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    const typoClassName = "transition-all p-1 font-normal font-medium text-md text-black hover:text-orange-500";

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            <Typography
                placeholder=""
                as="li"
                variant="paragraph"
                color="black"
                className={typoClassName}
            >
                <a href="#" className="flex items-center">
                    Vision & Valeurs
                </a>
            </Typography>
            <Typography
                placeholder=""
                as="li"
                variant="paragraph"
                color="black"
                className={typoClassName}
            >
                <a href="#" className="flex items-center">
                    Services
                </a>
            </Typography>
            <Typography
                placeholder=""
                as="li"
                variant="paragraph"
                color="black"
                className={typoClassName}
            >
                <a href="#" className="flex items-center">
                    Réalisations
                </a>
            </Typography>
            <Typography
                placeholder=""
                as="li"
                variant="paragraph"
                color="black"
                className={typoClassName}
            >
                <a href="#" className="flex items-center">
                    Avis
                </a>
            </Typography>
            <Typography
                placeholder=""
                as="li"
                variant="paragraph"
                color="black"
                className={typoClassName}
            >
                <a href="#" className="flex items-center">
                    Nos Prix
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="flex items-center justify-center">
            <Navbar placeholder="" shadow={false} color="transparent" fullWidth={true}
                    className="sticky top-0 z-10 h-max max-w-screen-2xl rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Brand/>
                    <div className="mr-4 hidden lg:block item-center">{navList}</div>


                    <div className="flex items-center gap-x-1">
                        <Button
                            placeholder=""
                            variant="gradient"
                            size="md"
                            color="deep-orange"
                            className="hidden lg:inline-block"
                        >
                            <span>Venez Discutez !</span>
                        </Button>
                    </div>
                    <IconButton
                        placeholder=""
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button placeholder="" fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button placeholder="" fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
}
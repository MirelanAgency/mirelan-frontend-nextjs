import Link from "next/link"
import React, {FC} from "react";
import '@/app/globals.css';

interface HeroSectionProps {
}

const HeroSection: FC<HeroSectionProps> = ({}) => {
    return (
        <section className="font-poppins text-blue-600">
            <div
                className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                    <div className="mt-5 max-w-max text-center mx-auto">
                        <h1 className="block font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                            Booster Vos Conversions de +20% <br />avec le Neuromarketing.
                        </h1>
                    </div>

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600 dark:text-gray-400">

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;

"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from "react";

function Hero() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (

        <div className="container lg:px-20 px-12 py-10 mx-auto lg:flex lg:items-center">
            {/* Left Column */}
            <div className="lg:w-1/2">
                <h1 className="lg:text-4xl  text-2xl  text-black font-bold mb-4">Welcome to peerpay
                    digital assets.</h1>
                <p className="lg:text-lg text-sm font-light mb-6 text-gray-500 md:mr-4">
                    PeerPay innovates African credit, bridges security gaps, and aims to be a trusted financial partner.                </p>
                <div className="flex flex-col items-start md:flex-row md:space-x-4 mt-4">
                    <Link href="/login" className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-secondary text-white rounded-md mb-4 md:mb-0 md:mt-6 md:ml-0">
                        Peerpay Network
                    </Link>
                    <Link href="/login" className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-secondary text-white rounded-md ml-0 md:ml-4 md:mt-6">
                        Peerpay Web
                    </Link>
                </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 hidden lg:block">
                <Image
                    src={"/images/hero.svg"} width={0} height={0}
                    alt="Hero Image"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    )
}

export default Hero
"use client";
import React from 'react';
import Image from 'next/image'

const RevolutionSection = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Buy',
            icon: '/images/buy.svg',
            description: 'Browse through available Commodities and make your order.',
        },
        {
            id: 2,
            title: 'Trade',
            icon: '/images/trade.svg',
            description: 'Buy, store and Sell Commodities to make profit. Make instant withdrawal.',
        },
        {
            id: 3,
            title: 'Invest',
            icon: '/images/sales.svg',
            description: 'Buy, store and Sell Commodities to make profit. Make instant withdrawal.',
        },
        {
            id: 4,
            title: 'Market Data',
            icon: '/images/Info.svg',

            description: 'We provide real-time market price information for you to make informed trading decision.',
        },
        {
            id: 5,
            title: 'Logistics',
            icon: '/images/truck.svg',
            description: 'Request affordable and timely trucks to deliver you good from point of origin to destination.',
        },
        {
            id: 6,
            title: 'Warehousing',
            icon: '/images/warehouse.svg',
            description: 'Locate standard warehouse near you to store your Commodities.',
        },
    ];


    return (


        <div className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-16 bg-black">
            {/* Left Section */}
            <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 mt-10 md:mt-4">Revolutionizing finance</h2>
                <p className="text-base lg:text-sm text-white mb-10">
                    PeerPay employs cutting-edge technology to transform the financial landscape, delivering unprecedented transparency, security, and efficiency to credit transactions. This innovative approach empowers borrowers, safeguards creditors, and streamlines the lending process, marking a pivotal shift in the world of finance.
                </p>
                <button className="w-full md:w-auto px-10 py-3 bg-primary text-white text-sm rounded-md">Get Started</button>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 mt-6 lg:mt-0">
                <div className="w-full h-full lg:max-w-sm lg:max-h-sm mx-auto">
                    <Image
                        src="/images/globe.svg"
                        alt="Hero Image"
                        layout="responsive"
                        width={500}
                        height={500}
                        className="object-cover object-center rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default RevolutionSection;

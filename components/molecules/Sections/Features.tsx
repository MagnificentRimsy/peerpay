// components/AnimatedSection.js
"use client";
import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import Image from 'next/image'

const ShimmerCard = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="30" ry="10" width="200" height="150" />
    <rect x="10" y="170" rx="3" ry="3" width="180" height="10" />
    <rect x="10" y="190" rx="3" ry="3" width="180" height="10" />
    <rect x="10" y="210" rx="3" ry="3" width="180" height="10" />
  </ContentLoader>
);


const FeaturesSection = () => {
  const [loading, setLoading] = useState(true);
  const cardsData = [
    {   id:1,
        tag: "lending",
        title: 'Credit Initiation',
        icon:  '/images/open-box.svg',
        description: 'Individuals and businesses turn to PeerPay for facilitating credit transactions. PeerPay employs AI-generated reliability scores to assess the creditworthiness of borrowers.',
    },
    {
      id: 2,
      tag: "Payments",
      title: 'AI Credit Assessment',
      icon:  '/images/savings.svg',
      description: 'In credit transactions, parties establish terms, with borrowers signing a digital Enforceable Financial Commitment Mandate (EFCM), sometimes with third-party guarantors.',
    },
    {
      id: 3,
      tag: "Payments",
      title: 'Transparent Ledger',
      icon:  '/images/calculator.svg',
      description: 'In credit transactions, parties establish terms, with borrowers signing a digital Enforceable Financial Commitment Mandate (EFCM), sometimes with third-party guarantors.',
    },
    {
      id: 4,
      tag: "Payments",
      title: 'Automated Settlement',
      icon:  '/images/wallet.svg',
      description: 'In credit transactions, parties establish terms, with borrowers signing a digital Enforceable Financial Commitment Mandate (EFCM), sometimes with third-party guarantors.',
    },
    {
      id: 5,
      tag: "Payments",
      title: 'Agreement and EFC Creation',
      icon:  '/images/open-box.svg',
      description: 'In credit transactions, parties establish terms, with borrowers signing a digital Enforceable Financial Commitment Mandate (EFCM), sometimes with third-party guarantors.',
    },
    {
      id: 6,
      tag:"Efficiency",
      title: 'Saving Time and Money',
      icon:  '/images/time.svg',
      description: 'This efficiency not only saves time and money for individuals, businesses, and government agencies but also frees resources to concentrate on more productive activities, enhancing overall financial management.',
    },
  ];
  useEffect(() => {
    // Simulating loading data with a timeout
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
  

  
  return (
    <>
        <div className="text-center my-8">
        <h1 className="lg:text-4xl  text-2xl  text-black font-bold mb-4">How Peerpay Works.</h1>
            <p className="lg:text-sm text-sm font-light mb-2 text-gray-500 md:mx-60 mx-3">PeerPay streamlines credit and loan transactions with transparency and efficiency. 
           <span className="hidden lg:block">It offers an AI-generated reliability score for creditors, enabling informed decisions based on financial capacity.</span> </p>
        </div>
        <div className="flex items-center justify-center py-16 lg:mx-10 pl-16 p-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8 animate-fade-in-down">
    
        
            {/* grid grid-cols-1 md:grid-cols-2 gap-4 */}
            <div className="lg:w-2/2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cards*/}

            {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-gray-100 p-4 shadow-md rounded-md border border-gray-300">
            <ShimmerCard />
          </div>
        ))
      ) : (
        cardsData.map((card) => (
          <div key={card.id} className="bg-gray-100 p-4 shadow-md rounded-md border border-gray-300">
            {/* Use your actual data here */}
            <Image
              width={0}
              height={0}
              src={card.icon}
              alt={`Card Icon`}
              className="w-20 h-20 rounded-none mr-2 object-contain"
            />
            <div className="flex items-center my-4">
              <p className="text-normal font-normal">{card.tag}</p>
            </div>
            <div className="flex items-center my-2">
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
            <p className="text-gray-600 font-light text-sm">{card.description}</p>
          </div>
        ))
      )}

            {/* End of cards */}
        

            {/* ... more cards ... */}
            </div>
        </div>
        </div>
    </>
  );
};

export default FeaturesSection;

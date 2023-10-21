"use client"; // This is a client component 👈🏽

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../../public/images/logo.svg";


function Navbar() {


  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);


  return (

    <>
      {/* This example requires Tailwind CSS v2.0+ ---- border for the flex section : border-b-2 border-gray-100*/}
      <div className="relative bg-white">
        <div className="max-w-6xl mx-auto px-10 sm:px-6">
          <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="#">
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">

              {/* dropdown was here */}

              <Link
                href="#"
                className="text-base font-light text-black  hover:text-secondary"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-base font-light text-black  hover:text-secondary"
              >
                Solutions
              </Link>

              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-black " */}
                <button
                  type="button"
                  className="group bg-white rounded-md text-black  inline-flex items-center text-base font-light hover:text-secondary focus:outline-none "
                  onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                >
                  <span>Company</span>
                  {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                  <svg
                    className={
                      flyerTwo === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-black group-hover:text-secondary transition ease-out duration-200"
                        : "ml-2 h-5 w-5 text-black group-hover:text-secondary"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {" "}
                <div
                  onMouseLeave={() => setFlyerTwo(false)}
                  className={
                    flyerTwo
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <div className="flex justify-between gap-5">

                        <div>
                          <Link
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            {/* Heroicon name: outline/support */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 bg-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                About Us
                              </p>

                            </div>
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            {/* Heroicon name: outline/bookmark-alt */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 bg-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Mission/Vision
                              </p>

                            </div>
                          </Link>

                        </div>
                      </div>
                      <div className="flex justify-between gap-5">

                        <div>
                          <Link
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            {/* Heroicon name: outline/support */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 bg-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Our Values
                              </p>

                            </div>
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            {/* Heroicon name: outline/bookmark-alt */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 bg-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Our Team
                              </p>

                            </div>
                          </Link>

                        </div>
                      </div>
                      <div className="flex justify-between gap-5">

                        <div>
                          <Link
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            {/* Heroicon name: outline/support */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 bg-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Partnership
                              </p>

                            </div>
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            {/* Heroicon name: outline/bookmark-alt */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 bg-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Support
                              </p>

                            </div>
                          </Link>

                        </div>
                      </div>
                      {/* custom dropdowns here */}
                    </div>
                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                          Latest Update
                        </h3>
                        <ul className="mt-4 space-y-4">
                          <li className="text-base truncate">
                            <Link
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              Boost your business with our service
                            </Link>
                          </li>

                          <li className="text-base truncate">
                            <Link
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              Opportunities with Peerpay
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-5 text-sm">
                        <Link
                          href="#"
                          className="font-medium text-primsry-600 hover:text-lime-500"
                        >
                          {" "}
                          Find out More <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="text-base font-light text-black hover:text-secondary"
              >
                Developers
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/login"
                className="whitespace-nowrap text-base font-normal border border-primary hover:border-secondary rounded-md  px-4 py-2 text-gray-500 hover:text-white hover:bg-secondary "
              >
                Sign in

              </Link>
              <Link
                href="#"
                className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-normal text-white bg-primary hover:bg-secondary"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-8">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 bg-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Features
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 bg-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Solutions
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 bg-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Company
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/view-grid */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 bg-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Faq
                    </span>
                  </Link>

                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 ">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Partner
                </Link>
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Support
                </Link>
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact us
                </Link>
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  News/Update
                </Link>
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Legal Terms
                </Link>
                <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-lime-700"
                >
                  Get Started
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <Link href="/login" className="bg-secondary py-2 px-4 text-white ml-2 rounded-md hover:text-white-500">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>






















  )
}

export default Navbar
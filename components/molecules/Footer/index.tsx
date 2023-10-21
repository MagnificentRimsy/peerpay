import { GoogleLogo, InstagramLogo, LinkedInLogo, TwitterLogo } from "@/components/atoms/Icons";
import SocialIcon from "@/components/atoms/SocialIcon";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (

    <footer
    className=" bg-[#21686C]"
    data-aos-easing="ease-in-back"
  >
    <div className=" lg:mx-10 py-20 px-5 max-w-screen-lg xl:px-4 xl:max-w-7xl mx-auto flex gap-y-4 md:gap-y-7 flex-col md:flex-row">
      <div className="md:hidden">
      <Link href={"/"} className='my-5'>
              <Image width={186} height={52} alt='peerpay Logo' src={"/images/logo-white.svg"} />
      </Link>

        <div className="my-6">
          <ul className="gap-y-5 flex flex-col text-base text-[#ffffff]">
            <li>
              <Link
                href={"mailto:info@Peerpaynetwork.com"}
                className="text-[#ffffff] hover:text-secondary text-sm font-semibold flex gap-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>

                <span>Help Center</span>
              </Link>
            </li>
            <li>
              <Link
                href={"mailto:info@Peerpaynetwork.com"}
                className="text-[#ffffff] hover:text-secondary text-sm font-semibold  flex gap-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <span>info@Peerpaynetwork.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-[35%] lg:w-[30%] order-2 md:order-1">
        <div className="hidden md:block">
        <Link href={"/"} className='my-5'>
              <Image width={186} height={52} alt='peerpay Logo' src={"/images/logo-white.svg"} />
      </Link> {" "}
          <div className="my-6">
            <ul className="gap-y-5 flex flex-col text-base text-[#ffffff]">
              <li>
                <Link
                  href={"mailto:info@Peerpaynetwork.com"}
                  className="text-[#ffffff] hover:text-primary text-sm font-semibold flex gap-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>

                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"mailto:info@Peerpaynetwork.com"}
                  className="text-[#ffffff] hover:text-primary text-sm font-semibold  flex gap-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <span>info@Peerpaynetwork.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-6 flex gap-x-2">
          <Link
            href={"https://x.com/ComfortMoversNg"}
            target="_blank"
            className="h-7 w-7 rounded-full border-2  text-white transition-all  hover:bg-secondary  hover:text-white border-white flex justify-center items-center"
          >
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M11.9571 1.9831C11.5381 2.16933 11.0958 2.28573 10.6302 2.35557C11.0958 2.07622 11.4683 1.63392 11.6312 1.0985C11.1889 1.35457 10.7001 1.5408 10.1646 1.6572C9.74562 1.2149 9.14037 0.935547 8.48856 0.935547C7.23149 0.935547 6.20721 1.95982 6.20721 3.21689C6.20721 3.40312 6.23049 3.56608 6.27705 3.72903C4.39145 3.63591 2.69208 2.72803 1.55141 1.33129C1.36518 1.68048 1.24878 2.05294 1.24878 2.47196C1.24878 3.26345 1.64453 3.96182 2.27306 4.38084C1.9006 4.35756 1.55141 4.26445 1.2255 4.10149V4.12477C1.2255 5.24216 2.01699 6.17333 3.06455 6.38284C2.87831 6.42939 2.6688 6.45267 2.45929 6.45267C2.31962 6.45267 2.15666 6.42939 2.01699 6.40612C2.31962 7.314 3.15766 7.98909 4.15866 7.98909C3.36717 8.59434 2.38945 8.96681 1.31862 8.96681C1.13239 8.96681 0.946156 8.96681 0.783203 8.94353C1.80748 9.59534 2.99471 9.96781 4.29833 9.96781C8.51184 9.96781 10.8165 6.47595 10.8165 3.44968C10.8165 3.35656 10.8165 3.24017 10.8165 3.14705C11.2588 2.84443 11.6545 2.44868 11.9571 1.9831Z"
                // fill="#090914"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href={"https://www.youtube.com/@comfortmovers"}
            target="_blank"
            className="h-7 w-7 rounded-full border-2  text-white transition-all  hover:bg-secondary  hover:text-white border-white flex justify-center items-center"
          >
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="currentColor"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link
            href={"https://www.instagram.com/comfort.movers/"}
            className="h-7 w-7 rounded-full border-2  text-white transition-all  hover:bg-secondary  hover:text-white border-white flex justify-center items-center"
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="currentColor"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75076 1.44721C9.55947 1.44721 9.77366 1.45398 10.4882 1.48656C10.9178 1.49182 11.3433 1.5707 11.7462 1.71979C12.0384 1.83248 12.3038 2.00511 12.5253 2.22656C12.7467 2.44802 12.9194 2.71339 13.032 3.00559C13.1811 3.40853 13.26 3.83406 13.2653 4.26366C13.2975 4.97817 13.3046 5.19237 13.3046 7.00108C13.3046 8.80979 13.2979 9.02398 13.2653 9.7385C13.26 10.1681 13.1811 10.5936 13.032 10.9966C12.9194 11.2888 12.7467 11.5541 12.5253 11.7756C12.3038 11.997 12.0384 12.1697 11.7462 12.2824C11.3433 12.4315 10.9178 12.5103 10.4882 12.5156C9.77398 12.5479 9.55979 12.5549 7.75076 12.5549C5.94172 12.5549 5.72753 12.5482 5.01334 12.5156C4.58373 12.5103 4.15821 12.4315 3.75527 12.2824C3.46307 12.1697 3.19769 11.997 2.97624 11.7756C2.75479 11.5541 2.58216 11.2888 2.46947 10.9966C2.32038 10.5936 2.2415 10.1681 2.23624 9.7385C2.20398 9.02398 2.19689 8.80979 2.19689 7.00108C2.19689 5.19237 2.20366 4.97817 2.23624 4.26366C2.2415 3.83406 2.32038 3.40853 2.46947 3.00559C2.58216 2.71339 2.75479 2.44802 2.97624 2.22656C3.19769 2.00511 3.46307 1.83248 3.75527 1.71979C4.15821 1.5707 4.58373 1.49182 5.01334 1.48656C5.72785 1.4543 5.94205 1.44721 7.75076 1.44721V1.44721ZM7.75076 0.226562C5.91205 0.226562 5.68043 0.234304 4.95785 0.267208C4.39561 0.278391 3.83934 0.384847 3.31269 0.582046C2.86092 0.752261 2.45172 1.019 2.11366 1.36366C1.76869 1.70184 1.50172 2.11127 1.3314 2.56334C1.1342 3.08998 1.02775 3.64625 1.01656 4.2085C0.984304 4.93043 0.976562 5.16205 0.976562 7.00076C0.976562 8.83946 0.984304 9.07108 1.01721 9.79366C1.02839 10.3559 1.13485 10.9122 1.33205 11.4388C1.50218 11.8908 1.76892 12.3002 2.11366 12.6385C2.45191 12.9832 2.86133 13.25 3.31334 13.4201C3.83998 13.6173 4.39626 13.7238 4.9585 13.7349C5.68108 13.7672 5.91172 13.7756 7.7514 13.7756C9.59108 13.7756 9.82172 13.7679 10.5443 13.7349C11.1065 13.7238 11.6628 13.6173 12.1895 13.4201C12.6393 13.2457 13.0478 12.9794 13.3889 12.6381C13.73 12.2968 13.996 11.8881 14.1701 11.4382C14.3673 10.9115 14.4738 10.3553 14.485 9.79301C14.5172 9.07108 14.525 8.83946 14.525 7.00076C14.525 5.16205 14.5172 4.93043 14.4843 4.20785C14.4731 3.64561 14.3667 3.08934 14.1695 2.56269C13.9993 2.11068 13.7326 1.70126 13.3879 1.36301C13.0496 1.01828 12.6402 0.751533 12.1882 0.581401C11.6615 0.384201 11.1053 0.277746 10.543 0.266563C9.82108 0.234304 9.58947 0.226562 7.75076 0.226562Z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
              <path
                d="M7.75215 3.52344C7.06413 3.52344 6.39155 3.72746 5.81948 4.10971C5.24741 4.49195 4.80154 5.03525 4.53824 5.6709C4.27494 6.30655 4.20605 7.00601 4.34028 7.68081C4.47451 8.35561 4.80582 8.97546 5.29233 9.46197C5.77884 9.94847 6.39868 10.2798 7.07349 10.414C7.74829 10.5482 8.44774 10.4794 9.08339 10.2161C9.71904 9.95276 10.2623 9.50689 10.6446 8.93481C11.0268 8.36274 11.2309 7.69017 11.2309 7.00215C11.2309 6.07954 10.8644 5.19471 10.212 4.54233C9.55958 3.88994 8.67476 3.52344 7.75215 3.52344ZM7.75215 9.26021C7.30555 9.26021 6.86897 9.12778 6.49764 8.87966C6.1263 8.63154 5.83688 8.27888 5.66597 7.86627C5.49506 7.45366 5.45034 6.99964 5.53747 6.56162C5.6246 6.1236 5.83966 5.72125 6.15546 5.40545C6.47125 5.08966 6.8736 4.8746 7.31162 4.78747C7.74964 4.70034 8.20367 4.74506 8.61627 4.91597C9.02888 5.08687 9.38154 5.3763 9.62966 5.74763C9.87778 6.11897 10.0102 6.55554 10.0102 7.00215C10.0102 7.60102 9.77231 8.17537 9.34884 8.59884C8.92537 9.02231 8.35102 9.26021 7.75215 9.26021Z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
              <path
                d="M11.3676 4.19807C11.8165 4.19807 12.1805 3.83412 12.1805 3.38517C12.1805 2.93621 11.8165 2.57227 11.3676 2.57227C10.9186 2.57227 10.5547 2.93621 10.5547 3.38517C10.5547 3.83412 10.9186 4.19807 11.3676 4.19807Z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href={"https://www.tiktok.com/@comfortmovers"}
            className="h-7 w-7 rounded-full border-2 text-white transition-all  hover:bg-secondary  hover:text-white border-white flex justify-center items-center"
          >
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12.6 2.82C11.9164 2.03962 11.5397 1.03743 11.54 0H8.44997V12.4C8.42614 13.071 8.14284 13.7066 7.65974 14.1729C7.17663 14.6393 6.53142 14.8999 5.85997 14.9C4.43997 14.9 3.25997 13.74 3.25997 12.3C3.25997 10.58 4.91997 9.29 6.62997 9.82V6.66C3.17997 6.2 0.159973 8.88 0.159973 12.3C0.159973 15.63 2.91997 18 5.84997 18C8.98997 18 11.54 15.45 11.54 12.3V6.01C12.793 6.90985 14.2973 7.39265 15.84 7.39V4.3C15.84 4.3 13.96 4.39 12.6 2.82Z" />
            </svg>
          </Link>
        </div>
        <div>
          <span className="inline-block text-[#ffffff] text-sm font-normal mb-3  lg:leading-7">
            &copy; {new Date().getFullYear()} Copyright Peerpay Networks {" "}
          </span>
          <span className="block text-[#ffffff] text-sm font-normal mb-3  lg:leading-7">
            Allright Reserved
          </span>
        </div>
      </div>
      <div className="w-full md:w-[65%] lg:w-[70%] order-1 md:order-2 flex flex-col md:flex-row gap-y-9 justify-between">
      <div>
          <h4 className="uppercase text-base font-semibold my-5 text-white">
            Features
          </h4>
          <ul className="gap-y-3 flex flex-col text-base text-[#ffffff]">
            <li>
              <Link
                href={"/"}
                className="text-[#ffffff] text-sm font-normal"
              >
                Peerpay Account
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-[#ffffff] text-sm font-normal"
              >
                Payments
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#ffffff] text-sm font-normal">
                Cards
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase text-base font-semibold my-5 text-white">
            Products
          </h4>

          <ul className="gap-y-3 flex flex-col text-base text-[#ffffff]">
            <li>
              <Link
                href={"/about"}
                className="text-[#ffffff] text-sm font-normal"
              >
                Personal Loans
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-[#ffffff] text-sm font-normal"
              >
                Get Loans Fast
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-[#ffffff] text-sm font-normal"
              >
               Instant Payment
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase text-base font-semibold my-5 text-white">
            Company
          </h4>
          <ul className="gap-y-3 flex flex-col text-base text-[#ffffff]">
            <li>
            
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-[#ffffff] text-sm font-normal"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="text-[#ffffff] text-sm font-normal">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#ffffff] text-sm font-normal">
               News/Updates
              </Link>
            </li>
              <Link
                href={"/#"}
                className="text-[#ffffff] text-sm font-normal"
              >
               Supports
              </Link>
            <li>
              <Link href={"/"} className="text-[#ffffff] text-sm font-normal">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#ffffff] text-sm font-normal">
               FAQ
              </Link>
            </li>
          </ul>
        </div>
       
        <div>
          <h4 className="uppercase text-base font-semibold my-5 text-white">
            Install App (Coming soon)
          </h4>

          <div className="flex flex-col justify-between gap-x-5 my-2 max-w-[277px] gap-y-2">
            <Link href={""}>
              <Image
                quality={100}
                src={"/images/google.png"}
                alt="Google Playstore Icon"
                width={135}
                height={40}
              />
            </Link>
            <Link href={""}>
              <Image
                quality={100}
                src={"/images/apple.png"}
                alt="Apple App Store Icon"
                width={120}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
   
  );
}

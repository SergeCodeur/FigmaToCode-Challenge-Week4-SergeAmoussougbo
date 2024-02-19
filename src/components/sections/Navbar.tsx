"use client";
import Logo from "@/assets/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const Routes = [
  {
    name: "About Me",
    path: "#about",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Project",
    path: "#project",
  },
  {
    name: "Contact Me",
    path: "#contact-me",
  },
];

type Props = {
  handleLinkClick: () => void;
  toggleNav: boolean;
};

const Navlinks = ({ handleLinkClick, toggleNav }: Props) => {
  return (
    <ul className={`inline-flex gap-8 max-md:flex-col items-center`}>
      {Routes.map((route) => (
        <li key={route.path}>
          <Link
            className="text-heading-h5-600 cursor-pointer hover:text-neutral transition-all relative after:w-full after:h-[2px] after:z-10 after:bg-neutral after:absolute after:content-[''] after:-bottom-1 after:translate-y-3 after:opacity-0 after:left-0 hover:after:translate-y-0 hover:after:opacity-100 max-md:w-4/5"
            href={route.path}
            onClick={handleLinkClick}
          >
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleClick = () => {
    setToggleNav(!toggleNav);
    // disable body overflow auto if navbar is open
    toggleNav
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };
  const handleLinkClick = () => {
    // If mobile and navbar open, close nav and restore scroll on click
    if (window.innerWidth < 768 && toggleNav) {
      setToggleNav(false);
      document.body.style.overflow = "auto";
    }
  };
  return (
    <MaxContentWidthWrapper className="py-0">
      <nav className="w-full flex justify-between items-center h-14 lg:px-8 relative">
        <div className="w-[31%]">
          <Link href="/">
            <Image
              className="relative z-[55]"
              src={Logo}
              alt="logo"
              width={139.91}
              height={40}
            />
          </Link>
        </div>
        <div
          className={`w-[69%] flex justify-between items-center max-md:fixed max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-full max-md:flex-col max-md:justify-center max-md:items-center max-md:bg-white max-md:gap-6 max-md:px-4 max-md:z-50 max-md:-translate-x-full transition-transform ${
            toggleNav ? "!translate-x-0" : ""
          }`}
        >
          <Navlinks handleLinkClick={handleLinkClick} toggleNav={toggleNav} />
          <Button className="max-md:w-full" variant="medium">
            <span>Resume</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
        <button
          className="block lg:hidden text-black relative z-50"
          onClick={handleClick}
        >
          <VscThreeBars size={36} />
        </button>
      </nav>
    </MaxContentWidthWrapper>
  );
};

export default Navbar;

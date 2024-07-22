"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import FadeInComponent from "./Animation/FadeInComponent";

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header
			className={`px-5 md:px-7 md:py-4 ${
				isOpen ? "bg-customBlack/90 md:bg-customBlack" : "bg-customBlack"
			}
     bg-customBlack items-center sticky top-0 z-[100] `}
		>
			<FadeInComponent direction="top">
				<div className="flex items-center h-[65px] md:h-[80px]">
					<Link
						href="/"
						className="tracking-wider lora-heading capitalize text-3xl md:text-4xl"
					>
						CHOW
					</Link>

					<section
						className={`grow items-center absolute top-[100%] flex md:static flex-col md:flex-row ease-in-out duration-200  
md:h-auto ${
							isOpen ? "h-[calc(100vh-65px)]" : "h-0"
						} gap-6 md:gap-0 overflow-hidden
 bg-customBlack/90 w-full left-0 `}
					>
						<div className="flex flex-col text-sm md:ml-7 text-center mt-5 md:mt-0 md:text-start">
							<p className="text-white/70">Mon - Sun</p>
							<p>08:00 - 20:00</p>
						</div>

						<nav className="mx-auto">
							<ul className="flex gap-4 md:gap-12 flex-col md:flex-row text-center md:text-start">
								<li>
									<Link
										href={"/"}
										className={`py-1 border-b ease-in-out duration-100 hover:border-white 
                ${pathname === "/" ? "border-white" : "border-white/0"}`}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href={"/menu"}
										className={`py-1 border-b ease-in-out duration-100 hover:border-white 
                ${pathname === "/menu" ? "border-white" : "border-white/0"}`}
									>
										Menu
									</Link>
								</li>
								<li>
									<Link
										href={"/contact"}
										className={`py-1 border-b ease-in-out duration-100 hover:border-white 
                ${pathname === "/contact" ? "border-white" : "border-white/0"}`}
									>
										Contacts
									</Link>
								</li>
							</ul>
						</nav>

						<a
							href="tel:+"
							className="flex gap-3 items-center tracking-wider text-white"
						>
							<MdOutlinePhoneInTalk size={24} /> 08111108992
						</a>
						<button className="p-2 px-4 bg-white text-black tracking-wide md:ml-7">
							Order Now
						</button>
					</section>

					<button
						className="flex md:hidden ml-auto flex-col items-center justify-center w-10 h-10 space-y-1"
						onClick={toggleMenu}
					>
						<span
							className={`block w-6 h-0.5 bg-white transform transition-transform duration-300 ease-in-out ${
								isOpen ? "rotate-45 translate-y-2" : ""
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${
								isOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-white transform transition-transform duration-300 ease-in-out ${
								isOpen ? "-rotate-45 -translate-y-1" : ""
							}`}
						></span>
					</button>
				</div>
			</FadeInComponent>
		</header>
	);
};

export default Navbar;

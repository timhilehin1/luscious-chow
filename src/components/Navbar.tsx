"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import FadeInComponent from "./Animation/FadeInComponent";
import Image from "next/image";
import { handleWhatsappOrderClick } from "@/utils/WhatsappOrderMessage";

interface NavbarProps {
	data: {
		businessPhone: string;
		businessLogo: string;
	};
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
	const pathname = usePathname();
	const params = useParams();
	// console.log(pathname);
	const [isOpen, setIsOpen] = useState(false);
	//   console.log(data);
	const [currentSection, setCurrentSection] = useState<string>("");
	useEffect(() => {
		setIsOpen(false);
		setCurrentSection(window.location.hash);
	}, [pathname, params]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header
			className={`px-5 md:px-7 md:py-1 ${
				isOpen ? "bg-[#fdeccf]/[95] md:bg-[#fdeccf]" : "bg-[#fdeccf]"
			} text-customBlack
     bg-[#fdeccf] items-center sticky top-0 z-[100]`}
		>
			<FadeInComponent direction="top">
				<div className="flex items-center h-[65px]">
					<Link
						href="/"
						className="tracking-wider lora-heading capitalize text-3xl md:text-4xl h-[90%] md:h-full w-[90px] relative"
					>
						<Image
							src={data.businessLogo}
							className="absolute w-full h-full object-contain"
							fill
							alt="cake image"
						/>
					</Link>

					<section
						className={`grow items-center absolute top-[100%] flex md:static flex-col md:flex-row ease-in-out duration-200  
md:h-auto ${
							isOpen ? "h-[calc(100vh-65px)]" : "h-0"
						} gap-8 md:gap-0 overflow-hidden
 bg-[#fdeccf]/[95] w-full left-0 `}
					>
						<div className="flex flex-col text-sm md:ml-7 text-center mt-5 md:mt-0 md:text-start">
							<p className="text-customBlack/70">Mon - Sun</p>
							<p>09:00 - 16:00</p>
						</div>

						<nav className="mx-auto">
							<ul className="flex gap-8 md:gap-12 flex-col md:flex-row text-center md:text-start">
								<li>
									<Link
										href={"/"}
										className={`py-1 border-b ease-in-out duration-100 hover:border-customBlack 
                ${pathname === "/" && !currentSection ? "border-customBlack" : "border-customBlack/0"}`}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href={"/menu"}
										className={`py-1 border-b ease-in-out duration-100 hover:border-customBlack 
                ${pathname === "/menu" ? "border-customBlack" : "border-customBlack/0"}`}
									>
										Menu
									</Link>
								</li>
								<li>
									<Link
										href={"/#contact"}
										className={`py-1 border-b ease-in-out duration-100 hover:border-customBlack 
                ${pathname === "/" && currentSection === "#contact" ? "border-customBlack" : "border-customBlack/0"}`}
									>
										Contacts
									</Link>
								</li>
							</ul>
						</nav>

						<a
							href={`tel:${data.businessPhone}`}
							className="flex gap-3 items-center tracking-wider text-customBlack"
						>
							<MdOutlinePhoneInTalk size={24} /> {data.businessPhone}
						</a>
						<button
							className="p-2 px-4 bg-customBlack text-white tracking-wide md:ml-7"
							onClick={() => handleWhatsappOrderClick(data.businessPhone)}
						>
							Order Now
						</button>
					</section>

					<button
						className="flex md:hidden ml-auto flex-col items-center justify-center w-10 h-10 space-y-1"
						onClick={toggleMenu}
					>
						<span
							className={`block w-6 h-0.5 bg-customBlack transform transition-transform duration-300 ease-in-out ${
								isOpen ? "rotate-45 translate-y-2" : ""
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-customBlack transition-opacity duration-300 ease-in-out ${
								isOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-customBlack transform transition-transform duration-300 ease-in-out ${
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

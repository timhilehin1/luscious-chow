"use client";
import { handleWhatsappOrderClick } from "@/utils/WhatsappOrderMessage";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Image from "next/image";

interface FooterProps {
	data: {
		businessPhone: string;
		businessLogo: string;
		businessFacebook: string;
		businessInstagram: string;
		businessTwitter: string;
	};
}

const Footer: React.FC<FooterProps> = ({ data }) => {
	return (
		<footer className="py-14   px-5 border-t border-customGray/40 mt-10">
			<div className="flex flex-col lg:flex-row items-center h-full ">
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
				</div>

				<section
					className={`grow items-center flex flex-col lg:flex-row ease-in-out duration-200  
h-auto gap-10 lg:gap-0
 bg-customBlack w-full`}
				>
					<div className="flex flex-col text-sm lg:ml-7 text-center mt-5 lg:mt-0 lg:text-start">
						<p className="text-white/70">Mon - Sun</p>
						<p>09:00 - 16:00</p>
					</div>

					<nav className="mx-auto">
						<ul className="flex gap-4 lg:gap-12 flex-col lg:flex-row text-center lg:text-start">
							<li>
								<Link
									href={"/"}
									className={`py-1 ease-in-out duration-100 hover:border-white`}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href={"/menu"}
									className={`py-1  ease-in-out duration-100 hover:border-white`}
								>
									Menu
								</Link>
							</li>
							<li>
								<Link
									href={"/#contact"}
									className={`py-1  ease-in-out duration-100 hover:border-white`}
								>
									Contacts
								</Link>
							</li>
						</ul>
					</nav>

					<a
						href={`tel:${data.businessPhone}`}
						className="flex gap-3 items-center tracking-wider text-white"
					>
						<MdOutlinePhoneInTalk size={24} /> {data.businessPhone}
					</a>
					<button
						className="p-2 px-4 bg-customGold  text-customBlack 
						tracking-wide md:ml-7"
						onClick={() => handleWhatsappOrderClick(data.businessPhone)}
					>
						Order Now
					</button>
				</section>
			</div>

			<div className="max-w-sm mx-auto border-t mt-16 py-5">
				<section
					className=" flex justify-center
       gap-4 border-customGray/40 "
				>
					<a href={data.businessFacebook ?? ""}>
						<FiFacebook size={26} />
					</a>

					<a href={data.businessInstagram ?? ""}>
						<FaInstagram size={26} />
					</a>

					<a href={data.businessTwitter ?? ""}>
						<FaXTwitter size={26} />
					</a>
				</section>

				<p className="text-customGray text-center mt-8">
					©all rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;

"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import demoImage from "../../public/assets/images/1.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { DiTravis } from "react-icons/di";

function Menu() {
	const [currentSection, setCurrentSection] = useState<string>("#bread");
	const params = useParams();
	useEffect(() => {
		setCurrentSection(window.location.hash);
	}, [params]);

	return (
		<main className="mt-6 mb-10 flex    gap-8 lg:gap-6 relative">
			<section className="w-[60%] h-[calc(100vh-85px)] sticky top-[85px]">
				<div className="relative w-full h-full">
                <div className="absolute h-full w-full  bg-gradient-to-b from-white/0 to-customBlack/90 z-10"/>
					<Image
						src={demoImage}
						className="w-full absolute h-full object-cover"
						alt="cake image"
					/>
				</div>
			</section>
			<section className="">
				<div className="h-[3000px]">12</div>
			</section>
		</main>
	);
}

export default Menu;
{
	/* // <main className="grid grid-cols-1 lg:grid-cols-[60%,1fr] lg:gap-8"> */
}
// 	<section className="sticky">
// 		<div className="md:h-[calc(100vh-50px)]  w-full bg-red-500 ">
// 			{/* <div className="bg-black/80 absolute z-20 h-full" /> */}
// 			{/* <Image
// 				src={demoImage}
// 				className="w-full absolute h-full object-cover"
// 				alt="cake image"
// 			/> */}
// 		</div>
// 	</section>
// 	<section>
// 		<nav className="mx-auto">
// 			<ul className="flex items-center justify-center flex-wrap text-lg   text-white/70 gap-8 my-8">
// 				<li>
// 					<Link
// 						href={"#bread"}
// 						className={`py-1 border-b ease-in-out duration-100 hover:border-white/70
//         ${
// 							currentSection === "#bread"
// 								? "border-white/70"
// 								: "border-white/0"
// 						}`}
// 					>
// 						Bread
// 					</Link>
// 				</li>
// 				<li>
// 					<Link
// 						href={"#cakes"}
// 						className={`py-1 border-b ease-in-out duration-100 hover:border-white/70
//         ${
// 							currentSection === "#cakes"
// 								? "border-white/70"
// 								: "border-white/0"
// 						}`}
// 					>
// 						Cakes
// 					</Link>
// 				</li>
// 				<li>
// 					<Link
// 						href={"#drinks"}
// 						className={`py-1 border-b ease-in-out duration-100 hover:border-white/70
//         ${
// 							currentSection === "#drinks"
// 								? "border-white/70"
// 								: "border-white/0"
// 						}`}
// 					>
// 						Drinks
// 					</Link>
// 				</li>

// 				<li>
// 					<Link
// 						href={"#specials"}
// 						className={`py-1 border-b ease-in-out duration-100 hover:border-white/70
//         ${
// 							currentSection === "#specials"
// 								? "border-white/70"
// 								: "border-white/0"
// 						}`}
// 					>
// 						Specials
// 					</Link>
// 				</li>
// 			</ul>
// 		</nav>

// 		<div id="bread">
// 			<p>This is our bread container o</p>
// 		</div>
// 	</section>
// </main>

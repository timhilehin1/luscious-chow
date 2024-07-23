"use client";
import React, { useEffect, useState, useRef,} from "react";
import Image from "next/image";
import demoImage from "../../public/assets/images/1.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { dummyProducts } from "../../utils";

//edit and make code better
function Menu() {
	const [currentSection, setCurrentSection] = useState<string>("#bread");
	const [currentImage, setCurrentImage] = useState<any>(demoImage);
	const params = useParams();
	useEffect(() => {
		setCurrentSection(window.location.hash);
	}, [params]);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const divRefs = useRef<any>([]);
	const [closestDivId, setClosestDivId] = useState("");

	const handleScroll = () => {
		let closestDiv: any = null;
		let closestDistance = Infinity;
		divRefs.current.forEach((ref: any) => {
			if (ref) {
				const rect = ref.getBoundingClientRect();
				const distance = Math.abs(rect.top);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestDiv = ref.id;
				}
			}
		});

		if (closestDiv) {
			setClosestDivId(closestDiv);

			const closestProduct = dummyProducts.find(
				(item: any) => item.category === closestDiv
			);
			setCurrentSection(`#${closestDiv}`);
			setCurrentImage(closestProduct?.categoryImage);
		}
	};

	return (
		<main className="grid grid-cols-1 lg:grid-cols-[60%,1fr]  gap-4 relative">
			<section className="h-[calc(100vh-85px)] lg:sticky lg:top-[85px]">
				<div className="relative w-full h-full">
					<div className="absolute h-full w-full  bg-gradient-to-b from-white/0 to-customBlack/90 z-10" />
					{/* <img
						src={currentImage}
						className="w-full absolute h-full object-cover"
						alt="cake image"
					/> */}

                      <Image
						src={currentImage}
						className="w-full absolute h-full object-cover"
						alt="cake image"
                        width={659}
                        height={594}
					/>
					<p className="capitalize absolute bottom-16 translate-x-1/2  text-white z-20  text-5xl lora-heading">
						{currentSection.substring(1)}
					</p>
				</div>
			</section>
			<section className="flex flex-col gap-8">
				<nav className="mx-auto">
					<ul className="flex items-center justify-center flex-wrap text-lg   text-white/70 gap-6">
						{dummyProducts.map((item: any, index:number) => (
							<li key={index}>
								<Link
									href={`#${item.category}`}
									className={`py-2.5 capitalize border-b ease-in-out duration-100 hover:border-white/70
			${currentSection === `#${item.category}` ? "border-white/70 ca" : "border-white/0"}`}
								>
									{item.category}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{dummyProducts.map((item: any, index: number) => (
					<div
						ref={(el) => (divRefs.current[index] = el)}
						className="flex flex-col mt-4"
						id={`${item.category}`}
                        key={index}
					>
						<header className="text-3xl capitalize text-center lora-heading">
							{item.category}
						</header>
						<div className="flex flex-col gap-4">
							{item.items.map((prod: any, index:number) => (
								<div key={index} className="product_container w-full flex flex-col gap-4 p-3 rounded hover:bg-black/40 cursor-pointer ease-in-out duration-100">
									<header className="flex gap-2 items-center">
										<p className="text-xl whitespace-nowrap   lora-heading">
											{prod.product}
										</p>
										<div className="border self-end border-b border-white/10  w-full " />
										<p className="lora-heading">${prod.price}</p>
									</header>
									<main>{prod.description}</main>
								</div>
							))}
						</div>
					</div>
				))}
			</section>
		</main>
	);
}

export default Menu;

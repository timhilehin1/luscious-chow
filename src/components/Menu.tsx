"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import demoImage from "../../public/assets/images/1.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { dummyProducts } from "../../utils";

//edit and make code better
function Menu({
	categories,
	products,
}: {
	categories: any[];
	products: any[];
}) {
	console.log(products);
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
	const divRefs = useRef<(HTMLDivElement | null)[]>([]);
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
		<main className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
			<section className="h-40 md:h-[calc(100vh-65px)] lg:sticky lg:top-[65px]">
				<div className="relative w-full h-full">
					<div
						className="absolute h-full w-full bg-gradient-to-b from-customBlack/20 via-customBlack/60
					 to-customBlack z-10"
					/>
					<Image
						src={currentImage}
						className="object-cover"
						fill
						alt="cake image"
					/>
					<div
						className="capitalize text-white z-20 text-4xl md:text-5xl 
					font-black flex items-end absolute h-full w-full lora-heading p-10 md:pb-14"
					>
						{currentSection.substring(1)}
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-8 lg:px-5">
				<nav className="mx-auto">
					<ul className="flex items-center justify-center flex-wrap text-lg   text-white/70 gap-6">
						{dummyProducts.map((item: any, index: number) => (
							<li key={index}>
								<Link
									href={`#${item.category}`}
									className={`py-2.5 capitalize border-b ease-in-out duration-100 hover:border-white/70
			${
				currentSection === `#${item.category}`
					? "border-white/70 ca"
					: "border-white/0"
			}`}
								>
									{item.category}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{dummyProducts.map((item: any, index: number) => (
					<div
						// @ts-ignore
						ref={(el) => (divRefs.current[index] = el)}
						className="flex flex-col mt-4 w-full"
						id={`${item.category}`}
						key={index}
					>
						<header className="text-3xl capitalize text-center lora-heading mb-3">
							{item.category}
						</header>
						<div className="flex flex-col gap-4 w-full">
							{item.items.map((prod: any, index: number) => (
								<article
									key={index}
									className="w-full flex flex-col md:flex-row p-5 gap-4 md:gap-0
								rounded hover:bg-customGray/5 cursor-pointer ease-in-out duration-100 group"
								>
									<div
										className="h-full w-full md:w-0 min-h-[150px] md:min-h-[130px] hidden md:block
					group-hover:md:w-full group-hover:block ease-in-out duration-100 relative"
									>
										<Image
											src={"/assets/images/1.jpg"}
											className="object-cover"
											fill
											alt="cake image"
										/>
									</div>

									<div className="flex flex-col gap-4 grow md:pl-5">
										<header className="flex gap-2 items-center">
											<p className="text-xl lora-heading">{prod.product}</p>
											<span className="border self-end border-b border-white/10 grow"></span>
											<p className="lora-heading">${prod.price}</p>
										</header>
										<p>{prod.description}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				))}
			</section>
		</main>
	);
}

export default Menu;

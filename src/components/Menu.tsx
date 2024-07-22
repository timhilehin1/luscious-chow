"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Container from "./Container";
import Image from "next/image";
import demoImage from "../../public/assets/images/1.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { DiTravis } from "react-icons/di";

const products = [
	{
		category: "bread",
		categoryImage: "/assets/images/bread.jpg",
		items: [
			{
				product: "Baguette",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Large",
				price: 3.99,
			},
			{
				product: "Sourdough",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 4.99,
			},
			{
				product: "Rye Bread",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Small",
				price: 2.99,
			},
			{
				product: "Whole Wheat Bread",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 3.49,
			},
		],
	},
	{
		category: "soups",
		categoryImage:
			"https://lowcarbafrica.com/wp-content/uploads/2018/06/Egusi-Soup-IG-1.jpg",
		items: [
			{
				product: "Tomato Soup",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 5.99,
			},
			{
				product: "Chicken Noodle Soup",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Large",
				price: 8.99,
			},
			{
				product: "Minestrone Soup",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 6.99,
			},
			{
				product: "Clam Chowder",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Small",
				price: 4.99,
			},
		],
	},
	{
		category: "specials",
		categoryImage: "/assets/images/specials.jpg",
		items: [
			{
				product: "Grilled Salmon",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Large",
				price: 15.99,
			},
			{
				product: "Steak and Fries",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Large",
				price: 19.99,
			},
			{
				product: "Pasta Primavera",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 12.99,
			},
			{
				product: "Chicken Parmesan",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 14.99,
			},
		],
	},

	{
		category: "cake",
		categoryImage:
			"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		items: [
			{
				product: "Chocolate Cake",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Large",
				price: 25.99,
			},
			{
				product: "Cheesecake",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 20.99,
			},
			{
				product: "Carrot Cake",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 18.99,
			},
			{
				product: "Red Velvet Cake",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Large",
				price: 22.99,
			},
		],
	},
	{
		category: "beverages",
		categoryImage:
			"https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		items: [
			{
				product: "Coffee",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 2.99,
			},
			{
				product: "Tea",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Small",
				price: 2.49,
			},
			{
				product: "Smoothie",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Large",
				price: 5.99,
			},
			{
				product: "Soda",
				description:
					"Tender calamari rings, lightly breaded and fried to perfection. Served with a zesty marinara dipping sauce.",
				size: "Medium",
				price: 1.99,
			},
		],
	},
];
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
		handleScroll(); // Initial check in case the page is already scrolled

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

			const closestProduct = products.find(
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
					<img
						src={currentImage}
						className="w-full absolute h-full object-cover"
						alt="cake image"
					/>
					<p className="capitalize absolute bottom-16 translate-x-1/2  text-white z-20  text-5xl lora-heading">
						{currentSection.substring(1)}
					</p>
				</div>
			</section>
			<section className="flex flex-col gap-8">
				<nav className="mx-auto">
					<ul className="flex items-center justify-center flex-wrap text-lg   text-white/70 gap-6">
						{products.map((item: any) => (
							<li>
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

				{products.map((item: any, index: number) => (
					<div
						ref={(el) => (divRefs.current[index] = el)}
						className="flex flex-col mt-4"
						id={`${item.category}`}
					>
						<header className="text-3xl capitalize text-center lora-heading">
							{item.category}
						</header>
						<div className="flex flex-col gap-4">
							{item.items.map((prod: any) => (
								<div className="product_container w-full flex flex-col gap-4 p-3 rounded hover:bg-black/40 cursor-pointer ease-in-out duration-100">
									<header className="flex gap-2 items-center">
										<p className="text-xl text-nowrap lora-heading">
											{prod.product}
										</p>
										<div className="border border-b border-white/70  w-full" />
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

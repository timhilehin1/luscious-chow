"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import demoImage from "../../public/assets/images/1.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { dummyProducts } from "../../utils";
import {
	ProductCategoryData,
	ProductData,
	variationData,
} from "@/interfaces/Product.interfaces";
import { getNairaFormat } from "../../utils";
function Menu({
	categories,
	products,
}: {
	categories: ProductCategoryData[];
	products: ProductData[];
}) {
	const [currentSection, setCurrentSection] = useState<string>("#bread");
	const [currentImage, setCurrentImage] = useState<{ url: any; alt: any }>({
		url: demoImage,
		alt: "",
	});
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

			const closestProduct = products.find(
				(item: ProductData) =>
					item.productCategory.categoryName.toLowerCase() === closestDiv
			);
			setCurrentSection(`#${closestDiv}`);
			setCurrentImage({
				url: closestProduct?.productCategory.categoryImage.url,
				alt: closestProduct?.productCategory.categoryImage.alt,
			});
		}
	};

	return (
		<main className="grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
			<section className="h-36 lg:h-[calc(100vh-65px)] sticky top-[65px] z-40">
				<div className="relative w-full h-full">
					<div
						className="absolute h-full w-full bg-gradient-to-b from-customBlack/20 via-customBlack/60
					 to-customBlack z-10"
					/>
					<Image
						src={currentImage.url}
						className="object-cover"
						fill
						alt={currentImage.alt}
						priority
					/>
					<div
						className="capitalize text-white z-20 text-4xl lg:text-5xl 
					font-black flex items-end absolute h-full w-full lora-heading p-10 lg:pb-14"
					>
						{currentSection.substring(1)}
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-8 lg:px-5">
				<nav className="mx-auto">
					<ul className="flex items-center justify-center flex-wrap text-lg   text-white/70 gap-6">
						{categories.length > 0 ? (
							categories
								.sort((a: ProductCategoryData, b: ProductCategoryData) =>
									a.categoryName.localeCompare(b.categoryName)
								)
								.map((item: ProductCategoryData, index: number) => (
									<li key={index}>
										<Link
											href={`#${item.categoryName.toLowerCase()}`}
											className={`py-2.5 capitalize border-b ease-in-out duration-100 hover:border-white/70 ${
												currentSection === `#${item.categoryName}`
													? "border-white/70 ca"
													: "border-white/0"
											}`}
										>
											{item.categoryName}
										</Link>
									</li>
								))
						) : (
							<li>No category available</li>
						)}
					</ul>
				</nav>

				{categories.length > 0 &&
					categories.map(
						(category: ProductCategoryData, categoryIndex: number) => {
							// Filter products that belong to the current category
							// so this guy will be repated and rendered for each category
							const filteredProducts = products.filter(
								(product: ProductData) =>
									product.productCategory.categoryName === category.categoryName
							);

							if (filteredProducts.length === 0) return null;

							return (
								<div
									// @ts-ignore
									ref={(el) => (divRefs.current[categoryIndex] = el)}
									className="flex flex-col mt-4 w-full"
									id={`${category.categoryName.toLowerCase()}`}
									key={categoryIndex}
								>
									<header className="text-3xl capitalize text-center lora-heading mb-3">
										{category.categoryName}
									</header>
									<div className="flex flex-col gap-4 w-full">
										{filteredProducts.map(
											(product: ProductData, productIndex: number) => (
												<article
													key={productIndex}
													className="w-full flex flex-col md:flex-row p-5 gap-4 md:gap-24 lg:gap-0 rounded hover:bg-customGray/5 cursor-pointer ease-in-out duration-100 group"
												>
													<div className="md:w-0 w-full h-0 group-hover:h-[200px]  relative group-hover:w-full md:max-w-[180px] group-hover:md:min-h-[130px] group-hover:md:h-auto duration-[600ms] ease-in-out max-h-[450px] shrink-0">
														<Image
															src={product.productImage.url}
															className="object-cover rounded"
															fill
															alt={product.productImage.alt}
														/>
													</div>

													<div className="flex flex-col grow lg:pl-5">
														<header className="flex gap-2 items-center">
															<p className="text-base lora-heading">
																{product.productName}
															</p>
															{/* show if there are no variations */}
															{!product.variations && (
																<span className="border self-end border-b border-white/10 grow"></span>
															)}
															{!product.variations && (
																<p className="lora-heading">
																	{getNairaFormat(
																		product.productPrice?.toString()
																	)}
																</p>
															)}
														</header>
														{product.variations ? (
															<div className="text-white/70 flex-col gap-1">
																{product.variations.map(
																	(variation: variationData) => (
																		<div className="flex items-center gap-4 text-base">
																			<p className="capitalize">
																				{variation.type.toLowerCase()}
																			</p>{" "}
																			-{" "}
																			<p>
																				{getNairaFormat(
																					variation.price?.toString()
																				)}
																			</p>
																		</div>
																	)
																)}
															</div>
														) : (
															<p className="text-white/70">
																{product.productDescription}
															</p>
														)}
													</div>
												</article>
											)
										)}
									</div>
								</div>
							);
						}
					)}
			</section>
		</main>
	);
}

export default Menu;

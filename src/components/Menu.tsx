"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import demoImage from "../../public/assets/images/1.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
	ProductCategoryData,
	ProductData,
	variationData,
} from "@/interfaces/Product.interfaces";
import { getNairaFormat } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

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
	useEffect(() => {
		// Access the Swiper scrollbar element after component mounts
		const scrollbar: any = document.querySelector(".swiper-scrollbar");
		const scrollbarDrag: any = document.querySelector(".swiper-scrollbar-drag");

		if (scrollbar) {
			// Apply custom styles to the scrollbar
			scrollbar.style.backgroundColor = "#fdeccf";
			scrollbar.style.height = "1px";
		}

		if (scrollbarDrag) {
			// Apply custom styles to the draggable part of the scrollbar
			scrollbarDrag.style.backgroundColor = "";
			scrollbarDrag.style.height = "1px";
		}
	}, []); // Empty dependency array ensures this runs once on mount

	const divRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [closestDivId, setClosestDivId] = useState("");

	const handleScroll = () => {
		let closestDiv: string | null = null;
		let closestDistance = Infinity;

		// Function to adjust distance based on screen width
		const adjustDistance = (distance: number): number => {
			const screenWidth = window.innerWidth;
			return screenWidth < 768 ? distance * 1.5 : distance;
		};

		divRefs.current.forEach((ref: any) => {
			if (ref) {
				const rect = ref.getBoundingClientRect();
				const distance = adjustDistance(Math.abs(rect.top));

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
			<section className="h-28 lg:h-[calc(100vh-65px)] sticky top-[65px] z-40">
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
						className="capitalize text-white z-20 text-3xl lg:text-5xl 
					font-black flex items-end absolute h-full w-full lora-heading p-10 lg:pb-14"
					>
						{currentSection.substring(1)}
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-8 lg:px-5 pb-36">
				<nav className="w-full px-6  mt-6">
					<ul className="flex items-center justify-start text-lg text-white/70">
						<Swiper
							spaceBetween={30}
							slidesPerView={"auto"}
							freeMode={true}
							className="flex items-center justify-start  h-[40px]"
							scrollbar={{
								draggable: false,
								hide: false,
							}}
							speed={1000}
							modules={[Scrollbar]}
						>
							{categories.length > 0 ? (
								categories
									.sort((a, b) => a.categoryName.localeCompare(b.categoryName))
									.map((item, index) => (
										<SwiperSlide key={index} style={{ width: "auto" }}>
											<li>
												<Link
													href={`#${item.categoryName.toLowerCase()}`}
													className={`py-2.5 hover:text-customGold  capitalize  ease-in-out duration-100 `}
												>
													{item.categoryName}
												</Link>
											</li>
										</SwiperSlide>
									))
							) : (
								<SwiperSlide>
									<li>No category available</li>
								</SwiperSlide>
							)}
						</Swiper>
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
									className="flex flex-col my-9 w-full"
									id={`${category.categoryName.toLowerCase()}`}
									key={categoryIndex}
								>
									<header className="text-3xl capitalize text-center lora-heading mb-3 text-customGold">
										{category.categoryName}
									</header>
									<div className="flex flex-col gap-4 w-full">
										{filteredProducts.map(
											(product: ProductData, productIndex: number) => (
												<article
													key={productIndex}
													className="w-full flex flex-col md:flex-row p-5 gap-4 md:gap-24 lg:gap-0 rounded hover:bg-customGray/5 cursor-pointer ease-in-out duration-100 group"
												>
													<div className="lg:w-0 w-full h-[200px] lg:h-0 group-hover:h-[200px]  relative group-hover:w-full md:max-w-[180px] group-hover:md:min-h-[130px] group-hover:md:h-auto duration-[600ms] ease-in-out max-h-[450px] shrink-0">
														<Image
															src={product.productImage.url}
															className="object-cover rounded"
															fill
															alt={product.productImage.alt}
														/>
													</div>

													<div className="flex flex-col grow lg:pl-5">
														<header className="flex gap-2 items-center mb-4">
															<p className="text-2xl capitalize lora-heading ">
																{product.productName}
															</p>
															{/* show if there are no variations */}
															{!product.variations && (
																<span className="border self-end border-b border-white/10 grow"></span>
															)}
															{!product.variations && (
																<p className="lora-heading text-xl">
																	{getNairaFormat(
																		product.productPrice?.toString()
																	)}
																</p>
															)}
														</header>
														{product.variations ? (
															<div className="text-white/70 flex flex-col gap-3">
																{product.variations.map(
																	(variation: variationData, index: number) => (
																		<div
																			key={index}
																			className="flex items-center gap-4 text-lg"
																		>
																			<p className="capitalize">
																				{variation.type.toLowerCase()}
																			</p>{" "}
																			<span className="border self-center border-b border-white/10 grow"></span>
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

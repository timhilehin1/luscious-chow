"use client";
import React, { useState } from "react";
import Container from "./Container";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductCategoryData } from "@/interfaces/Product.interfaces";

// interface FoodCategoriesProps {
// 	data: {
// 		categoryName: string;
// 		categoryImage: string | null;
// 	}[];
// }

const FoodCategories = ({ data }: { data: ProductCategoryData[] }) => {
	const [active, setActive] = useState(0);

	const router = useRouter();
	return (
		<Container className="py-10">
			<h3 className="lora-heading capitalize text-2xl sm:text-4xl tracking-wider text-center">
				Categories
			</h3>
			<div className="flex flex-col md:flex-row gap-5 h-[700px] md:h-[23rem] w-full my-10">
				{data.map((item, index) => (
					<article
          key={index}
						className={`relative cursor-pointer overflow-hidden ${
							active === index ? "flex-[4]" : "flex-1"
						} ease-in-out duration-150`}
						onMouseEnter={() => setActive(index)}
					>
						<Image
							src={item?.categoryImage?.url ?? "/assets/images/logo.png"}
							className="h-full w-full object-cover"
							alt={item?.categoryImage?.url || "Image of good food in lagos"}
							fill
						/>
						<div
							className={`relative z-10 flex items-end h-full p-2 ease-in-out duration-150  bg-gradient-to-b to-customBlack/80 justify-between
             ${active === index ? "from-white/0" : "from-customBlack/20"}`}
						>
							<h4 className="text-2xl md:text-3xl lora-heading capitalize vertical-text">
								{item.categoryName}
							</h4>
							<button
								className={`${active === index ? "" : "hidden"}
               text-sm flex items-center gap-2 border-b `}
								onClick={() =>
									router.push(`/menu#${item.categoryName.toLowerCase()}`)
								}
							>
								View Menu <HiOutlineArrowLongRight />
							</button>
						</div>
					</article>
				))}
			</div>
		</Container>
	);
};

export default FoodCategories;

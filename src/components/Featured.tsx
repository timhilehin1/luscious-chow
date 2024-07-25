'use client'
import React from "react";
import Container from "./Container";
import Image from 'next/image'
import { useRouter } from "next/navigation";

interface FeaturedProps{
	data:{
		productName:string
		productImageUrl: string
	}[]
}
export const products = [
	{
		name: "Fruity cake",
		imageUrl: "/assets/images/1.jpg",
	},
	{
		name: "Fruity cake",
		imageUrl: "/assets/images/luscious_chow_hero.jfif",
	},
	{
		name: "Fruity cake",
		imageUrl: "/assets/images/1.jpg",
	},
];
const Featured:React.FC<FeaturedProps> = ({data}) => {
	const router = useRouter()
	return (
		<Container className="my-20">
			<h3 className="lora-heading text-2xl sm:text-4xl tracking-wider text-center">
				Featured Dishes
			</h3>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 my-10">
				{data.map((item) => (
					<article className="relative h-48 md:h-auto md:aspect-square flex items-end hover:scale-[1.1] ease-in-out duration-150">
						<Image
							src={item.productImageUrl}
							className="h-full w-full object-cover"
							fill
							alt={item.productName}
						/>
						<p
							className="relative z-10 w-full grow lora-heading text-2xl text-center py-3 capitalize
             bg-gradient-to-b from-white/0 to-customBlack"
						>
							{item.productName}
						</p>
					</article>
				))}
			</div>

			<div className="flex justify-center">
				<button className="border px-5 py-3 border-white hover:bg-white/10 ease-in-out
				 duration-150" onClick={()=>router.push('/menu')} >
					See Our Menu
				</button>
			</div>
		</Container>
	);
};

export default Featured;

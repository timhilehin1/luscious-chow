'use client'
import React from "react";
import Container from "./Container";
import FadeInComponent from "./Animation/FadeInComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { handleWhatsappOrderClick } from "@/utils/WhatsappOrderMessage";


interface HeroProps{
	data:{
	  businessPhone: string
	}
  }
  

const Hero:React.FC<HeroProps> = ({data}) => {
	const router = useRouter()
	return (
		<div className="max-h-[calc(100vh-65px)] md:h-[90vh] md:max-h-none relative">
			<Image
				src="/assets/images/luscious_chow_hero.jfif"
				className="h-full w-full object-cover"
				alt=""
				fill
			/>
			<div className="bg-gradient-to-r from-customBlack/90 to-white/0  relative z-20 h-full">
				<Container className="flex items-end py-20 h-full">
					<article className="md:max-w-[60%] flex flex-col gap-3">
						<FadeInComponent direction="bottom">
							<h1 className="text-3xl md:text-5xl lora-heading md:leading-[3.5rem]">
								We sell HAPPINESS
								<br /> not just FOOD.
								<br />
								Irresistibly tasty! 😋
							</h1>
						</FadeInComponent>

						<FadeInComponent direction="bottom" delay={0.5}>
							<p className="text-customGray mb-6 md:text-lg">
								Your favourite food plug in Lagos, Nigeria{" "}
							</p>
						</FadeInComponent>

						<FadeInComponent direction="bottom" delay={0.7}>
							<div className="flex flex-wrap gap-5 tracking-wide capitalize">
								<button className="px-5 py-3 bg-white text-black shadow-lg 
								shadow-white/0 ease-in-out duration-150 hover:shadow-white"
								onClick={()=>handleWhatsappOrderClick(data.businessPhone)}>
									Order Now
								</button>
								<button onClick={()=>router.push('/menu')} className="border px-5 py-3 border-white hover:bg-white/10 ease-in-out duration-150">
									See our Menu
								</button>
							</div>
						</FadeInComponent>
					</article>
				</Container>
			</div>
		</div>
	);
};

export default Hero;

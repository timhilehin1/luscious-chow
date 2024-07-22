import React from "react";
import Container from "./Container";

const Hero = () => {
	return (
		<div className="max-h-[calc(100vh-65px)] md:h-[90vh] md:max-h-none relative">
			<img
				src="/assets/images/luscious_chow_hero.jfif"
				className="h-full w-full absolute object-cover"
				alt=""
			/>

			<div className="bg-gradient-to-r from-customBlack/90  to-white/0  relative z-20 h-full">
				<Container className="flex items-end py-20 h-full">
					<article className="md:max-w-[60%] flex flex-col gap-3">
						<h1 className="text-3xl md:text-5xl lora-heading md:leading-[3.5rem]">
							We sell HAPPINESS
							<br /> not just FOOD.
							<br />
							Irresistibly tasty! 😋
						</h1>
						<p className="text-customGray mb-6 md:text-lg">
							Your favourite food plug in Lagos, Nigeria{" "}
						</p>
						<div className="flex flex-wrap gap-5 tracking-wide capitalize">
							<button className="px-5 py-3 bg-white text-black shadow-lg shadow-white/0 ease-in-out duration-150 hover:shadow-white">
								Order Now
							</button>
							<button className="border px-5 py-3 border-white hover:bg-white/10 ease-in-out duration-150">
								See our Menu
							</button>
						</div>
					</article>
				</Container>
			</div>
		</div>
	);
};

export default Hero;

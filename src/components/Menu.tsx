import React from "react";
import Container from "./Container";
import Image from "next/image";
import demoImage from "../../public/assets/images/1.jpg";

function Menu() {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-[60%,1fr] lg:gap-8">
			<div className="lg:sticky lg:top-0">
				<Image
					src={demoImage}
					className="h-[100vh] w-full object-cover lg:sticky lg:top-0"
					alt="demo image"
				/>
			</div>
			<div>Categories Section</div>
		</section>
	);
}

export default Menu;

import React from "react";

const Container = ({
	children,
	className,
	id,
}: {
	children: React.ReactNode;
	className?: string;
	id?: string;
}) => {
	return (
		<div id={id} className={`${className} w-full max-w-[1200px] mx-auto px-5`}>
			{children}
		</div>
	);
};

export default Container;

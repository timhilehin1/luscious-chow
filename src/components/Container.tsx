import React from "react";

const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={`${className} w-full max-w-[1200px] mx-auto px-5`}>
			{children}
		</div>
	);
};

export default Container;

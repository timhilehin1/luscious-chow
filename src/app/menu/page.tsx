import React from "react";
import Menu from "@/components/Menu";
export const dynamic = "force-dynamic";
import { getCategories, getProducts } from "../../../sanity/sanity.query";

async function page() {
	const categories = await getCategories();
	const products = await getProducts();
	return <Menu categories={categories} products={products} />;
}

export default page;

import React from "react";
import Menu from "@/components/Menu";
import { getCategories, getProducts } from "../../../sanity/sanity.query";
import { Metadata } from "next";
export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    const categories:any[] = await getCategories()
	let categoryNames = '';
	if (categories.length > 1) {
	  categoryNames = categories.slice(0, -1).map((category) => category.categoryName).join(', ') + 
					  ' and ' + categories[categories.length - 1].categoryName;
	} else if (categories.length === 1) {
	  categoryNames = categories[0].categoryName;
	}

	return {
	title: `Menu | Luscious Chow`,
	  description: `Your favourite food plug in Lagos Nigeria for all your: ${categoryNames}`,
	  openGraph: {
		images: categories.map((category)=>category.categoryImage?.url ?? ''),
	  },
	}
  }


async function page() {
	const categories = await getCategories();
	const products = await getProducts();
	return <Menu categories={categories} products={products} />;
}

export default page;

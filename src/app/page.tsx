import About from "@/components/About";
import FadeInComponent from "@/components/Animation/FadeInComponent";
import Featured from "@/components/Featured";
import FoodCategories from "@/components/FoodCategories";
import Hero from "@/components/Hero";
import OrderMeal from "@/components/OrderMeal";
import {
	getCategories,
	getBusinessInfo,
	getFeaturedProducts,
} from "../../sanity/sanity.query";
import { ProductCategoryData } from "@/interfaces/Product.interfaces";
export const dynamic = "force-dynamic";
export const revalidate = 3; // revalidate at most every hour

export default async function Home() {
	const categoryData: any = await getCategories();
	const information = await getBusinessInfo();
	const featuredProducts = await getFeaturedProducts();

	return (
		<main className="">
			<Hero data={information} />

			<FadeInComponent direction="bottom" delay={0.3}>
				<Featured data={featuredProducts} />
			</FadeInComponent>

			<FadeInComponent direction="bottom" delay={0.3}>
				<About data={information} />
			</FadeInComponent>

			<FadeInComponent direction="bottom" delay={0.3}>
				<FoodCategories data={categoryData} />
			</FadeInComponent>

			<FadeInComponent direction="bottom" delay={0.3}>
				<OrderMeal data={information} featured={featuredProducts} />
			</FadeInComponent>
		</main>
	);
}

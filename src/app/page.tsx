import About from "@/components/About";
import FadeInComponent from "@/components/Animation/FadeInComponent";
import Featured from "@/components/Featured";
import FoodCategories from "@/components/FoodCategories";
import Hero from "@/components/Hero";
import OrderMeal from "@/components/OrderMeal";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <FadeInComponent direction="bottom" delay={0.3}>
        <Featured />
      </FadeInComponent>

      <FadeInComponent direction="bottom" delay={0.3}>
        <About />
      </FadeInComponent>
	  
      <FadeInComponent direction="bottom" delay={0.3}>
        <FoodCategories />
      </FadeInComponent>

      <FadeInComponent direction="bottom" delay={0.3}>
        <OrderMeal />
      </FadeInComponent>
    </main>
  );
}

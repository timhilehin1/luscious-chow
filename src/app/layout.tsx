import { Inter, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBusinessInfo } from "../../sanity/sanity.query";
export const dynamic = "force-dynamic";

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { generatorSlug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const inter = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
    const info:any = await getBusinessInfo()

	return {
	  title: `Luscious Chow`,
	  description: info.businessDesciption,
	  icons: [
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					url: "/assets/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					url: "/assets/favicon-16x16.pngg",
				},
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					url: "/assets/apple-touch-icon.png",
				},
			],
	  openGraph: {
		images: [`${info.businessLogo}`],
	  },
	}
  }

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const information = await getBusinessInfo()
	
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar data={information}/>
				{children}
				<Footer data={information}/>
			</body>
		</html>
	);
}

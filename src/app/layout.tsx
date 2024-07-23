import type { Metadata } from "next";
import { Inter, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
	title: "Luscious Chow",
	description: "",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "apple-touch-icon.png",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import Navbar from "./components/SharedComponents/Navbar/Navbar";
import Footer from "./components/SharedComponents/Footer/Footer";

const inter = Inter({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-inter",
})

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ["latin"],
	variable: '--font-poppins',
});
export default function App({ Component, pageProps }) {
	return (
		<main className={`${poppins.variable} font-serif`}>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</main>
	);
}

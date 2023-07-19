import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/SharedComponents/Navbar/Navbar";
import Footer from "./components/SharedComponents/Footer/Footer";



const poppins = Poppins({
  weight: ['400','500','600', '700','800'],
	subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
	return (
		<main className={poppins.className}>
			<Navbar />
      <Component {...pageProps} />
      <Footer/>
		</main>
	);
}

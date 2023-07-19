import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "../../../../assets/Image.png";
import img2 from "../../../../assets/Image (1).png";
import quotes from "../../../../assets/Quotes.png";
import { Manrope} from "next/font/google";

const manrope = Manrope({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});
const Testimonial = () => {
  const [index, setIndex] = useState(0);

	const mod = (n, m) => {
		let result = n % m;

		// Return a positive value
		return result >= 0 ? result : result + m;
	};

	const cards = [
		{
			id: "1",
			image: img1.src,
		},
		{
			id: "2",
			image: img2.src,
		},
		{
			id: "3",
			image: img1.src,
		},
		{
			id: "2",
			image: img2.src,
		},
	];
	return (
		<div className="md:mt-[90px] mt-[40px]">
			<div className="flex justify-between items-center md:ml-[23px] md:mr-[10px]">
				<h3 className="uppercase sm:text-[40px] text-[20px] pl-4 lg:pl-0 md:pl-0">
					Testimonials <hr className="w-16 border border-black" />
					
				</h3>
				<p className="text-[#FF7E21] font-bold cursor-pointer text-xs">know More</p>
			</div>

			<div className="carousel overflow-hidden">
				{cards.map((item, i) => {
					const indexLeft = mod(index - 1, cards.length);
					const indexRight = mod(index + 1, cards.length);

					let className = "card";

					if (i === index) {
						className = "card card--active";
					} else if (i === indexRight) {
						className = "card card--right";
					} else if (i === indexLeft) {
						className = "card card--left";
					} else className = "card";

					return (
						<div
							key={item.id}
							className={` ${className} md:min-w-[740px] min-h-[348px] min-w-[460px] md:p-[20px] p-4 bg-[#FAFAFA]`}>
							<div className="flex md:gap-[31px] gap-3 justify-center items-center w-full">
								<img src={item.image} className="w-[160px] h-[200px] md:h-auto md:w-full" />{" "}
								<div className="w-auto">
									<div className="flex justify-end">
										<Image className="invisible" src={quotes} alt="quotes" />
									</div>
									<p className="items-center justify-center text-sm">
										Aut nihil mollitia deserunt quia sed rem. Quibusdam amet
										veniam rerum id rerum beatae. Quas rerum iste
										necessitatibus. At voluptates ad magnam blanditiis excepturi
										expedita aut. Aut repellat inventore qui minima illum est.
									</p>
									<h6 className="font-semibold mt-5">Kyle Merwin</h6>
									<small className="text-[14px] text-[#808080]">CO-owner</small>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div
				className={`${manrope.className} flex gap-5 w-[278px] mx-auto md:mb-[101px] mb-10  lg:mt-[5vw] mt-[10vw]`}>
				<div className="flex items-center gap-1">
					<span className="font-extrabold cursor-pointer">0{index + 1}</span>{" "}
					<hr className="w-20 border border-black" />
				</div>
				<p
					onClick={() => setIndex(1)}
					className="text-[#808080] font-extrabold cursor-pointer">
					02
				</p>
				<p
					onClick={() => setIndex(2)}
					className="text-[#808080] font-extrabold cursor-pointer">
					03
				</p>
				<p
					onClick={() => setIndex(3)}
					className="text-[#808080] font-extrabold cursor-pointer">
					04
				</p>
				{index > 0 && (
					<p
						onClick={() => setIndex(0)}
						className="text-[#808080] font-extrabold cursor-pointer">
						01
					</p>
				)}
			</div>
		</div>
	);
};

export default Testimonial;

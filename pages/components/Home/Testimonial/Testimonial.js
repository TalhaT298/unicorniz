import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "../../../../assets/Image.png";
import img2 from "../../../../assets/Image (1).png";
import quotes from "../../../../assets/Quotes.png";

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
			<div className="flex justify-between items-center">
				<h3 className="uppercase text-[32px] sm:text-[40px]">
					Testimonials <hr className="w-16 border border-black" />
				</h3>
				<p className="text-[#FF7E21] font-bold cursor-pointer text-center">Know More</p>
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
							className={`${className} md:min-w-[740px] min-h-[300px] min-w-[460px] md:p-[20px] p-4 bg-[#FAFAFA]`}>
							<div className="flex md:gap-[31px] gap-3 justify-center items-center w-full">
								<img src={item.image} className="w-1/4 sm:w-2/7 mt-10" />
								<div className="w-full">
									<div className="flex justify-end">
										<Image className="invisible" src={quotes} alt="quotes" />
									</div>
									<div className="items-center justify-center text-sm w-3/4 sm:w-auto">
										Aut nihil mollitia deserunt quia sed rem. Quibusdam amet
										veniam rerum id rerum beatae. Quas rerum iste
										necessitatibus. At voluptates ad magnam blanditiis excepturi
										expedita aut. Aut repellat inventore qui minima illum est.
									</div>
									<h6 className="font-semibold mt-5">Kyle Merwin</h6>
									<small className="text-[14px] text-[#808080]">CO-owner</small>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div
				className={`flex gap-5 w-[278px] mx-auto mb-10 mt-0 md:mt-5`}>
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

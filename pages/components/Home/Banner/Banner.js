import React from "react";
import BannerImg from "../../../../assets/hero.png";
import Image from "next/image";
import withEmailjs from "../../SharedComponents/Hoc/withEmail";
const Banner = ({ loading, handleSubmit }) => {
	return (
		<div className="flex justify-between items-center lg:mt-16 mt-6">
			<div>
				<div className="xl:w-[788px] lg:w-[600px] lg:h-[288px]">
					<p className="xl:text-[65px] lg:text-[40px] text-[30px] font-inter">
						<span className="">Brand.</span><span className="bg-gradient-to-b from-fuchsia-900 via-fuchsia-600 to-fuchsia-500 bg-clip-text text-transparent">Design</span>.
						<span className="bg-gradient-to-b from-fuchsia-900 via-fuchsia-600 to-fuchsia-500 bg-clip-text text-transparent">Product</span>
						<span className="text-[#D0D0D0]">.</span><br /><span className="text-slate-700">
							In-Hours <span className="bg-gradient-to-b from-fuchsia-950 via-fuchsia-600 to-fuchsia-500 bg-clip-text text-transparent"> Development. </span></span><br />
						& More
					</p>
				</div>
				<p className="my-[3.25vw] lg:w-[561px] text-lg lg:text-2xl md:text-[20px] sm:text-[16px]">
					One place to enhance the customer experience <br /> and track your
					success to make actionable moves
				</p>
				<div className="flex gap-[26px] pt-7 pb-20 sm:pt-0 sm:pb-0">
					<button disabled={loading} onClick={handleSubmit} className="bg-black hover:bg-white sm:w-[168px] w-[120px] h-[50px] rounded-md border-black border  hover:text-black text-white flex justify-center items-center">
						Contact Us
					</button>
				</div>
			</div>
			<Image
				src={BannerImg}
				alt="Unicorniz"
				priority
				className="hidden md:block w-2/5"
			/>
		</div>
	);
};

export default withEmailjs(Banner);


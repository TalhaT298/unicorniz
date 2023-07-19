import React from "react";
import BannerImg from "../../../../assets/strategy.png";
import Image from "next/image";
import withEmailjs from "../../SharedComponents/Hoc/withEmail";
const Banner = ({ loading, handleSubmit }) => {
	return (
		<div className="flex justify-between items-center -top-[27px] pt-6">
			<div>
				<div className="lg:w-[788px] lg:h-[288px] lg:leading-[107.25px] leading-[60px]">
					<h1 className="lg:text-[65px] text-[30px]">
						Brand.<span className="text-[#6F6F6F]">Design</span>.
						<span className="text-[#7E7E7E]">Product</span>
						<span className="text-[#D0D0D0]">.</span> In-Hours Development.
						&More
					</h1>
				</div>
				<p className="my-[3.25vw] md:text-[22px] lg:w-[561px] text-sm sm:leading-[37.4px] leading-[20px]">
					One place to enhance the customer experience <br /> and track your
					success to make actionable moves
				</p>
				<div className="flex gap-[26px] pt-7 pb-20 sm:pt-0 sm:pb-0">
					<button disabled={loading}  onClick={handleSubmit} className="bg-black hover:bg-white sm:w-[168px] w-[120px] h-[50px] rounded-md border-black border  hover:text-black text-white flex justify-center items-center">
						Contact Us 
					</button>
					<button className="hover:bg-black bg:white sm:w-[168px] w-[120px] h-[50px] border-black border rounded-md text-black hover:text-white flex justify-center items-center">
						Know More 
					</button>
				</div>
			</div>
			<Image
				src={BannerImg}
				alt="Unicorniz"
				priority
				className=" hidden md:block  w-full"
			/>
		</div>
	);
};

export default withEmailjs(Banner);

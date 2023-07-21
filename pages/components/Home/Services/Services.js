import Link from "next/link";

const Services = () => {
	return (
		<div className=" ml-[23px] mr-[10px]">
			<div className="flex justify-between items-center">
				<h3 className="uppercase sm:text-[40px] text-[20px]">
					Services <hr className="w-16 border border-black" />
				</h3>
				<Link href={"/services"}>
					<p className="text-[#FF7E21] font-bold cursor-pointer text-sm">Know More</p>
				</Link>
			</div>
			<div className="flex lg:flex-row flex-col justify-center  gap-[40px] md:mt-[100px] mt-[30px]">
				<div className="lg:w-[396px]">
					<h4 className="sm:text-[32px] pb-8 sm:pb-0 text-[20px]">Integration of AR/VR</h4>
					<p className="sm:text-[16px] sm:text-justify text-sm">
						Bringing the history of your brand to the forefront gives an
						emotional dimension to your visual identity, which is essential
						today more than ever in today's digital landscape.
					</p>
				</div>
				<div className="lg:w-[396px]">
					<h4 className="sm:text-[32px] pb-8 sm:pb-0 text-[20px]">Web Services</h4>
					<p className="sm:text-[16px] sm:text-justify text-sm">
						Bringing the history of your brand to the forefront gives
						an emotional dimension to your visual identity, which is essential
						today more than ever in today's digital landscape.
					</p>
				</div>
				<div className="lg:w-[396px]">
					<h4 className="sm:text-[32px] pb-8 sm:pb-0 text-[20px]">Digital Marketing</h4>
					<p className="sm:text-[16px] sm:text-justify text-sm">
						Bringing the history of your brand to the forefront gives
						an emotional dimension to your visual identity, which is essential
						today more than ever in today's digital landscape.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
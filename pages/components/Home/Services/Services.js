import Link from "next/link";
import Image from "next/image";
import ARVR from "../../../../assets/AR-VR.gif"
import ITServices from "../../../../assets/IT-Services.gif"
import DM from "../../../../assets/Digital-Marketing.gif"

const Services = () => {
	return (
		<div className="md:mt-[90px] mt-[10px] sm:mx-[10px] mx-[0px]">
			<div className="flex justify-between items-center">
				<h3 className="uppercase text-[40px]">
					Services <hr className="w-16 border border-black" />
				</h3>
				<Link href={"/services"}>
					<p className="text-[#FF7E21] font-bold cursor-pointer text-end">Know More</p>
				</Link>
			</div>
			<div className="flex lg:flex-row flex-col justify-center  gap-[40px] md:mt-[100px] mt-[30px] mx-[10px]">
				<div className="lg:w-[396px]">
					<Image src={ARVR} priority alt="AR VR Services Gif" className="w-full lg:w-[396px]" />
					<h4 className="sm:text-[32px] pb-8 sm:pb-0 text-[20px]">Integration of AR/VR</h4>
					<p className="sm:text-[16px] sm:text-justify text-sm">
						Bringing the history of your brand to the forefront gives an
						emotional dimension to your visual identity, which is essential
						today more than ever in today's digital landscape.
					</p>
				</div>
				<div className="lg:w-[396px]">
					<Image src={ITServices} priority alt="IT Services Gif" className="w-full lg:w-[396px]" />
					<h4 className="sm:text-[32px] pb-8 sm:pb-0 text-[20px]">IT Services</h4>
					<p className="sm:text-[16px] sm:text-justify text-sm">
						Bringing the history of your brand to the forefront gives
						an emotional dimension to your visual identity, which is essential
						today more than ever in today's digital landscape.
					</p>
				</div>
				<div className="lg:w-[396px]">
					<Image src={DM} priority alt="IT Services Gif" className="w-full lg:w-[396px]" />
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
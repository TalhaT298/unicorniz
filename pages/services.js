import Head from 'next/head';
import React from 'react';
import groupImg from '../assets/Group 1686551171.png'
import Image from 'next/image';
const Services = () => {
    return (
			<div className="px-3 md:px-[80px] mt-[55px] lg:pb-[88px] pb-10 relative overflow-hidden">
				<Head>
					<title>Unicorniz | Services</title>
					<meta name="keywords" content="services of unicorniz" />
				</Head>
				<h1 className="sm:text-[40px] text-2xl font-semibold ">
					Services <hr className="w-16 border border-black" />
				</h1>
				<div className="mt-6 md:grid grid-cols-2 items-center ">
					<div className="services" />
					<h1 className="font-semibold sm:text-5xl text-3xl te leading-normal md:leading-[81px]">
						What <span className="text-[#FF7E21]"> Services</span> <br /> We're
						Offering
					</h1>
					{/* <p className="text-[18px] leading-[34.2px]"> */}
					<p className="sm:text-[18px] text-sm sm:leading-[34.2px] pt-6 sm:pt-0 md:pt-0">
						We offer services that can help businesses improve their visibility
						and business reputation online, expand market reach, and increase
						turnover through effective digital strategies. Following are the
						services we provide
					</p>
				</div>
				<hr className="border  md:mt-[127px] mt-10 border-[#979797] -mx-5 md:mx-0" />
				<div className=" md:grid grid-cols-2 gap-5 my-10">
					<h1 className="sm:text-[80px] text-center text-[30px] md:leading-[152px] sm:pr-28 pr-44 pb-10 sm:pb-0 font-semibold tracking-[2%]">
						AR/VR<span className="text-[#FF7E21]">.</span>
					</h1>
					<div className="md:p-[38px] text-sm sm:text-base ">
						<p >
							Bringing the history of your brand to the forefront gives an
							emotional dimension to your visual identity, which is essential
							today more than ever in today's digital landscape. Bringing the
							history of your brand to the forefront gives an emotional
							dimension to your
						</p>
						<Image src={groupImg} alt="group" className="sm:mt-8 mt-12" />
					</div>
				</div>
				<div className="md:text-[60px] text-2xl text-[#979797] leading-[114px] font-semibold tracking-[2%]">
					<hr className="border border-[#979797] -mx-5 md:mx-0" />
					<h1 className="">IT Services</h1>
					<hr className="border border-[#979797] -mx-5 md:mx-0" />
					<h1 className="">Digital Marketing</h1>
					<hr className="border border-[#979797] -mx-5 md:mx-0" />
					<h1 className="">Graphic Design</h1>
					<hr className="border border-[#979797] -mx-5 md:mx-0" />
					<h1 className="">SEO</h1>
					<hr className="border border-[#979797] -mx-5 md:mx-0" />
					<h1 className="">UI/UX Design</h1>
					<hr className="border border-[#979797] -mx-5 md:mx-0" />
				</div>
			</div>
		);
};

export default Services;
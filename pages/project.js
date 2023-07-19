import Head from "next/head";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../assets/Album Cover (2).png";
import img2 from "../assets/Album Cover (3).png";
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
const Project = () => {
  return (
    <div className="px-[5.2vw] mt-[6.5vw] mb-[8.6vw]">
      <Head>
        <title>Unicorniz | Project</title>
        <meta name="keywords" content="project of unicorniz" />
      </Head>
      <h1 className="sm:text-[40px] text-2xl font-semibold ">
					Project <hr className="w-16 border border-black" />
				</h1>
      <div className="hidden lg:block md:block">
        <h1 className="md:text-[3.25vw] text-[6.25vw] mt-[1.5vw]">
          Featured Projects
        </h1>
        <div className="my-10">
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Keyboard, Navigation]}
            className=""
          >
            <SwiperSlide>
              <div className="flex items-center gap-[5.2vw]">
                <div className="">
                  <h4 className="text-[2.28vw] text-3xl pb-5 ml-[4.16vw] -mb-[3.64vw] font-semibold">
                    Shoplifty
                  </h4>
                  <Image src={img} className="" />
                </div>
                <div className="">
                  <h4 className="text-[2.28vw] ml-[4.16vw] -mb-[3.64vw] font-semibold">
                    VR/AR Tech
                  </h4>
                  <Image src={img2} className="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center gap-[5.2vw]">
                <div className="">
                  <h4 className="text-[2.28vw] ml-[4.16vw] -mb-[3.64vw] font-semibold">
                    VR/AR Tech
                  </h4>
                  <Image src={img} className="" />
                </div>
                <div className="">
                  <h4 className="text-[2.28vw] ml-[4.16vw] -mb-[3.64vw] font-semibold">
                    Shoplifty
                  </h4>
                  <Image src={img2} className="" />
                </div>
              </div>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <HiArrowLongLeft fill="black" size={30} />
              </div>
              <div className="swiper-button-next slider-arrow">
                <HiArrowLongRight fill="black" size={50} />
              </div>
            </div>
          </Swiper>
        </div>
        <div className=" flex gap-[27px]">
          <div className="pt-12">
            <h3 className="px-[27px] border-black border rounded-full md:text-[1.8vw] text-[4vw]">
              UX/UI Design.
            </h3>
          </div>
          <p className=" w-[396px] tracking-[2%]">
            Bringing the history of your brand to the forefront gives an
            emotional dimension to your visual identity, which is essential
            today more than ever in today's digital landscape. Bringing the
            history of your brand to the forefront gives an emotional dimension
            to your
          </p>
        </div>
      </div>
      {/* mobile */}
      <div className="lg:hidden md:hidden">
        <div className="w-96 bg-base-100">
			<div className="pt-4">
				<p className="items-center text-center font-semibold text-xl">SHOPLIFTY</p>
			</div>
          <div className="px-16 pt-2">
            <img
              src="https://i.ibb.co/Ykr207L/Album-Cover.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </div>
		  <div className="items-center text-center py-6">
              <button className="btn border-black border rounded-full pl-4 pr-4 py-2 ">UX/UI Design.</button>
        </div>
          <div className=" items-center text-center text-sm">
            <p>Bringing the history of your brand to the forefront gives an
            emotional dimension to your visual identity, which is essential
            today more than ever in today's digital landscape. Bringing the
            history of your brand to the forefront gives an emotional dimension
            to your</p>
          </div>
        </div>

		<div className="w-96 bg-base-100 ">
			<div className="pt-8">
				<p className="items-center text-center font-semibold text-xl">VR/AR TECH</p>
			</div>
          <div className="px-16 pt-2">
            <img
              src="https://i.ibb.co/Ykr207L/Album-Cover.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </div>
		  <div className="items-center text-center py-6">
              <button className="btn border-black border rounded-full pl-4 pr-4 py-2 ">UX/UI Design.</button>
        </div>
          <div className=" items-center text-center text-sm">
            <p>Bringing the history of your brand to the forefront gives an
            emotional dimension to your visual identity, which is essential
            today more than ever in today's digital landscape. Bringing the
            history of your brand to the forefront gives an emotional dimension
            to your</p>
          </div>
        </div>

		<div className="w-96 bg-base-100">
			<div className="pt-8">
				<p className="items-center text-center font-semibold text-xl">SHOPLIFTY</p>
			</div>
          <div className="px-16 pt-2">
            <img
              src="https://i.ibb.co/Ykr207L/Album-Cover.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </div>
		  <div className="items-center text-center py-6">
              <button className="btn border-black border rounded-full pl-4 pr-4 py-2 ">UX/UI Design.</button>
        </div>
          <div className=" items-center text-center text-sm">
            <p>Bringing the history of your brand to the forefront gives an
            emotional dimension to your visual identity, which is essential
            today more than ever in today's digital landscape. Bringing the
            history of your brand to the forefront gives an emotional dimension
            to your</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

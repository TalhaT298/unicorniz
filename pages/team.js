import { Manrope } from "next/font/google";
import Head from "next/head";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import img from "../assets/Image (2).png";
import img1 from "../assets/Image.png";
import img2 from "../assets/Image (1).png";
const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { image: img.src },
    { image: img1.src },
    { image: img2.src },
    {
      image:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg",
    },
  ];
  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    if (currentIndex === 0) return;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    if (currentIndex === slides.length - 1) return;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const border1 = `h-10 border-l-2   ${
    currentIndex === 0 ? "border-black" : "border-slate-200"
  }`;
  const border2 = `h-10 border-l-2   ${
    currentIndex === 1 ? "border-black" : "border-slate-200"
  }`;
  const border3 = `h-10 border-l-2   ${
    currentIndex === 2 ? "border-black" : "border-slate-200"
  }`;
  const border4 = `h-10 border-l-2   ${
    currentIndex === 3 ? "border-black" : "border-slate-200"
  }`;

  return (
    <div>
      <Head>
        <title>Unicorniz | Team</title>
        <meta name="keywords" content="team of unicorniz" />
      </Head>
      <h1 className="lg:text-[40px] md:text-[40px] text-2xl ml-40 lg:ml-0 md:ml-0 pl-[102px] pt-[55px] font-semibold">
        Our Team <hr className="w-16 border border-black" />
      </h1>
      <div
        className={` gap-[68px] px-3  lg:px-[124px] hidden lg:flex md:flex relative group lg:mt-56 mt-10 mb-7 lg:mb-24 ${manrope.className}`}
      >
        <div className="md:flex hidden lg:flex flex-col space-y-1 text-[12px]">
          <div className={border1}>
            <span
              onClick={() => setCurrentIndex(0)}
              className="ml-1 cursor-pointer "
            >
              01
            </span>{" "}
          </div>
          <div tabIndex={0} className={border2}>
            <span
              onClick={() => setCurrentIndex(1)}
              className="ml-1 cursor-pointer"
            >
              02
            </span>{" "}
          </div>
          <div tabIndex={1} className={border3}>
            <span
              onClick={() => setCurrentIndex(2)}
              className="ml-1 cursor-pointer"
            >
              03
            </span>{" "}
          </div>
          <div tabIndex={2} className={border4}>
            <span
              onClick={() => setCurrentIndex(3)}
              className="ml-1 cursor-pointer"
            >
              04
            </span>{" "}
          </div>
        </div>
        <div className="lg:h-[370px] w-full lg:grid grid-cols-2 bg-black text-white">
          <div className="py-8 px-9">
            <h2 className="text-[40px]">Elsa Weimann</h2>
            <h6 className="text-[18px] text-[#FF7E21]">UI DESIGNER</h6>
            <p className="text-[24px] text-justify mt-5">
              Aut totam quis sed ipsam enim. Saepe quam distinctio eaque. Est
              eos assumenda esse. Natus ex consequatur sed distinctio sint
              maiores optio. Quia ullam vel consequuntur. Excepturi dignissimos
              sint.
            </p>
          </div>
          <div className="relative">
            <div className="bg-[#808080] lg:h-[455px] lg:w-[440px] left-9 bottom-0 absolute"></div>
            <img
              src={slides[currentIndex].image}
              className="z-10 w-[440px] h-[540px] lg:absolute left-9 bottom-0"
            />
          </div>
        </div>
        {/* Left Arrow */}
        <button
          className={`hidden ${
            currentIndex !== 0 && "group-hover:block"
          } absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
        >
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </button>
        {/* Right Arrow */}
        <button
          className={`hidden ${
            currentIndex !== slides.length - 1 && "group-hover:block"
          } absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
        >
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </button>
      </div>
	  {/* mobile */}
      <div className="lg:hidden md:hidden">
        <div>
		<div className=" bg-base-100 flex py-10 px-4">
          <div className="w-full">
            <img
              src="https://i.ibb.co/cT5zYqQ/userPic1.png"
              alt="Movie"
            />
			<p className="text-center">Sarah Smith</p>
			<p className="text-center text-sm text-amber-600">Founder</p>
          </div>
		  <div className="pt-6 px-2">
            <img
              src="https://i.ibb.co/0QQn697/Screenshot-56-removebg-preview.png"
              alt="Movie"
            />
          </div>
          <div className="w-2/3 pt-3">
            <p>A good design is not only aesthetically pleasing,but also functional.It should be able to solve the problem.</p>
          </div>
        </div>

		<div className=" bg-base-100 flex  py-10 px-4">
		<div className="w-2/3 pt-3">
            <p>A good design is not only aesthetically pleasing,but also functional.It should be able to solve the problem.</p>
          </div>
          
		  <div className="pt-6 px-2">
            <img
              src="https://i.ibb.co/0QQn697/Screenshot-56-removebg-preview.png"
              alt="Movie"
            />
          </div>
		  <div className="w-full">
            <img
              src="https://i.ibb.co/cT5zYqQ/userPic1.png"
              alt="Movie"
            />
			<p className="text-center">Sarah Smith</p>
			<p className="text-center text-sm text-amber-600">Founder</p>
          </div>
          
        </div>

		<div className=" bg-base-100 flex  py-10 px-4">
          <div className="w-full">
            <img
              src="https://i.ibb.co/cT5zYqQ/userPic1.png"
              alt="Movie"
            />
			<p className="text-center">Sarah Smith</p>
			<p className="text-center text-sm text-amber-600">Founder</p>
          </div>
		  <div className="pt-6 px-2">
            <img
              src="https://i.ibb.co/0QQn697/Screenshot-56-removebg-preview.png"
              alt="Movie"
            />
          </div>
          <div className="w-2/3 pt-3">
            <p>A good design is not only aesthetically pleasing,but also functional.It should be able to solve the problem.</p>
          </div>
        </div>

		<div className=" bg-base-100 flex py-10 px-4">
		<div className="w-2/3 pt-3">
            <p>A good design is not only aesthetically pleasing,but also functional.It should be able to solve the problem.</p>
          </div>
          
		  <div className="pt-6 px-2">
            <img
              src="https://i.ibb.co/0QQn697/Screenshot-56-removebg-preview.png"
              alt="Movie"
            />
          </div>
		  <div className="w-full">
            <img
              src="https://i.ibb.co/cT5zYqQ/userPic1.png"
              alt="Movie"
            />
			<p className="text-center">Sarah Smith</p>
			<p className="text-center text-sm text-amber-600">Founder</p>
          </div>
          
        </div>
		
		</div>
      </div>
    </div>
  );
};

export default Team;

import Head from "next/head";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import img from "../assets/Image.png";
import img1 from "../assets/Image (1).png";
import img2 from "../assets/Image (2).png";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { image: img.src, bio: "Mr. Sourav Paul is a Full Stack Dev with skills in React, Next and other Js frameworks, also into DevOps, XR, Marketing & also has great experience into other Domains. Currently he is the CTO at Unicorniz Innovations. As a thought leader, he stays abreast of emerging trends, leveraging the latest tools and techniques.", name: "Dinesh Lal", designation: "CEO & Founder" },
    { image: img1.src, bio: "Mr. Sourav Paul is a Full Stack Dev with skills in React, Next and other Js frameworks, also into DevOps, XR, Marketing & also has great experience into other Domains. Currently he is the CTO at Unicorniz Innovations. As a thought leader, he stays abreast of emerging trends, leveraging the latest tools and techniques.", name: "M Vinod", designation: "COO & Founder" },
    { image: img2.src, bio: "Mr. Sourav Paul is a Full Stack Dev with skills in React, Next and other Js frameworks, also into DevOps, XR, Marketing & also has great experience into other Domains. Currently he is the CTO at Unicorniz Innovations. As a thought leader, he stays abreast of emerging trends, leveraging the latest tools and techniques.", name: "Sourav Paul", designation: "CTO" },
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

  const border1 = `h-10 border-l-2 ${currentIndex === 0 ? "border-black" : "border-slate-200"}`;
  const border2 = `h-10 border-l-2 ${currentIndex === 1 ? "border-black" : "border-slate-200"}`;
  const border3 = `h-10 border-l-2 ${currentIndex === 2 ? "border-black" : "border-slate-200"}`;

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
        className={` gap-[68px] px-3  lg:px-[124px] hidden lg:flex md:flex relative group lg:mt-56 mt-10 mb-7 lg:mb-24`}
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
        </div>
        <div className="lg:h-[370px] w-full lg:grid grid-cols-2 bg-black text-white">
          <div className="py-8 px-9">
            <h2 className="text-[40px]">{slides[currentIndex].name}</h2>
            <h6 className="text-[18px] text-[#FF7E21]">{slides[currentIndex].designation}</h6>
            <p className="text-[14px] text-justify mt-5">
              {slides[currentIndex].bio}
            </p>
          </div>
          <div className="relative">
            <img
              src={slides[currentIndex].image}
              className="z-10 w-[400px] h-[500px] lg:absolute left-9 bottom-0"
            />
          </div>
        </div>
        {/* Left Arrow */}
        <button
          className={`hidden ${currentIndex !== 0 && "group-hover:block"
            } absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
        >
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </button>
        {/* Right Arrow */}
        <button
          className={`hidden ${currentIndex !== slides.length - 1 && "group-hover:block"
            } absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
        >
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </button>
      </div>
      {/* mobile */}
      <div className="lg:hidden md:hidden">
        <div>
          <div className="bg-base-100 flex py-10 px-4">
            <div className="w-2/3 text-justofy">
              <p>{slides[0].bio}</p>
            </div>

            <div className="w-full px-4">
              <img
                src={slides[0].image}
                alt="Dinesh Lal CEO & Founder of Unicorniz Innovations"
                className="rounded-md"
              />
              <p className="text-center font-semibold text-lg">{slides[0].name}</p>
              <p className="text-center text-sm text-amber-600 font-bold">{slides[0].designation}</p>
            </div>
          </div>

          <div className="bg-base-100 flex py-10 px-4">
            <div className="w-full px-4">
              <img
                src={slides[1].image}
                alt="M Vinod COO & Founder of Unicorniz Innovations"
                className="rounded-md"
              />
              <p className="text-center font-semibold text-lg">{slides[1].name}</p>
              <p className="text-center text-sm text-amber-600 font-bold">{slides[1].designation}</p>
            </div>
            <div className="w-2/3 text-justify">
              <p>{slides[1].bio}</p>
            </div>
          </div>

          <div className="bg-base-100 flex py-10 px-4">
            <div className="w-2/3 text-justify">
              <p>{slides[2].bio}</p>
            </div>
            <div className="w-full px-4">
              <img
                src={slides[2].image}
                alt="Sourav Paul CTO of Unicorniz Innovations"
                className="rounded-md"
              />
              <p className="text-center font-semibold text-lg">{slides[2].name}</p>
              <p className="text-center text-sm text-amber-600 font-bold">{slides[2].designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

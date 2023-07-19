import React from "react";
import watch from "../../../assets/watch video.png";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <div className="md:px-[137px] px-5 grid justify-center mt-[78px] uppercase relative overflow-hidden">
        <div className="about" />
        <h3 className="lg:text-[40px] md:text-[40px]  text-xl font-semibold">
          About Us <hr className="w-16 border mt-2 border-black" />
        </h3>
        <div className="md:hidden hidden lg:block">
          <div className="pb-[207px] flex md:flex-row flex-col md:gap-[108px] md:justify-start justify-center items-center">
            <h1 className="text-[454px] text-transparent uText ml-[-35px] my-[-120px]">
              U
            </h1>
            <div className="">
              <h2 className="text-[40px] mb-5">
                we are a digital production team.
              </h2>
              <p className="leading-[60.8px] text-[32px] text-justify">
                Unicornz inovations is a leading design & software development
                agency based in Andaman and Nicobar. We help startups & Fortune
                500 companies delight humans on the other side of the screen.
              </p>
            </div>
          </div>
          <div className="absolute bottom-11 right-7">
            <Image src={watch} alt="watch" />
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden ">
          <div className="text-center text-3xl font-semibold py-8">
            <p>WE ARE A DIGITAL</p>
            <p>PRODUCTION TEAM.</p>
          </div>

          <div className="text-center">
            <p>
              UNICORNZ INOVATIONS IS A LEADING DESIGN & SOFTWARE DEVELOPMENT
              AGENCY BASED IN ANDAMAN AND NICOBAR. WE HELP STARTUPS & FORTUNE
              500 COMPANIES DELIGHT HUMANS ON THE OTHER SIDE OF THE SCREEN. 
            </p>
          </div>

          <div className="ml-32 md:ml-48 py-8">
            <button className="bg-black hover:bg-white sm:w-[168px] w-[120px] h-[50px] rounded-md border-black border  hover:text-black text-white flex justify-center items-center">
              Contact Us
            </button>
          </div>


          <div className="video-container ml-10 md:ml-32 mb-24" >
          <iframe width="300" height="200" src="https://www.youtube.com/embed/VF0c35BhisQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          
{/* <div class="w-full" controls>
  <video src="/docs/videos/flowbite.mp4" type="video/mp4"></video>
  Your browser does not support the video tag.
</div> */}

        </div>
      </div>
    </>
  );
};

export default AboutUs;

// import Image from "next/image";
// import React from "react";
// import coverImage from "../../../../assets/Album Cover.png";

// const Projects = () => {
//   return (
//     <div className="md:mt-[90px] mt-[40px] md:ml-[23px] md:mr-[10px]">
//       <div className="flex justify-between items-center">
//         <h3 className="uppercase sm:text-[40px] text-[20px]">
//           Projects <hr className="w-16 border border-black" />
//         </h3>
//         <p className="text-[#FF7E21] font-bold cursor-pointer text-sm">
//           know More
//         </p>
//       </div>
//       <div className="flex flex-wrap justify-center md:justify-between gap-[3.9vw] md:mt-[60px] mt-[20px]">
//         {[1, 2, 3, 4].map(() => (
//           <div className="md:w-[18.84vw] flex lg:flex-col">
//             <div className="pr-20 lg:pr-0">
// 			<Image
//               src={coverImage}
//               className="w-full md:rounded-3xl rounded-[2.2rem] shadow-2xl shadow-[#b8b1b1]"
//               alt="cover"
//             />
// 			</div>
//             <div className="mt-[20px] pl-10 ">
//               <h4 className="lg:text-[20px] text- font-semibold pr-0">Music Player UI</h4>
//               <p className="text-[16px] text-[#dbdbdb]"></p>
//             </div>
//             <div className="hidden sm:hidden gap-[27px]">
//               <div className="pt-12">
//                 <h3 className="px-[27px] border-black border rounded-full md:text-[1.8vw] text-[4vw]">
//                   UX/UI Design.
//                 </h3>
//               </div>
//               <p className="w-[396px] tracking-[2%]">
//                 Bringing the history of your brand to the forefront gives an
//                 emotional dimension to your visual identity, which is essential

//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import Link from "next/link";
import Image from "next/image";
import coverImage from "../../../../assets/Album Cover.png";
const Projects = () => {
  return (
    <div className="md:mt-[90px] mt-[40px] md:ml-[23px] md:mr-[10px]">
      <div className="flex justify-between items-center">
        <h3 className="uppercase text-[40px]">
          Projects <hr className="w-16 border border-black" />
        </h3>
        <Link href={"/projects"}>
          <p className="text-[#FF7E21] font-bold cursor-pointer">know more</p>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-[3.9vw] md:mt-[60px] mt-[20px]">

        <div className="md:w-[18.84vw] w-3/5 mt-5">
          <Image
            src={coverImage}
            className="w-full md:rounded-3xl rounded-[2.2rem] shadow-2xl shadow-[#b8b1b1]" alt="cover"
          />
          <div className="mt-[20px]">
            <h4 className="text-[20px] font-semibold">VRKshetra</h4>
            <p className="text-[16px] text-[#dbdbdb]"></p>
          </div>
        </div>

        <div className="md:w-[18.84vw] w-3/5 mt-5">
          <Image
            src={coverImage}
            className="w-full md:rounded-3xl rounded-[2.2rem] shadow-2xl shadow-[#b8b1b1]" alt="cover"
          />
          <div className="mt-[20px]">
            <h4 className="text-[20px] font-semibold">Sublime Islands</h4>
            <p className="text-[16px] text-[#dbdbdb]"></p>
          </div>
        </div>

        <div className="md:w-[18.84vw] w-3/5 mt-5">
          <Image
            src={coverImage}
            className="w-full md:rounded-3xl rounded-[2.2rem] shadow-2xl shadow-[#b8b1b1]" alt="cover"
          />
          <div className="mt-[20px]">
            <h4 className="text-[20px] font-semibold">Business Management App</h4>
            <p className="text-[16px] text-[#dbdbdb]"></p>
          </div>
        </div>

        <div className="md:w-[18.84vw] w-3/5 mt-5">
          <Image
            src={coverImage}
            className="w-full md:rounded-3xl rounded-[2.2rem] shadow-2xl shadow-[#b8b1b1]" alt="cover"
          />
          <div className="mt-[20px]">
            <h4 className="text-[20px] font-semibold">Bhojan Mitra</h4>
            <p className="text-[16px] text-[#dbdbdb]"></p>
          </div>
        </div>

      </div>

      {/* mobile */}
      {/* <div className="lg:hidden">
        <div className="w-96 bg-base-100">
			<div className="pt-4">
				<p className="items-center text-center font-semibold text-xl">SHOPLIFTY</p>
			</div>
          <div className="flex">
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
      </div> */}
    </div>
  );
};

export default Projects;

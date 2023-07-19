import Image from 'next/image';
import React from 'react';
import img from '../../../../assets/image 13.png'
const OurStory = () => {
	const star = (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="yellow"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
				/>
			</svg>
		</>
	);
	return (
		<div className="bg-black hidden lg:flex min-h-[144px] mt-[85px] mb-[100px] flex flex-wrap p-3 justify-between px-[73px] text-[32px] font-semibold items-center">
			<div className='flex gap-[72px] items-center'>{star} <p className='text-white'>AR/VR </p></div>
			<div className='flex gap-[72px] items-center'>{star} <p className='text-white'>SaaS</p></div>
			<div className='flex gap-[72px] items-center'>{star} <p className='text-white'>Marketing</p></div>
			<div className='flex gap-[72px] items-center'>{star} <p className='text-white'>AI/ML</p></div>
			<div className='hidden lg:block'>{star} </div>
		</div>
	);
};

export default OurStory; 
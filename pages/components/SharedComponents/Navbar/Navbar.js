import { useState } from "react";
import logo from "../../../../assets/Unicorniz Logo.jpg";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import withEmailjs from "../Hoc/withEmail";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
const Navbar = ({ loading, handleSubmit }) => {
	const [hamburger, setHamburger] = useState(true);
	const menuItems = (
		<>
			<Link href="/">
				<li tabIndex={0} className=" cursor-pointer focus:text-black">
					Home
				</li>
			</Link>
			<Link href={"/services"}>
				<li tabIndex={1} className=" cursor-pointer focus:text-black">
					Services
				</li>
			</Link>
			<Link href={"/project"}>
				<li tabIndex={2} className=" cursor-pointer focus:text-black">
					Project
				</li>
			</Link>
			<Link href={"/about"}>
				<li tabIndex={3} className=" cursor-pointer focus:text-black">
					About
				</li>
			</Link>
			<Link href={"/team"}>
				<li tabIndex={3} className=" cursor-pointer focus:text-black">
					Team
				</li>
			</Link>
			
		</>
	);

	return (
		<div className="flex justify-between lg:block relative">
			<div className="flex justify-between border-b shadow-gray-400 shadow items-center h-16 w-full px-5">
				<Link href={"/"}>
					<Image src={logo} priority alt="logo" className="h-12 w-full" />
				</Link>{" "}
				<ul className="lg:flex hidden  gap-12 text-[#7f7f7f]">{menuItems}</ul>
				{/* <PrimaryButton
					classes={"lg:block hidden"}
					disabledProps={loadin}
					onClickProps={handleSubmit}>
					Contact Us
				</PrimaryButton> */}
				<button className="lg:block hidden bg-black text-white w-32 h-12">
					<Link href={"/contactus"}>Contact Us</Link>
				</button>
				<div className="lg:hidden block">
					<div onClick={() => setHamburger((prev) => !prev)}>
						<HiMenu
							size={30}
							className={`${!hamburger && "hidden"}`}
							cursor={"pointer"}
						/>
						<AiOutlineClose
							size={30}
							className={`${hamburger && "hidden"} `}
							cursor={"pointer"}
						/>
					</div>
				</div>
			</div>
			<div
				className={` ${
					!hamburger ? "top-16 " : "top-[-400px]"
				} ease-out transition-all duration-500 lg:hidden flex flex-col absolute right-2 p-3 rounded bg-slate-100 z-50`}>
				<div className="">
					{" "}
					<ul
						onClick={() => setHamburger((prev) => !prev)}
						className={`flex flex-col lg:gap-12 gap-2 pb-2 text-[#7f7f7f]`}>
						{menuItems}
					</ul>
				</div>
				<div className="">
					{/* <button
						disabled={loading}
						onClick={handleSubmit}
						className="px-8 py-3 bg-black lg:hidden block text-white">
						Contact Us
					</button> */}
					<button className="px-8 py-3 bg-black lg:hidden block text-white">
					<Link href={"/contactus"}>Contact Us</Link>
				   </button>
				</div>
			</div>
		</div>
	);
};

export default withEmailjs(Navbar);

import { useState } from "react";
import logo from "../../../../assets/Unicorniz Logo White.png";
import logo1 from "../../../../assets/Unicorniz Logo Black.png";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { MdHomeRepairService } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import { GiTeamIdea } from "react-icons/gi";
import Link from "next/link";
import withEmailjs from "../Hoc/withEmail";
// import PrimaryButton from "../PrimaryButton/PrimaryButton";
const Navbar = ({ loading, handleSubmit }) => {
	const [hamburger, setHamburger] = useState(true);
	const menuItems = (
		<>
			<Link href={"/about"}>
				<div tabIndex={1} className="flex flex-row cursor-pointer focus:text-black focus:font-bold hover:text-slate-950 hover:font-bold gap-5 w-full mb-5 lg:w-auto lg:bg-inherit">
					<ImWarning size={25} className="lg:hidden" color="gray" />
					<p className="py-1">
						About us
					</p>
				</div>
			</Link>
			<Link href={"/services"}>
				<div tabIndex={2} className="flex flex-row cursor-pointer focus:text-black focus:font-bold hover:text-slate-950 hover:font-bold gap-5 w-full mb-5 lg:w-auto lg:bg-inherit">
					<MdHomeRepairService size={26} className="lg:hidden" color="gray" />
					<p className="py-1">
						Services
					</p>
				</div>
			</Link>
			<Link href={"/products"}>
				<div tabIndex={3} className="flex flex-row cursor-pointer focus:text-black focus:font-bold hover:text-slate-950 hover:font-bold gap-5 w-full mb-5 lg:w-auto lg:bg-inherit">
					<BsBoxes size={25} className="lg:hidden" color="gray" />
					<p className="py-1">
						Products
					</p>
				</div>
			</Link>
			<Link href={"/blogs"}>
				<div tabIndex={4} className="flex flex-row cursor-pointer focus:text-black focus:font-bold hover:text-slate-950 hover:font-bold gap-5 w-full mb-5 lg:w-auto lg:bg-inherit">
					<GiTeamIdea size={25} className="lg:hidden" color="gray" />
					<p className="py-1">
						Blogs
					</p>
				</div>
			</Link>
			<Link href={"/events"}>
				<div tabIndex={5} className="flex flex-row cursor-pointer focus:text-black focus:font-bold hover:text-slate-950 hover:font-bold gap-5 w-full lg:w-auto lg:bg-inherit">
					<GiTeamIdea size={25} className="lg:hidden" color="gray" />
					<p className="py-1">
						Events
					</p>
				</div>
			</Link>
		</>
	);

	return (
		<div className="flex justify-between lg:block relative">
			<div className="flex justify-between shadow-lg items-center h-20 w-full px-5">
				<Link href={"/"}>
					<Image src={logo} priority alt="logo" className="h-10 w-full lg:h-12" />
				</Link>
				<ul className="lg:flex hidden gap-12 text-slate-600 text-lg mt-5">{menuItems}</ul>
				{/* <PrimaryButton
					classes={"lg:block hidden"}
					disabledProps={loadin}
					onClickProps={handleSubmit}>
					Contact Us
				</PrimaryButton> */}
				<button className="lg:block hidden [background:linear-gradient(225deg,_#6675f7,_#57007b)] text-white w-32 h-11 font-mono rounded-lg hover:bg-slate-800">
					<Link href={"/contactus"}>Contact Us</Link>
				</button>
				<div className="lg:hidden block" onClick={() => setHamburger((prev) => !prev)}>
					<HiMenu
						size={20}
						className={`${!hamburger && "hidden"}`}
						cursor={"pointer"}
					/>
					<AiOutlineClose
						size={16}
						className={`${hamburger && "hidden"} `}
						cursor={"pointer"}
					/>
				</div>
			</div>

			{
				!hamburger &&
				<div className="w-[60%] h-screen ease-in-out transition-all duration-5000 lg:hidden flex flex-col absolute bg-black z-50">
					<div className="flex flex-row lg:hidden items-end justify-end text-slate-100 w-full" onClick={() => setHamburger((prev) => !prev)}>
						<div className="w-4/5 mx-auto">
							<Link href={"/"}>
								<Image src={logo1} priority alt="logo" className="mt-10 mb-8 mx-auto" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col">
						<div
							onClick={() => setHamburger((prev) => !prev)}
							className="ml-10 text-gray-500 list-none font-sans font-semibold text-sm focus:font-bold hover:text-gray-50 mt-10 mb-10">
							{menuItems}
						</div>
					</div>
					<div className="flex flex-col justify-center items-center rounded-3xl bg-neutral-950 space-y-5 mx-5 mt-28">
						<div className="flex-col text-center mt-2 mx-5 space-x-3 space-y-3">
							<p className="text-slate-50 font-poppins1 text-sm font-medium mt-2">Let's start</p>
							<p className="text-zinc-400 font-sans text-sm font-semibold">Get in contact with us to work</p>
						</div>

						<div>
							<button className="px-7 py-2.5 bg-orange-500 lg:hidden block text-white font-mono rounded-lg mb-4">
								<Link href={"/contactus"}>Contact Us</Link>
							</button>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default withEmailjs(Navbar);

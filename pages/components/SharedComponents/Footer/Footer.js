import Image from "next/image";
import logo from "../../../../assets/Unicorniz Logo.jpg";
import twiter from "../../../../assets/twiter.png";
import instagram from "../../../../assets/instagram.png";
import linkedin from "../../../../assets/linkedin.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div
        className="bg-[#0D0D0D] w-full min-h-[268px] lg:flex px-10 lg:px-[165px] flex md:flex-row flex-col justify-between items-center"
      >
        <div className="flex flex-col w-auto md:w-full">
          <Image src={logo} className="w-40 pt-5" alt="logo" />{" "}
          <p className="w-[303px] text-[14px] text-[#9E9E9E] md:mt-[22px] mt-[10px]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>
        <div className="pt-5">
          <div className="text-[14px] text-[#9E9E9E] flex gap-[30px] sm:gap-[104px] md:[52px]">
            <ul className="leading-[38px]">
              <p className="text-white text-xl font-semibold">Resources</p>{" "}
              <li><a href="https://www.google.com/maps/place/Unicorniz+Innovations/@11.70817,92.7211179,15z/data=!4m14!1m7!3m6!1s0x3088bfbec53441fd:0x4a11f4c9f0065f89!2sUnicorniz+Innovations!8m2!3d11.70817!4d92.7211179!16s%2Fg%2F11kc2mk8_6!3m5!1s0x3088bfbec53441fd:0x4a11f4c9f0065f89!8m2!3d11.70817!4d92.7211179!16s%2Fg%2F11kc2mk8_6?entry=ttu" target="_blank">Visit us</a></li>
              <li>Blog</li>
              <li>Feedback</li>
            </ul>
            <ul className="leading-[38px]">
              <p className="text-white text-xl font-semibold">About</p>
              <li><Link href={"/team"}>Our team</Link></li>
              <li><Link href={"/privacy-policy"}>Privacy_Policy</Link></li>
              <li><Link href={"/privacy-policy"}>Terms/Conditions</Link></li>
            </ul>

            <ul className="leading-[38px]">
              <p className="text-white text-xl font-semibold">Support</p>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black h-[92px] md:pr-[165px] md:pl-[145px] py-2 flex md:flex-row sm:flex-col flex-row items-center justify-between">
        {" "}
        <small className="sm:text-[14px] text-[10px] text-[#9E9E9E] pl-4 sm:pl-0">
          All Rights Reservd Unicorniz Innovations 2023
        </small>
        <div className="flex gap-4 pr-4 sm:pr-0">
          <div className="bg-[#18181C] hover:bg-orange-500 sm:h-10 sm:w-10 flex items-center justify-center rounded-2xl">
            <a href="https://twitter.com/teamunicorniz" target="_blank">
              <Image src={twiter} alt="icons" />
            </a>
          </div>
          <div className="bg-[#18181C] hover:bg-orange-500 sm:h-10 sm:w-10 flex items-center justify-center rounded-2xl">
            <a href="https://www.linkedin.com/company/unicorniz-innovations" target="_blank">
              <Image src={linkedin} alt="icons" />
            </a>
          </div>
          <div className="bg-[#18181C] hover:bg-orange-500 sm:h-10 sm:w-10 flex items-center justify-center rounded-2xl px-2">
            <a href="https://www.instagram.com/unicornizinnovations" target="_blank">
              <Image src={instagram} alt="icons" className="rounded-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

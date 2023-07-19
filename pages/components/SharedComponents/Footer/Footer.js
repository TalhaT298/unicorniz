import Image from "next/image";
import logo from "../../../../assets/Unicorniz Logo.jpg";
import twiter from "../../../../assets/twiter.png";
import instagram from "../../../../assets/discord.png";
import linkedin from "../../../../assets/linkedin.png";
const Footer = () => {
  return (
    <footer>
      <div
        className="bg-[#0D0D0D] w-full min-h-[268px] hidden lg:flex px-10 lg:px-[165px] flex md:flex-row flex-col justify-between items-center
"
      >
        <div>
          <Image src={logo} className="w-40 pt-5" alt="logo" />{" "}
          <p className="w-[303px] text-[14px] text-[#9E9E9E] md:mt-[22px]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>
        <div className="pt-5">
          <div className="text-[14px] text-[#9E9E9E] flex gap-[104px]">
            <ul className="leading-[38px]">
              <p className="text-white text-xl font-semibold">Resources</p>{" "}
              <li>Visit us</li>
              <li>Blog</li>
              <li>Feedback</li>
            </ul>
            <ul className="leading-[38px]">
              <p className="text-white text-xl font-semibold">About</p>
              <li>Our team</li>
              <li>Privacy Policy</li>
              <li>Term and Condition</li>
            </ul>

            <ul className="leading-[38px]">
              <p className="text-white text-xl font-semibold">Support</p>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Refer Someone</li>
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
            <Image src={twiter} alt="icons" />
          </div>
          <div className="bg-[#18181C] hover:bg-orange-500 sm:h-10 sm:w-10 flex items-center justify-center rounded-2xl">
            <Image src={linkedin} alt="icons" />
          </div>
          <div className="bg-[#18181C] hover:bg-orange-500 sm:h-10 sm:w-10 flex items-center justify-center rounded-2xl">
            <Image src={instagram} alt="icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

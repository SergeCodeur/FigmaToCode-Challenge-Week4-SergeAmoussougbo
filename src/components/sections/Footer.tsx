import Logo from "@/assets/images/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-black">
      <MaxContentWidthWrapper className="py-6 flex justify-between items-center">
        <Link href="/">
          <Image
            className="relative z-[55]"
            src={Logo}
            alt="logo"
            width={139.91}
            height={40}
          />
        </Link>
        <div className="flex flex-col lg:gap-3 gap-0 lg:text-heading-h6-600 text-paragraph-3-600 text-white">
          <span>@ 2019-2023 Personal</span>
          <span>Made In Figma</span>
        </div>
      </MaxContentWidthWrapper>
    </footer>
  );
};

export default Footer;

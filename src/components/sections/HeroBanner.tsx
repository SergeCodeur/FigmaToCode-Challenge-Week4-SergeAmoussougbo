import BannerImage from "@/assets/images/banner-img.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaReddit, FaTwitter } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <section className="bg-white">
      <MaxContentWidthWrapper>
        <div className="lg:px-8 grid lg:grid-cols-2 grid-cols-1 items-center min-h-[596px] gap-10">
          <div className="lg:min-w-[600px] w-full space-y-8 relative max-md:order-2">
            <div className="lg:text-display-text-800 text-display-text-m-800 space-y-5">
              <div>
                <span className="lg:text-display-text text-display-text-m mr-4 mb-5">
                  Hello I&apos;m
                </span>
                Envren Shash.
              </div>
              <div>
                Frontend
                <span className="ml-4 lg:text-outlined-800 text-outilined-m-800">
                  Developer
                </span>
                <br />
              </div>
              <div>
                <span className="lg:text-display-text text-display-text-m mr-4">
                  Based In
                </span>
                India
              </div>
            </div>
            <p className="text-paragraph-2 text-zinc-500 lg:max-w-[578px] w-full">
              I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
            <ul className="inline-flex gap-8 absolute lg:-bottom-[147px]">
              <li>
                <Button variant="icon" asChild>
                  <Link href="#facebook">
                    <FaFacebook size={20} />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="icon" asChild>
                  <Link href="#reddit">
                    <FaReddit size={20} />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="icon" asChild>
                  <Link href="#twitter">
                    <FaTwitter size={20} />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="icon" asChild>
                  <Link href="#discord">
                    <IoLogoDiscord size={20} />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          {/* Position on grid is first */}
          <div className="relative h-full max-md:order-1">
            <Image
              src={BannerImage}
              className="w-full h-full object-contain lg:absolute lg:bottom-0"
              width={796}
              height={596}
              alt=""
            />
            <div className="bg-black h-[3px] lg:min-w-[796px] max-lg:left-0 w-full absolute bottom-0 right-0"></div>
          </div>
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default HeroBanner;

import Link from "next/link";
import { FaFacebook, FaReddit, FaTwitter } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactSection = () => {
  return (
    <section className="bg-white" id="contact-me">
      <MaxContentWidthWrapper className="grid grid-cols-2 gap-5 max-md:grid-cols-1 justify-between">
        <div>
          <form action="" className="space-y-4 max-w-[500px]">
            <Input placeholder="Your name" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Your website (If exists)" type="url" />
            <Textarea placeholder="How can I help?*" className="resize-none" />
            <div className="gap-6 flex items-center w-full flex-wrap">
              <Button
                className="min-w-[133px] lg:min-h-[56px] max-md:text-button-text2-600"
                variant="medium"
              >
                Get In Touch
              </Button>
              <ul className="inline-flex gap-6">
                <li>
                  <Button
                    variant="icon"
                    className="lg:h-[56px] lg:w-[56px] w-12 h-12"
                    asChild
                  >
                    <Link href="#facebook">
                      <FaFacebook size={20} />
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="icon"
                    className="lg:h-[56px] lg:w-[56px] w-12 h-12"
                    asChild
                  >
                    <Link href="#reddit">
                      <FaReddit size={20} />
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="icon"
                    className="lg:h-[56px] lg:w-[56px] w-12 h-12"
                    asChild
                  >
                    <Link href="#twitter">
                      <FaTwitter size={20} />
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="icon"
                    className="lg:h-[56px] lg:w-[56px] w-12 h-12"
                    asChild
                  >
                    <Link href="#discord">
                      <IoLogoDiscord size={20} />
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="space-y-5 max-w-[610px] w-full flex flex-col justify-center max-md:mt-5">
          <div className="lg:text-display-text-800 text-display-text-m-800 space-y-3">
            <div>
              <span className="lg:text-display-text-800 text-display-text-m-800 mr-4">
                Let&apos;s
              </span>
              Talk
              <span className="lg:text-display-text-800 text-display-text-m-800 ml-4">
                for
              </span>
            </div>
            <div>
              <span className="lg:text-display-text-800 text-display-text-m-800">
                Something special
              </span>
            </div>
          </div>
          <div>
            <p className="text-zinc-500 text-paragraph-2">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <div className="mt-10 flex flex-col lg:gap-4 gap-3">
              <Link
                href="mailto:Youremail@gmail.com"
                className="text-black lg:text-heading-h3-600 text-heading-h5-700"
              >
                Youremail@gmail.com
              </Link>
              <Link
                href="tel:1234567890"
                className="text-black lg:text-heading-h3-600 text-heading-h5-700"
              >
                1234567890
              </Link>
            </div>
          </div>
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default ContactSection;

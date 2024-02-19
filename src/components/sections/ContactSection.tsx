import Link from "next/link";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Input } from "../ui/input";

const ContactSection = () => {
  return (
    <MaxContentWidthWrapper className="grid grid-cols-2 gap-5 max-md:grid-cols-1 justify-between">
      <div>
        <Input placeholder="Enter your texte" />
      </div>
      <div className="space-y-5 max-w-[610px] w-full">
        <div className="lg:text-display-text-800 text-display-text-m-800 space-y-3">
          <div>
            <span className="lg:text-display-text-800 text-display-text-m mr-4">
              Let&apos;s
            </span>
            Talk
            <span className="lg:text-display-text-800 text-display-text-m ml-4">
              for
            </span>
          </div>
          <div>
            <span className="lg:text-display-text-800 text-display-text-m">
              Something special
            </span>
          </div>
        </div>
        <div>
          <p className="text-zinc-500 text-paragraph-2">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <div className="mt-10 flex flex-col">
            <Link
              href="mailto:Youremail@gmail.com"
              className="text-black text-heading-h3-600"
            >
              Youremail@gmail.com
            </Link>
            <Link
              href="tel:1234567890"
              className="text-black text-heading-h3-600"
            >
              1234567890
            </Link>
          </div>
        </div>
      </div>
    </MaxContentWidthWrapper>
  );
};

export default ContactSection;

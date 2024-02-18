import AboutImage from "@/assets/images/about-img.svg";
import Image from "next/image";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import Title from "../ui/Title";

const AboutSection = () => {
  return (
    <section className="bg-white" id="about">
      <MaxContentWidthWrapper className="grid grid-cols-2 gap-5 max-md:grid-cols-1 justify-between">
        <div>
          <Image
            className=""
            src={AboutImage}
            alt=""
            width={525.45}
            height={572}
          />
        </div>
        <div className="space-y-5 max-w-[610px] w-full">
          <Title className="w-full my-5 max-md:justify-start">
            <span className="lg:text-display-text text-display-text-m">
              About
            </span>
            <span className="lg:text-display-text-800 text-display-text-m-800">
              Me
            </span>
          </Title>
          <div className="space-y-5">
            <p className="text-paragraph-2">
              I&apos;m a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
            </p>
            <p className="text-paragraph-2">
              I began my journey as a web developer in 2015, and since then,
              I&apos;ve continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I&apos;m building cutting-edge web
              applications using modern technologies such as Next.js,
              TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="text-paragraph-2">
              When I&apos;m not in full-on developer mode, you can find me
              hovering around on twitter or on indie hacker, witnessing the
              journey of early startups or enjoying some free time. You can
              follow me on Twitter where I share tech-related bites and build in
              public, or you can follow me on GitHub.
            </p>
          </div>
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default AboutSection;

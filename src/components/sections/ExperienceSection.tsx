import Apple from "@/assets/images/apple-icon.svg";
import Google from "@/assets/images/google-icon.svg";
import Youtube from "@/assets/images/youtube-icon.svg";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import Title from "../ui/Title";
import { ExperienceCard } from "../ui/card";

const Experience = [
  {
    job_name: "Lead Software Engineer at Google",
    company_logo: Google.src,
    duration: "Nov 2019 - Present",
    job_description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    job_name: "Software Engineer at Youtube",
    company_logo: Youtube.src,
    duration: "Nov 2019 - Present",
    job_description:
      "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
  },
  {
    job_name: "Junior Software Engineer at Apple",
    company_logo: Apple.src,
    duration: "Jan 2016 - Dec 2017",
    job_description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-black">
      <MaxContentWidthWrapper className="space-y-5">
        <Title className="w-full my-5 text-white">
          <span className="lg:text-display-text text-display-text-m">My</span>
          <span className="lg:text-display-text-800 text-display-text-m-800">
            Experience
          </span>
        </Title>
        <div className="grid grid-cols-1 lg:gap-8 gap-5 lg:py-10 lg:px-6 justify-items-center">
          {Experience.map((experience) => (
            <ExperienceCard key={experience.job_name} {...experience} />
          ))}
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default ExperienceSection;

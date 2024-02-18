import { BsGit } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNestjs, SiSocketdotio, SiStorybook } from "react-icons/si";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import Title from "../ui/Title";
import { SkillsCard } from "../ui/card";

const Skill = [
  {
    language_icon: <BsGit size={56} />,
    language_name: "Git",
  },
  {
    language_icon: <IoLogoJavascript size={56} />,
    language_name: "Javascript",
  },
  {
    language_icon: <FaSass size={56} />,
    language_name: "Sass/Scss",
  },
  {
    language_icon: <SiNestjs size={56} />,
    language_name: "Nest.JS",
  },
  {
    language_icon: <SiStorybook size={56} />,
    language_name: "Storybook",
  },
  {
    language_icon: <SiNestjs size={56} />,
    language_name: "Nest.JS",
  },
  {
    language_icon: <BsGit size={56} />,
    language_name: "Git",
  },
  {
    language_icon: <SiStorybook size={56} />,
    language_name: "Storybook",
  },
  {
    language_icon: <SiSocketdotio size={56} />,
    language_name: "Socket.Io",
  },
  {
    language_icon: <FaSass size={56} />,
    language_name: "Sass/Scss",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <MaxContentWidthWrapper className="space-y-5">
        <Title className="w-full my-5">
          <span className="lg:text-display-text text-display-text-m">My</span>
          <span className="lg:text-display-text-800 text-display-text-m-800">
            Skills
          </span>
        </Title>
        <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 justify-items-center gap-y-10 pt-10 max-sm:gap-5">
          {Skill.map((skill) => (
            <SkillsCard key={skill.language_name} {...skill} />
          ))}
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default SkillsSection;

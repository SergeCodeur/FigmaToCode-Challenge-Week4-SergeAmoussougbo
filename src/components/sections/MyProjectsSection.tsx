import Project1 from "@/assets/images/image-1.png";
import Project2 from "@/assets/images/image-2.png";
import Project3 from "@/assets/images/image-3.png";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import Title from "../ui/Title";
import { ProjectCard, ProjectCardProps } from "../ui/card";

const MyProjects = [
  {
    project_name: "Crypto Screener Application",
    project_image: Project1.src,
    project_number: "01",
    project_link: "#",
    project_description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
  },
  {
    project_name: "Euphoria - Ecommerce (Apparels) Website Template",
    project_image: Project2.src,
    project_number: "02",
    project_link: "#",
    project_description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book.",
    card_orientation: "right" as ProjectCardProps["card_orientation"],
  },
  {
    project_name: "Blog Website Template",
    project_image: Project3.src,
    project_number: "03",
    project_link: "#",
    project_description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
  },
];

const MyProjectsSection = () => {
  return (
    <section className="bg-black" id="project">
      <MaxContentWidthWrapper className="space-y-5">
        <Title className="w-full my-5 text-white">
          <span className="lg:text-display-text text-display-text-m">My</span>
          <span className="lg:text-display-text-800 text-display-text-m-800">
            Projects
          </span>
        </Title>
        <div className="space-y-5 py-5">
          {MyProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default MyProjectsSection;

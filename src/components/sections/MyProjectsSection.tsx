import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import Title from "../ui/Title";

const MyProjectsSection = () => {
  return (
    <section className="bg-black" id="project">
      <MaxContentWidthWrapper>
        <Title className="w-full my-5 text-white">
          <span className="lg:text-display-text text-display-text-m">My</span>
          <span className="lg:text-display-text-800 text-display-text-m-800">
            Projects
          </span>
        </Title>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default MyProjectsSection;

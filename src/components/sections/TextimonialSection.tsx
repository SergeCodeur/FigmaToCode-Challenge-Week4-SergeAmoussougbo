import { default as User1, default as User3 } from "@/assets/images/user_1.svg";
import User2 from "@/assets/images/user_2.svg";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import Title from "../ui/Title";
import { TestimonialsCard } from "../ui/card";

const Testimonial = [
  {
    user_image: User1,
    user_name: "Evren Shah",
    user_description:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    user_job: "Designer",
  },
  {
    user_image: User2,
    user_name: "Flora sheen",
    user_description:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    user_job: "Designer",
  },
  {
    user_image: User3,
    user_name: "Evren Shah",
    user_description:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    user_job: "Designer",
  },
];

const TextimonialSection = () => {
  return (
    <section>
      <MaxContentWidthWrapper>
        <Title className="w-full my-5 text-black">
          <span className="lg:text-display-text text-display-text-m">My</span>
          <span className="lg:text-display-text-800 text-display-text-m-800">
            Testimonials
          </span>
        </Title>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 lg:px-6 lg:py-10">
          {Testimonial.map((user, index) => (
            <TestimonialsCard key={index} {...user} />
          ))}
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default TextimonialSection;

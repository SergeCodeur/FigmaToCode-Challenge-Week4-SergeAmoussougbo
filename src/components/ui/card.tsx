import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

export interface SkillsCardProps {
  className?: string;
  language_icon: React.ReactElement;
  language_name: string;
}

export const SkillsCard = React.forwardRef<HTMLDivElement, SkillsCardProps>(
  ({ className, language_icon, language_name, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col justify-center items-center gap-8 p-6 max-w-[186px] w-full max-h-[186px] h-full rounded-[4px] border-[2px] border-black hover:bg-black hover:text-white transition-colors",
        className
      )}
      {...props}
    >
      <span className="min-h-[56px]">{language_icon}</span>
      <p className="text-heading-h5-800">{language_name}</p>
    </div>
  )
);
SkillsCard.displayName = "SkillsCard";

export interface ExperienceCardProps {
  className?: string;
  job_name: string;
  duration: string;
  company_logo: string;
  job_description: string;
}

export const ExperienceCard = React.forwardRef<
  HTMLDivElement,
  ExperienceCardProps
>(
  (
    { className, job_name, duration, company_logo, job_description, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "hover:bg-zinc-800 transition-colors w-full max-w-[1168px] space-y-7 rounded-[10px] min-h-[192px] py-[30px] px-6 border border-zinc-500",
        className
      )}
      {...props}
    >
      <div className="flex max-md:flex-col gap-[30px] items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <Image src={company_logo} alt="company logo" width={32} height={32} />
          <h3 className="lg:text-heading-h4-600 text-heading-h6-600 text-white">
            {job_name}
          </h3>
        </div>
        <div className="max-md:w-full text-start">
          <span className="text-heading-h6-600 text-zinc-300">{duration}</span>
        </div>
      </div>
      <div>
        <p className="text-paragraph-2 text-zinc-300">{job_description}</p>
      </div>
    </div>
  )
);
ExperienceCard.displayName = "EperienceCard";

export interface ProjectCardProps {
  className?: string;
  project_image: string;
  project_number: number | string;
  project_name: string;
  project_description: string;
  project_link: string;
  card_orientation?: "left" | "right";
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      project_name,
      project_image,
      project_number,
      project_link,
      project_description,
      card_orientation = "left",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex max-md:flex-col w-full gap-10 items-center",
        className,
        card_orientation === "right" ? "flex-row-reverse" : ""
      )}
      {...props}
    >
      <div className="lg:w-2/4">
        <Image
          src={project_image}
          alt="project image"
          className="rounded-[18.76px] h-full w-full"
          width={530}
          height={397.73}
        />
      </div>
      <div className="space-y-7 lg:w-2/4">
        <span className="lg:text-display-text-800 text-heading-h4-800 text-white">
          {project_number}
        </span>
        <h3 className="lg:text-heading-h2-700 text-heading-h5-800 text-white">
          {project_name}
        </h3>
        <p className="text-zinc-500 text-paragraph-2">{project_description}</p>
        <Link href={project_link} className="text-white inline-block">
          <RxExternalLink size={20} />
        </Link>
      </div>
    </div>
  )
);
ProjectCard.displayName = "ProjectCard";

export interface TestimonialsCardProps {
  className?: string;
  user_image: string;
  user_name: string;
  user_description: string;
  user_job: string;
}

export const TestimonialsCard = React.forwardRef<
  HTMLDivElement,
  TestimonialsCardProps
>(
  (
    { className, user_image, user_name, user_description, user_job, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "group p-10 flex flex-col gap-6 justify-center items-center shadow-card-shadow rounded-[20px] transition-all hover:bg-black bg-white w-full max-w-[370px]",
        className
      )}
      {...props}
    >
      <Image
        src={user_image}
        alt=""
        width={96}
        height={96}
        className="rounded-full"
      />
      <p className="text-neutral group-hover:text-white text-button-text2 text-center">
        {user_description}
      </p>
      <div className="w-full h-[2px] group-hover:bg-white bg-black max-w-[120px] mx-auto"></div>
      <h3 className="text-neutral group-hover:text-white text-heading-h5-600">
        {user_name}
      </h3>
      <h4 className="text-zinc-500 group-hover:text-white text-heading-h6-600">
        {user_job}
      </h4>
    </div>
  )
);
TestimonialsCard.displayName = "TestimonialsCard";

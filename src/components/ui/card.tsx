import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

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
ExperienceCard.displayName = "SkillsCard";

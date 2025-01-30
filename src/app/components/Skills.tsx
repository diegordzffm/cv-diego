import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type Skills = readonly string[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none -mt-2 flex-wrap gap-1 p-0", className)}
      aria-label="List of skills"
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge className=" bg-gray-200 text-black print:bg-gray-200 print:text-black print:text-[10px]"  aria-label={`Skill: ${skill}`}>
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      
      <h2 className="-mt-2 pb-1 text-xl font-bold" id="skills-section ">
        Kenntnisse und Sprache
      </h2>
      <SkillsList skills={skills} aria-labelledby="skills-section" />
    </Section>
  );
}

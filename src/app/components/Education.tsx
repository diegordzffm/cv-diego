import { Card, CardHeader, CardContent } from "@/components/ui/card"; 
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Education = (typeof RESUME_DATA)["education"][number];

interface EducationPeriodProps {
  start: Education["start"];
  end: Education["end"];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div
      className="text-xs text-gray-500 print:text-xs print:text-gray-500"
      aria-label={`Period: ${start} to ${end}`}
    >
      {start}-{end}
    </div>
  );
}

interface EducationItemProps {
  education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree } = education;

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3
              className="font-semibold leading-none text-blue-500 print:text-blue-500"
              id={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {school}
            </h3>
            <EducationPeriod start={start} end={end} />
          </div>
        </CardHeader>
        <CardContent
          className="mt-2 text-foreground/80 print:text-[12px]"
          aria-labelledby={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {degree}
        </CardContent>
      </Card>
    </>
  );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold " id="education-section">
        Bildungsweg
      </h2>
      <div
        className="space-y-1"
        role="feed"
        aria-labelledby="education-section"
      >
        {education.map((item) => (
          <article key={item.school} role="article">
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}

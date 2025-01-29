import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <hr className="border-t-2 border-gray-500 my-2 print:border-gray mb-1 mt-1.5" />
      <h2 className="text-xl -mt-1 font-bold" id="about-section">
        Über mich
      </h2> 
      <div
        className="text-pretty font serif -mt-1 text-sm text-foreground/80 print:text-[12px] text-justify"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}

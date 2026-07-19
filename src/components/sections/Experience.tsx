import { FC } from 'react';
import Section from '../layout/Section';
import { Experience as ExperienceType } from '../../data/personalData';

interface ExperienceProps {
  data: ExperienceType[];
}

const Experience: FC<ExperienceProps> = ({ data }) => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey so far.">
      <div className="space-y-0">
        {data.map((exp, index) => (
          <div key={exp.role + exp.company} className="relative pl-8 pb-12 last:pb-0 group">
            {/* Timeline line */}
            {index < data.length - 1 && (
              <div className="absolute left-[7px] top-3 bottom-0 w-px bg-border" />
            )}
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-border bg-background group-hover:border-primary transition-colors" />

            {/* Content */}
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">{exp.duration}</p>
              <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-muted-foreground/50 mt-1.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="chip text-[11px]">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

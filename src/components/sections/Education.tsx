import { FC } from 'react';
import { GraduationCap } from 'lucide-react';
import Section from '../layout/Section';
import { Education as EducationType } from '../../config/portfolio.config';

interface EducationProps {
  data: EducationType[];
}

const Education: FC<EducationProps> = ({ data }) => {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((edu) => (
          <div key={edu.degree} className="card p-5">
            <div className="p-2 rounded-lg bg-muted w-fit mb-4">
              <GraduationCap size={16} className="text-foreground" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{edu.degree}</h3>
            <p className="text-xs text-muted-foreground mb-3">{edu.institution}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
              <span>{edu.duration}</span>
              <span className="font-medium text-foreground">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;

import { FC } from 'react';
import Section from '../layout/Section';
import { Skill } from '../../config/portfolio.config';

interface SkillsProps {
  data: Skill[];
}

const Skills: FC<SkillsProps> = ({ data }) => {
  const categories = Array.from(new Set(data.map((s) => s.category)));

  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies and tools I work with.">
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {data
                .filter((s) => s.category === category)
                .map((skill) => (
                  <span key={skill.name} className="chip">
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

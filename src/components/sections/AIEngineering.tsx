import { FC } from 'react';
import Section from '../layout/Section';
import { AIEngineeringArea } from '../../config/portfolio.config';

interface AIEngineeringProps {
  data: AIEngineeringArea[];
}

const statusColors: Record<string, string> = {
  'Built': 'badge-building',
  'Built & Exploring': 'badge-building',
  'Practiced': 'badge-exploring',
  'Exploring': 'badge-exploring',
  'Researching': 'badge-researching',
};

const AIEngineering: FC<AIEngineeringProps> = ({ data }) => {
  return (
    <Section id="ai-engineering" title="AI Engineering" subtitle="Work I've built, skills I'm practicing, and areas I'm actively researching.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((area) => {
          const Icon = area.icon;
          return (
            <div key={area.title} className="card card-hover p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-muted">
                  <Icon size={16} className="text-foreground" />
                </div>
                <span className={`chip text-[10px] ${statusColors[area.status]}`}>
                  {area.status}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-foreground mb-2">{area.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{area.description}</p>

              {area.evidence && (
                <p className="mt-3 text-[10px] text-muted-foreground/70 uppercase tracking-wider">
                  Evidence: {area.evidence}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default AIEngineering;

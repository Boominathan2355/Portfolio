import { FC } from 'react';
import { Zap, Search, FlaskConical } from 'lucide-react';
import Section from '../layout/Section';
import { FocusArea } from '../../config/portfolio.config';
import { cn } from '../../lib/utils';

interface CurrentFocusProps {
  data: FocusArea[];
}

const statusConfig = {
  building: { label: 'Building', icon: Zap, className: 'badge-building' },
  exploring: { label: 'Exploring', icon: Search, className: 'badge-exploring' },
  researching: { label: 'Researching', icon: FlaskConical, className: 'badge-researching' },
};

const CurrentFocus: FC<CurrentFocusProps> = ({ data }) => {
  return (
    <Section id="focus" title="Current Focus" subtitle="What I'm working on, exploring, and researching right now.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((area) => {
          const status = statusConfig[area.status];
          const StatusIcon = status.icon;

          return (
            <div key={area.title} className="card card-hover p-5">
              <div className="flex items-center justify-between mb-3">
                <span className={cn('chip text-[11px] gap-1', status.className)}>
                  <StatusIcon size={10} />
                  {status.label}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-foreground mb-2">{area.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{area.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {area.technologies.map((tech) => (
                  <span key={tech} className="chip text-[10px]">{tech}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default CurrentFocus;

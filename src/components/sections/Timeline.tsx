import { FC } from 'react';
import { Briefcase, Code2, GraduationCap, Trophy, LucideIcon } from 'lucide-react';
import Section from '../layout/Section';
import { TimelineEvent } from '../../data/personalData';
import { cn } from '../../lib/utils';

interface TimelineProps {
  data: TimelineEvent[];
}

const typeConfig: Record<string, { icon: LucideIcon, color: string }> = {
  role: { icon: Briefcase, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
  project: { icon: Code2, color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
  education: { icon: GraduationCap, color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' },
  achievement: { icon: Trophy, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
};

const Timeline: FC<TimelineProps> = ({ data }) => {
  return (
    <Section id="timeline" title="Timeline" subtitle="Key milestones in my journey.">
      <div className="relative">
        {data.map((event, index) => {
          const config = typeConfig[event.type];
          const Icon = config.icon;

          return (
            <div key={event.title} className="relative pl-10 pb-8 last:pb-0 group">
              {/* Line */}
              {index < data.length - 1 && (
                <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
              )}

              {/* Icon */}
              <div className={cn('absolute left-0 top-0 w-8 h-8 rounded-lg border flex items-center justify-center', config.color)}>
                <Icon size={14} />
              </div>

              {/* Content */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-0.5">{event.date}</p>
                <h3 className="text-sm font-semibold text-foreground">{event.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Timeline;

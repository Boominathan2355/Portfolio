import { FC } from 'react';
import Section from '../layout/Section';
import { PortfolioConfig } from '../../config/portfolio.config';

interface AboutProps {
  data: PortfolioConfig;
}

const About: FC<AboutProps> = ({ data }) => {
  return (
    <Section id="about" title="About" subtitle="Who I am and what I build.">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-5">
          {data.about.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="lg:col-span-2">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-sm bg-muted">
            <img 
              src={`${import.meta.env.BASE_URL || '/'}${data.workImage}`}
              alt={`${data.name} at work`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
        {[
          { label: 'Location', value: data.location },
          { label: 'Email', value: data.email, href: `mailto:${data.email}` },
          { label: 'Role', value: data.title },
          { label: 'Education', value: data.education[0]?.degree ?? '—' },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
              {item.label}
            </p>
            {item.href ? (
              <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all">
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;

import { FC } from 'react';
import { Award, Trophy } from 'lucide-react';
import Section from '../layout/Section';
import { Certification, Achievement } from '../../config/portfolio.config';

interface CertificationsProps {
  certifications: Certification[];
  achievements: Achievement[];
}

const Certifications: FC<CertificationsProps> = ({ certifications, achievements }) => {
  return (
    <Section id="certifications" title="Certifications & Achievements">
      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mb-10">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((a) => (
              <div key={a.title} className="card p-4 flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-500">
                  <Trophy size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{a.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="card p-4 flex items-start gap-3">
              <div className="p-1.5 rounded-md bg-muted">
                <Award size={14} className="text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;

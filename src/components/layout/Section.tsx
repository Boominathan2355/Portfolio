import { FC, ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';
import Container from './Container';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: FC<SectionProps> = ({ id, children, className, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} className={cn('section', className)} ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {title && (
            <div className="mb-12">
              <h2 className="section-heading">{title}</h2>
              {subtitle && <p className="section-subheading">{subtitle}</p>}
            </div>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
};

export default Section;

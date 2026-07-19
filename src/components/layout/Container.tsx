import { FC, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cn('mx-auto max-w-5xl px-6 sm:px-8', className)}>
    {children}
  </div>
);

export default Container;

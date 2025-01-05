import { ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode
  className?: string
}

export function GridContainer({ children, className } : GridContainerProps) {
  return <section 
          className={`${className} w-full max-w-container mx-auto px-3`}
          >
            {children}
          </section>;
}
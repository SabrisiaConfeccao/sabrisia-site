import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {
  return (
    <motion.main
      className={`${className} w-full max-w-container mx-auto px-3 overflow-auto no-scrollbar`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
}

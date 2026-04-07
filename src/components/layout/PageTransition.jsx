import React from 'react';
import { motion } from 'framer-motion';

export function PageTransition({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

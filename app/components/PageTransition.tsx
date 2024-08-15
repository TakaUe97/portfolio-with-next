"use client";

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import FrozenRoute from './FrozenRoute';

const PageTransition = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={{
          hidden: { opacity:0},
          visible: { opacity:1, transition: { delay: 1, duration: .5 } },
          exit: { opacity:0, transition: { duration: .5 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <FrozenRoute>
          {children}
        </FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

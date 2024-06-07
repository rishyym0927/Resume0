"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut",
            },
          }}
         className = "h-screen w-screen fixed bg-black top-0 pointer-events-none" />
         {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;

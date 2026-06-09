import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const PremiumLoading = ({ isVisible = true }: { isVisible?: boolean }) => {
  const [isReadyToExit, setIsReadyToExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReadyToExit(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isReadyToExit && !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isReadyToExit ? 0 : 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center pointer-events-none"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Minimal geometric loader */}
        <div className="relative w-16 h-16">
          {/* Outer rotating circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 border-2 border-transparent border-t-primary border-r-primary rounded-full"
          />

          {/* Inner pulsing circle */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-2 border border-primary/30 rounded-full"
          />

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 0.8, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </div>

        {/* Minimal branding text */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold text-secondary tracking-wide">
            L&D DIGITAL
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-xs text-muted-foreground mt-2 tracking-widest"
          >
            Loading
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

"use client";

import { motion } from "framer-motion";

interface FullPageLoaderProps {
  message?: string;
    loading?: boolean;
}

export default function FullPageLoader({ message = "Chargement en cours...", loading = false }: FullPageLoaderProps) {
  return (
    <div className={loading ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm" : "hidden"}>
      <div className="relative flex items-center justify-center">
        {/* Cercle extérieur animé */}
        <motion.div
          className="h-20 w-20 rounded-full border-4 border-primary/20 border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Logo ou icône centrale (Optionnel) */}
        <div className="absolute">
          <div className="h-10 w-10 bg-primary rounded-xl animate-pulse" />
        </div>
      </div>

      {/* Message de chargement */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-sm font-bold text-gray-700 tracking-wide"
      >
        {message}
      </motion.p>
    </div>
  );
}
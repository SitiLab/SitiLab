import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />

      <div className="absolute right-0 top-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30" />
      <div className="absolute -left-20 bottom-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20" />

      {}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={spring}
          >
            Web Agency Innovativa
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trasformiamo le tue idee in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              esperienze digitali
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Progettiamo e sviluppiamo soluzioni web personalizzate che ti
            aiutano a crescere online. Dal design all'implementazione, siamo al
            tuo fianco in ogni fase del progetto.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
            >
              Inizia Ora
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              className="text-blue-600 px-8 py-3 rounded-full font-medium border-2 border-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
            >
              Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Users, Lightbulb, Code, Target } from "lucide-react";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const AboutUs = () => {
  const values = [
    {
      icon: <Lightbulb />,
      value: "Innovazione",
      label: "Soluzioni all'avanguardia",
    },
    { icon: <Code />, value: "Competenza", label: "Tecnologie moderne" },
    { icon: <Target />, value: "Obiettivi", label: "Risultati concreti" },
    { icon: <Users />, value: "Collaborazione", label: "Approccio personale" },
  ];

  const teamMembers = [
    {
      name: "Lorenzo Cingano",
      role: "CEO & Founder",
      image: "https://cdn.sitilab.ch/landing-page/lorenzo-cingano.png"
    },
    {
      name: "Liam Cominotti",
      role: "Lead Designer",
      image: "https://cdn.sitilab.ch/landing-page/liam-cominotti.png",
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Chi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Siamo
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Una startup innovativa nel campo dello sviluppo web, guidata dalla
            passione per la tecnologia e dall'impegno verso l'eccellenza
            digitale.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={spring}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"
                whileHover={{ rotate: 5 }}
                transition={spring}
              >
                {value.icon}
              </motion.div>
              <div className="text-xl font-bold mb-2">{value.value}</div>
              <div className="text-gray-600">{value.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={spring}
            >
              <motion.div
                className="w-48 h-48 mx-auto mb-6 relative rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={spring}
              >
                {!member.image? <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-80" /> : undefined}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

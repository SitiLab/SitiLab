import React, { useState } from "react";
import {
  Code,
  Palette,
  Globe,
  ArrowRight,
  Smartphone,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const services = [
    {
      icon: <Code size={24} />,
      title: "Sviluppo Web",
      description:
          "Sviluppiamo siti web e applicazioni personalizzate utilizzando le tecnologie più moderne e performanti.",
      features: ["React", "Next.js", "Node.js"],
    },
    {
      icon: <Palette size={24} />,
      title: "Web Design",
      description:
          "Creiamo interfacce intuitive e accattivanti che rispecchiano l'identità del tuo brand.",
      features: [
        "UI/UX Design",
        "Responsive Design",
        "Brand Identity",
        "Prototyping",
      ],
    },
    {
      icon: <Globe size={24} />,
      title: "SEO",
      description:
          "Ottimizziamo il tuo sito per i motori di ricerca per aumentare la visibilità online.",
      features: [
        "Analisi Keywords",
        "Link Building",
        "SEO Tecnico",
        "Local SEO",
      ],
    },
    {
      icon: <Smartphone size={24} />,
      title: "App Mobile",
      description:
          "Sviluppiamo applicazioni mobile native e cross-platform per iOS e Android.",
      features: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: <Rocket size={24} />,
      title: "Digital Marketing",
      description:
          "Strategie di marketing digitale per far crescere il tuo business online.",
      features: ["Social Media", "Email Marketing", "Google Ads", "Analytics"],
    },
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
  };

  return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {}
          <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              I Nostri{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Servizi
            </span>
            </h2>
            <p className="text-lg text-gray-600">
              Offriamo soluzioni complete per la tua presenza digitale, dallo
              sviluppo alla promozione online.
            </p>
          </motion.div>

          {}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={service.title}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                >
                  {}
                  <motion.div
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={spring}
                  >
                    {service.icon}
                  </motion.div>

                  {}
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                        <motion.span
                            key={feature}
                            className="text-sm text-gray-500 flex items-center gap-1"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 + idx * 0.05 }}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          {feature}
                        </motion.span>
                    ))}
                  </div>

                  {}
                  <motion.button
                      className="text-blue-600 font-medium inline-flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                      transition={spring}
                      onClick={() => openServiceModal(service)}
                  >
                    Scopri di più
                    <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </motion.div>
            ))}
          </div>
        </div>

        {}
        <ServiceModal
            isOpen={isModalOpen}
            onClose={closeServiceModal}
            service={selectedService}
        />
      </section>
  );
};

export default Services;
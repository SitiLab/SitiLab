import React, {useState} from "react";
import {ArrowRight, Code, Globe, Palette, Rocket, Smartphone,} from "lucide-react";
import {motion} from "framer-motion";
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
          "Diamo vita a siti web e applicazioni su misura con strumenti moderni che garantiscono risultati concreti.",
      features: ["React", "Next.js", "Node.js"],
      color: "blue",
      accentColor: "from-blue-600 to-blue-400",
      patternPosition: "top-right",
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
      color: "purple",
      accentColor: "from-purple-600 to-purple-400",
      patternPosition: "bottom-left",
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
      color: "green",
      accentColor: "from-green-600 to-green-400",
      patternPosition: "bottom-right",
    },
    {
      icon: <Smartphone size={24} />,
      title: "App Mobile",
      description:
          "Sviluppiamo applicazioni mobile native e cross-platform per iOS e Android.",
      features: ["React Native", "Flutter", "iOS", "Android"],
      color: "orange",
      accentColor: "from-orange-600 to-orange-400",
      patternPosition: "top-left",
    },
    {
      icon: <Rocket size={24} />,
      title: "Digital Marketing",
      description:
          "Strategie di marketing digitale per far crescere il tuo business online.",
      features: ["Social Media", "Email Marketing", "Google Ads", "Analytics"],
      color: "red",
      accentColor: "from-red-600 to-red-400",
      patternPosition: "center",
    },
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        dot: "bg-blue-400",
        hover: "hover:bg-blue-50",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        dot: "bg-purple-400",
        hover: "hover:bg-purple-50",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        dot: "bg-green-400",
        hover: "hover:bg-green-50",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        dot: "bg-orange-400",
        hover: "hover:bg-orange-50",
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        dot: "bg-red-400",
        hover: "hover:bg-red-50",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  const getPatternStyle = (position) => {
    const basePattern = {
      position: "absolute",
      width: "120px",
      height: "120px",
      opacity: 0.05,
      zIndex: 0,
      borderRadius: "12px",
    };

    const positions = {
      "top-right": {
        top: "-20px",
        right: "-20px",
        background: "radial-gradient(circle, currentColor 1px, transparent 2px)",
        backgroundSize: "12px 12px",
      },
      "top-left": {
        top: "-20px",
        left: "-20px",
        background: "linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%)",
        backgroundSize: "16px 16px",
      },
      "bottom-right": {
        bottom: "-20px",
        right: "-20px",
        background: "repeating-linear-gradient(45deg, currentColor, currentColor 2px, transparent 2px, transparent 8px)",
      },
      "bottom-left": {
        bottom: "-20px",
        left: "-20px",
        background: "repeating-radial-gradient(circle, currentColor, currentColor 1px, transparent 2px, transparent 8px)",
      },
      center: {
        top: "50%",
        right: "-40px",
        transform: "translateY(-50%)",
        background: "linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(0deg, currentColor 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      },
    };

    return { ...basePattern, ...positions[position] };
  };

  return (
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute h-64 w-64 rounded-full bg-blue-600 -top-20 -left-20 blur-3xl opacity-20"></div>
          <div className="absolute h-64 w-64 rounded-full bg-purple-600 top-1/2 -right-20 blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Abbiamo tutte le risposte per gestire la tua presenza online in modo completo: dalla creazione al marketing digitale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);

              return (
                  <motion.div
                      key={service.title}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -8 }}
                  >
                    {/* Decorative pattern based on service */}
                    <div
                        className={colorClasses.text}
                        style={getPatternStyle(service.patternPosition)}
                    ></div>

                    {/* Card content with z-index to appear above pattern */}
                    <div className="relative z-10">
                      <motion.div
                          className={`w-14 h-14 ${colorClasses.bg} rounded-2xl flex items-center justify-center ${colorClasses.text} mb-6 group-hover:scale-110 transition-transform`}
                          whileHover={{ rotate: 5 }}
                          transition={spring}
                      >
                        {service.icon}
                      </motion.div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 to-pink-600 group-hover:transition-all transition-all duration-300 group-hover:duration-300 group-hover:ease-in-out ease-in-out">
                            {service.title}
                        </h3>

                      <p className="text-gray-600 mb-6">{service.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                            <motion.span
                                key={feature}
                                className="text-sm text-gray-500 flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 + idx * 0.05 }}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${colorClasses.dot}`} />
                              {feature}
                            </motion.span>
                        ))}
                      </div>

                      <motion.button
                          className={`${colorClasses.text} font-medium inline-flex items-center gap-2 group relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full`}
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
                    </div>
                  </motion.div>
              );
            })}
          </div>
        </div>

        <ServiceModal
            isOpen={isModalOpen}
            onClose={closeServiceModal}
            service={selectedService}
        />
      </section>
  );
};

export default Services;
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Palette,
  Globe,
  Users,
  MessageSquare,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const menuVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 15,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const navbarVariants = {
  top: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    y: 0,
  },
  scroll: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    y: 0,
    transition: spring,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Code size={20} />,
      title: "Sviluppo Web",
      desc: "Siti web personalizzati e applicazioni web",
    },
    {
      icon: <Palette size={20} />,
      title: "Web Design",
      desc: "Design UI/UX moderno e accattivante",
    },
    {
      icon: <Globe size={20} />,
      title: "SEO",
      desc: "Ottimizzazione per i motori di ricerca",
    },
  ];

  const aboutItems = [
    { icon: <Users size={20} />, title: "Team", desc: "I nostri esperti" },
    {
      icon: <MessageSquare size={20} />,
      title: "Testimonianze",
      desc: "Cosa dicono i clienti",
    },
    {
      icon: <Phone size={20} />,
      title: "Contatti",
      desc: "Parliamo del tuo progetto",
    },
  ];

  return (
    <motion.nav
      variants={navbarVariants}
      initial="top"
      animate={scrolled ? "scroll" : "top"}
      className="fixed w-full z-40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={spring}
          >
            <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Siti<span className="text-gray-900">Lab</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              transition={spring}
            >
              Home
            </motion.a>

            {/* Servizi Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() =>
                  setActiveMenu(activeMenu === "services" ? null : "services")
                }
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium"
                whileHover={{ scale: 1.05 }}
                transition={spring}
              >
                <span>Servizi</span>
                <motion.div
                  animate={{ rotate: activeMenu === "services" ? 180 : 0 }}
                  transition={spring}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeMenu === "services" && (
                  <motion.div
                    variants={menuVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="absolute top-full -left-4 w-[400px] bg-white rounded-lg shadow-xl p-6 z-50"
                  >
                    {services.map((service, idx) => (
                      <motion.a
                        key={idx}
                        variants={itemVariants}
                        href={`#${service.title.toLowerCase()}`}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 mb-3 last:mb-0"
                        whileHover={{ x: 8, transition: spring }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"
                          whileHover={{ scale: 1.1 }}
                          transition={spring}
                        >
                          {service.icon}
                        </motion.div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {service.desc}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Chi Siamo Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() =>
                  setActiveMenu(activeMenu === "about" ? null : "about")
                }
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium"
                whileHover={{ scale: 1.05 }}
                transition={spring}
              >
                <span>Chi Siamo</span>
                <motion.div
                  animate={{ rotate: activeMenu === "about" ? 180 : 0 }}
                  transition={spring}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeMenu === "about" && (
                  <motion.div
                    variants={menuVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="absolute top-full -left-4 w-[400px] bg-white rounded-lg shadow-xl p-6 z-50"
                  >
                    {aboutItems.map((item, idx) => (
                      <motion.a
                        key={idx}
                        variants={itemVariants}
                        href={`#${item.title.toLowerCase()}`}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 mb-3 last:mb-0"
                        whileHover={{ x: 8, transition: spring }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"
                          whileHover={{ scale: 1.1 }}
                          transition={spring}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
              >
                Contattaci
              </motion.button>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
              >
                Preventivo Gratuito
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ backgroundColor: "rgb(239 246 255)" }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={spring}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={spring}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <motion.a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                  whileHover={{ x: 8 }}
                  transition={spring}
                >
                  Home
                </motion.a>

                {/* Mobile Services Menu */}
                <div className="space-y-2">
                  <motion.button
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === "mobile-services"
                          ? null
                          : "mobile-services"
                      )
                    }
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                    whileHover={{ x: 8 }}
                    transition={spring}
                  >
                    <span>Servizi</span>
                    <motion.div
                      animate={{
                        rotate: activeMenu === "mobile-services" ? 180 : 0,
                      }}
                      transition={spring}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {activeMenu === "mobile-services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {services.map((service, idx) => (
                          <motion.a
                            key={idx}
                            href={`#${service.title.toLowerCase()}`}
                            className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1, ...spring }}
                            whileHover={{ x: 8 }}
                          >
                            {service.icon}
                            <span>{service.title}</span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Chi Siamo Menu */}
                <div className="space-y-2">
                  <motion.button
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === "mobile-about" ? null : "mobile-about"
                      )
                    }
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                    whileHover={{ x: 8 }}
                    transition={spring}
                  >
                    <span>Chi Siamo</span>
                    <motion.div
                      animate={{
                        rotate: activeMenu === "mobile-about" ? 180 : 0,
                      }}
                      transition={spring}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {activeMenu === "mobile-about" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {aboutItems.map((item, idx) => (
                          <motion.a
                            key={idx}
                            href={`#${item.title.toLowerCase()}`}
                            className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1, ...spring }}
                            whileHover={{ x: 8 }}
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="px-3 pt-4 space-y-2">
                  <motion.button
                    className="w-full text-blue-600 hover:text-blue-700 font-medium py-2 rounded-lg hover:bg-blue-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={spring}
                  >
                    Contattaci
                  </motion.button>
                  <motion.button
                    className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 font-medium shadow-lg"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={spring}
                  >
                    Preventivo Gratuito
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

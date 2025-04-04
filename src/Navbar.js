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
      href: "#services",
    },
    {
      icon: <Palette size={20} />,
      title: "Web Design",
      desc: "Design UI/UX moderno e accattivante",
      href: "#services",
    },
    {
      icon: <Globe size={20} />,
      title: "SEO",
      desc: "Ottimizzazione per i motori di ricerca",
      href: "#services",
    },
  ];

  const aboutItems = [
    {
      icon: <Users size={20} />,
      title: "Team",
      desc: "I nostri esperti",
      href: "#about-us"
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Testimonianze",
      desc: "Cosa dicono i clienti",
      href: "#about-us"
    },
    {
      icon: <Phone size={20} />,
      title: "Contatti",
      desc: "Parliamo del tuo progetto",
      href: "#contact-us"
    },
  ];

  
  const scrollToSection = (id) => {
    setActiveMenu(null);
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <motion.nav
          variants={navbarVariants}
          initial="top"
          animate={scrolled ? "scroll" : "top"}
          className="fixed w-full z-40 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {}
            <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={spring}
            >
              <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="cursor-pointer"
              >
              <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Siti<span className="text-gray-900">Lab</span>
              </span>
              </a>
            </motion.div>

            {}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={spring}
              >
                Home
              </motion.a>

              {}
              <div className="relative">
                <motion.button
                    onClick={() =>
                        setActiveMenu(activeMenu === "services" ? null : "services")
                    }
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
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
                                href={service.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToSection(service.href);
                                }}
                                className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 mb-3 last:mb-0 cursor-pointer"
                                whileHover={{ x: 8, transition: spring }}
                            >
                              <motion.div
                                  className="mt-1 text-blue-600"
                                  whileHover={{ rotate: 5 }}
                                  transition={spring}
                              >
                                {service.icon}
                              </motion.div>
                              <div>
                                <div className="font-semibold">{service.title}</div>
                                <div className="text-sm text-gray-600">
                                  {service.desc}
                                </div>
                              </div>
                            </motion.a>
                        ))}
                      </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {}
              <div className="relative">
                <motion.button
                    onClick={() =>
                        setActiveMenu(activeMenu === "about" ? null : "about")
                    }
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
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
                          className="absolute top-full -left-4 w-[300px] bg-white rounded-lg shadow-xl p-6 z-50"
                      >
                        {aboutItems.map((item, idx) => (
                            <motion.a
                                key={idx}
                                variants={itemVariants}
                                href={item.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToSection(item.href);
                                }}
                                className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 mb-3 last:mb-0 cursor-pointer"
                                whileHover={{ x: 8, transition: spring }}
                            >
                              <motion.div
                                  className="mt-1 text-blue-600"
                                  whileHover={{ rotate: 5 }}
                                  transition={spring}
                              >
                                {item.icon}
                              </motion.div>
                              <div>
                                <div className="font-semibold">{item.title}</div>
                                <div className="text-sm text-gray-600">
                                  {item.desc}
                                </div>
                              </div>
                            </motion.a>
                        ))}
                      </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                  href="#contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact-us");
                  }}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={spring}
              >
                Contattaci
              </motion.a>

              <motion.button
                  onClick={() => scrollToSection("#contact-us")}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 font-medium shadow-lg cursor-pointer"
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

            {}
            <motion.button
                className="lg:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={spring}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
                  {}
                  <motion.a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsOpen(false);
                      }}
                      className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg cursor-pointer"
                      whileHover={{ x: 8 }}
                      transition={spring}
                  >
                    Home
                  </motion.a>

                  {}
                  <div className="space-y-2">
                    <motion.button
                        onClick={() =>
                            setActiveMenu(
                                activeMenu === "mobile-services" ? null : "mobile-services"
                            )
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg cursor-pointer"
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
                                    href={service.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      scrollToSection(service.href);
                                    }}
                                    className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg cursor-pointer"
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

                  {}
                  <div className="space-y-2">
                    <motion.button
                        onClick={() =>
                            setActiveMenu(
                                activeMenu === "mobile-about" ? null : "mobile-about"
                            )
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg cursor-pointer"
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
                                    href={item.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      scrollToSection(item.href);
                                    }}
                                    className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg cursor-pointer"
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

                  {}
                  <div className="px-3 pt-4 space-y-2">
                    <motion.button
                        onClick={() => {
                          scrollToSection("#contact-us");
                          setIsOpen(false);
                        }}
                        className="w-full text-blue-600 hover:text-blue-700 font-medium py-2 rounded-lg hover:bg-blue-50 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={spring}
                    >
                      Contattaci
                    </motion.button>
                    <motion.button
                        onClick={() => {
                          scrollToSection("#contact-us");
                          setIsOpen(false);
                        }}
                        className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 font-medium shadow-lg cursor-pointer"
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
      </motion.nav>
  );
};

export default Navbar;
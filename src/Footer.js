import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const Footer = () => {
  const linkGroups = [
    {
      title: "Servizi",
      links: [
        { label: "Sviluppo Web", href: "#sviluppo-web" },
        { label: "Web Design", href: "#web-design" },
        { label: "SEO", href: "#seo" },
        { label: "Consulenza", href: "#consulenza" },
      ],
    },
    {
      title: "Azienda",
      links: [
        { label: "Chi Siamo", href: "#chi-siamo" },
        { label: "Team", href: "#team" },
        { label: "Carriere", href: "#carriere" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
  ];

  const contactInfo = [
    { icon: <MapPin size={20} />, text: "In Nosìcc 29, Osogna" },
    { icon: <Phone size={20} />, text: "+41 79 779 83 92" },
    { icon: <Mail size={20} />, text: "info@sitilab.ch" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Siti<span className="text-gray-900">Lab</span>
            </span>
            <p className="mt-4 text-gray-600">
              Trasformiamo le tue idee in esperienze digitali straordinarie.
            </p>
          </motion.div>

          {/* Links */}
          {linkGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 4 }}
                      transition={spring}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-gray-900 mb-4">Contatti</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center space-x-2 text-gray-600"
                  whileHover={{ x: 4 }}
                  transition={spring}
                >
                  <span className="text-blue-600">{info.icon}</span>
                  <span>{info.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} SitiLab. Tutti i diritti riservati.
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

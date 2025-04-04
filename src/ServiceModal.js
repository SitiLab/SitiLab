
import React, {useEffect} from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const spring = {
    type: "spring",
    stiffness: 400,
    damping: 30,
};

const ServiceModal = ({ isOpen, onClose, service }) => {
    useEffect(() => {
        if (isOpen) {
            
            const scrollY = window.scrollY;

            
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';

            
            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);

    if (!service) return null;

    
    const additionalDetails = {
        "Sviluppo Web": {
            benefits: [
                "Soluzioni personalizzate per ogni tipo di business",
                "Ottimizzazione per prestazioni e SEO",
                "Sviluppo responsive per dispositivi mobile e desktop",
                "Integrazione con CMS e strumenti di analisi",
            ],
            technologies: ["React", "Next.js", "Node.js", "Java", "Spring"],
            process: [
                "Analisi dei requisiti e pianificazione",
                "Progettazione dell'architettura",
                "Sviluppo frontend e backend",
                "Testing e ottimizzazione",
                "Deployment e manutenzione",
            ],
        },
        "Web Design": {
            benefits: [
                "Design moderno e accattivante",
                "Esperienza utente intuitiva e coinvolgente",
                "Consistenza visiva su tutte le pagine",
                "Identità di marca riconoscibile",
            ],
            technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
            process: [
                "Research e analisi del target",
                "Wireframing e prototyping",
                "Design UI/UX",
                "Feedback e iterazioni",
                "Consegna degli asset finali",
            ],
        },
        "SEO": {
            benefits: [
                "Maggiore visibilità sui motori di ricerca",
                "Aumento del traffico organico qualificato",
                "Miglioramento del ROI rispetto a pubblicità a pagamento",
                "Costruzione di credibilità e autorità nel settore",
            ],
            technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Screaming Frog"],
            process: [
                "Audit SEO completo",
                "Analisi delle keyword",
                "Ottimizzazione on-page",
                "Link building e SEO off-page",
                "Monitoraggio e reportistica",
            ],
        },
        "App Mobile": {
            benefits: [
                "Presenza su App Store e Google Play",
                "Funzionalità native come notifiche push",
                "Esperienza utente ottimizzata per mobile",
                "Accesso a sensori e funzionalità dei dispositivi",
            ],
            technologies: ["Flutter", "Swift", "Java"],
            process: [
                "Definizione delle specifiche",
                "Design dell'interfaccia",
                "Sviluppo multi-piattaforma",
                "Testing su diversi dispositivi",
                "Pubblicazione e manutenzione",
            ],
        },
        "Digital Marketing": {
            benefits: [
                "Strategie personalizzate in base agli obiettivi",
                "Targeting preciso del pubblico ideale",
                "Monitoraggio in tempo reale dei risultati",
                "Ottimizzazione continua delle campagne",
            ],
            technologies: ["Meta Business Suite", "Google Ads", "MailChimp", "HubSpot"],
            process: [
                "Analisi di mercato e concorrenza",
                "Definizione della strategia",
                "Creazione di contenuti e campagne",
                "Lancio e ottimizzazione",
                "Analisi dei risultati",
            ],
        },
    };

    const details = additionalDetails[service.title] || {};

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClick={onClose}
                >
                    <div className="flex min-h-screen items-center justify-center p-4">
                        {}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black"
                            onClick={onClose}
                        />

                        {}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={spring}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-auto z-10 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {}
                            <div className="relative bg-blue-50 p-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold">{service.title}</h3>
                                    </div>
                                    <motion.button
                                        onClick={onClose}
                                        className="p-2 rounded-full hover:bg-blue-100 text-gray-600"
                                        whileHover={{ rotate: 90 }}
                                        transition={spring}
                                    >
                                        <X size={24} />
                                    </motion.button>
                                </div>
                            </div>

                            {}
                            <div className="p-6">
                                <p className="text-gray-700 text-lg mb-8">{service.description}</p>

                                {}
                                <div className="mb-8">
                                    <h4 className="font-bold text-lg mb-3">Tecnologie</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {details.technologies?.map((tech, index) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {}
                                <div className="mb-8">
                                    <h4 className="font-bold text-lg mb-3">Benefici</h4>
                                    <ul className="space-y-2">
                                        {details.benefits?.map((benefit, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start gap-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <span className="min-w-2 h-2 bg-blue-400 rounded-full mt-2" />
                                                <span>{benefit}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {}
                                <div>
                                    <h4 className="font-bold text-lg mb-3">Il Nostro Processo</h4>
                                    <ol className="space-y-4">
                                        {details.process?.map((step, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start gap-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                                                <span>{step}</span>
                                            </motion.li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            {}
                            <div className="p-6 bg-gray-50 flex justify-end">
                                <motion.button
                                    className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg"
                                    onClick={() => {
                                        
                                        
                                        const contactSection = document.querySelector("#contact-us");
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: "smooth" });
                                        }
                                        onClose();
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={spring}
                                >
                                    Richiedi preventivo
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
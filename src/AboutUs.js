import React, {useEffect, useState} from "react";
import {PlusCircle} from "lucide-react";
import {motion} from "framer-motion";
import {staffApi} from "./api";

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const AboutUs = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const data = await staffApi.getFeaturedStaff();
        setTeamMembers(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch team members:", err);
        setError("Non è stato possibile caricare le informazioni del team");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const values = [
    {
      value: "Innovazione",
      label: "Soluzioni all'avanguardia",
    },
    { value: "Competenza", label: "Tecnologie moderne" },
    { value: "Obiettivi", label: "Risultati concreti" },
    { value: "Collaborazione", label: "Approccio personale" },
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

          {/* Sezione valori ridisegnata con stile elegante */}
          <motion.div
              className="mb-20 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-500 shadow-sm">
              <h3 className="text-lg font-medium text-blue-800 mb-4">I nostri valori fondamentali</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                    <motion.div
                        key={value.value}
                        className="flex items-baseline"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                    <span className="text-blue-600 font-bold text-lg mr-2">
                      {value.value}
                    </span>
                      <span className="text-gray-600 text-sm">
                      — {value.label}
                    </span>
                    </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Loading and error states */}
          {loading && (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Caricamento del team in corso...</p>
              </div>
          )}

          {error && (
              <div className="text-center py-12 text-red-600">
                <p>{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Riprova
                </button>
              </div>
          )}

          {/* Team members grid with open positions card */}
          {!loading && !error && (
              <motion.div
                  className="grid md:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
              >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.name || member.id}
                        className="text-center"
                        whileHover={{ y: -5 }}
                        transition={spring}
                    >
                      <motion.div
                          className="w-48 h-48 mx-auto mb-6 relative rounded-xl overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                          transition={spring}
                      >
                        {!member.imageUrl ? (
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-80" />
                        ) : undefined}
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                      {member.email && (
                          <a
                              href={`mailto:${member.email}`}
                              className="text-blue-600 hover:underline text-sm block mt-1"
                          >
                            {member.email}
                          </a>
                      )}
                    </motion.div>
                ))}

                {/* Open positions card */}
                <motion.div
                    className="text-center flex flex-col items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={spring}
                >
                  <motion.div
                      className="w-48 h-48 mx-auto mb-6 relative rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-dashed border-blue-300"
                      whileHover={{ scale: 1.02 }}
                      transition={spring}
                  >
                    <div className="text-blue-500 mb-2">
                      <PlusCircle size={48} strokeWidth={1.5} />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Unisciti al Team</h3>
                  <p className="text-gray-600 mb-4">Stiamo cercando nuovi talenti</p>
                  <a
                      href="https://www.linkedin.com/company/sitilab-ch/"
                      className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Posizioni Aperte
                  </a>
                </motion.div>
              </motion.div>
          )}

          {/* Fallback when no team members are returned */}
          {!loading && !error && teamMembers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">Nessun membro del team trovato.</p>
              </div>
          )}
        </div>
      </section>
  );
};

export default AboutUs;
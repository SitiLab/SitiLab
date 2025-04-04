import React, {useMemo, useState} from "react";
import {AlertCircle, ArrowLeft, ArrowRight, Check, Send} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {contactApi} from "./api";

const spring = { type: "spring", stiffness: 400, damping: 30 };

const validateField = (name, value, formData) => {
  switch (name) {
    case "name":
      return value.trim() ? "" : "Nome completo è obbligatorio";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Email non valida";
    case "projectType":
      return value ? "" : "Seleziona un tipo di progetto";
    case "budget":
      return value ? "" : "Seleziona un budget";
    case "deadline":
      return value ? "" : "Seleziona una tempistica";
    case "platform":
      return value.length > 0 ? "" : "Seleziona almeno una piattaforma";
    case "features":
      return value.length > 0 ? "" : "Seleziona almeno una funzionalità";
    case "design":
      return value ? "" : "Seleziona uno stile di design";
    case "description":
      return value && value.trim() ? "" : "Descrizione è obbligatoria";
    case "goals":
      return value && value.trim() ? "" : "Obiettivi sono obbligatori";
    default:
      return "";
  }
};

const ErrorMessage = ({ message }) =>
  message ? (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="text-red-500 text-sm mt-1 flex items-center gap-1"
    >
      <AlertCircle size={14} />
      {message}
    </motion.p>
  ) : null;

const CustomSelect = React.memo(
  ({ options, value, onChange, name, placeholder, error }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <motion.button
          type="button"
          className={`w-full px-4 py-3 rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } flex items-center justify-between bg-white`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          transition={spring}
        >
          <span className={value ? "text-gray-900" : "text-gray-500"}>
            {value || placeholder}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={spring}
          >
            <ArrowRight size={20} className="transform -rotate-90" />
          </motion.div>
        </motion.button>

        <ErrorMessage message={error} />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
            >
              {options.map((option) => (
                <motion.button
                  key={option.value}
                  type="button"
                  className="w-full px-4 py-2 text-left hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg"
                  onClick={() => {
                    onChange({ target: { name, value: option.value } });
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 5 }}
                  transition={spring}
                >
                  {option.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

const Step1 = React.memo(({ formData, handleChange, errors }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div whileHover={{ scale: 1.02 }} transition={spring}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          onChange={handleChange}
          value={formData.name}
        />
        <ErrorMessage message={errors.name} />
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={spring}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          onChange={handleChange}
          value={formData.email}
        />
        <ErrorMessage message={errors.email} />
      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div whileHover={{ scale: 1.02 }} transition={spring}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Azienda
        </label>
        <input
          type="text"
          name="company"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          onChange={handleChange}
          value={formData.company}
        />
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={spring}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ruolo
        </label>
        <input
          type="text"
          name="role"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          onChange={handleChange}
          value={formData.role}
        />
      </motion.div>
    </div>
  </motion.div>
));

const Step2 = React.memo(({ formData, handleChange, errors }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Tipo di Progetto *
      </label>
      <CustomSelect
        options={[
          { value: "Sito Web", label: "Sito Web" },
          { value: "E-commerce", label: "E-commerce" },
          { value: "Web App", label: "Web App" },
          { value: "Mobile App", label: "Mobile App" },
          { value: "Altro", label: "Altro" },
        ]}
        value={formData.projectType}
        onChange={handleChange}
        name="projectType"
        placeholder="Seleziona tipo progetto"
      />
      <ErrorMessage message={errors.projectType} />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Budget Indicativo *
      </label>
      <CustomSelect
        options={[
          { value: "< 5k", label: "Meno di 5.000€" },
          { value: "5k-10k", label: "5.000€ - 10.000€" },
          { value: "10k-20k", label: "10.000€ - 20.000€" },
          { value: "> 20k", label: "Più di 20.000€" },
        ]}
        value={formData.budget}
        onChange={handleChange}
        name="budget"
        placeholder="Seleziona budget"
      />
      <ErrorMessage message={errors.budget} />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Tempistica *
      </label>
      <CustomSelect
        options={[
          { value: "1-2", label: "1-2 mesi" },
          { value: "3-4", label: "3-4 mesi" },
          { value: "5-6", label: "5-6 mesi" },
          { value: "> 6", label: "Più di 6 mesi" },
        ]}
        value={formData.deadline}
        onChange={handleChange}
        name="deadline"
        placeholder="Seleziona tempistica"
      />
      <ErrorMessage message={errors.deadline} />
    </div>
  </motion.div>
));

const Step3 = React.memo(({ formData, handleChange, errors }) => {
  const platformOptions = [
    "Web Desktop",
    "Web Mobile",
    "iOS Native",
    "Android Native",
    "PWA",
  ];

  const featureOptions = [
    "Autenticazione Utenti",
    "Dashboard Admin",
    "Pagamenti Online",
    "Chat/Messaggistica",
    "CMS",
    "Analytics",
    "API Integration",
    "Multi-lingua",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Piattaforme Target *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {platformOptions.map((platform) => (
            <motion.label
              key={platform}
              className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={spring}
            >
              <input
                type="checkbox"
                name="platform"
                value={platform}
                checked={formData.platform.includes(platform)}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              <span>{platform}</span>
            </motion.label>
          ))}
          <ErrorMessage message={errors.platform} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Funzionalità Richieste *
        </label>
        <div className="grid grid-cols-2 gap-4">
          {featureOptions.map((feature) => (
            <motion.label
              key={feature}
              className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={spring}
            >
              <input
                type="checkbox"
                name="features"
                value={feature}
                checked={formData.features.includes(feature)}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              <span>{feature}</span>
            </motion.label>
          ))}
          <ErrorMessage message={errors.features} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Design *
        </label>
        <CustomSelect
          options={[
            { value: "minimal", label: "Minimal e Moderno" },
            { value: "corporate", label: "Corporate e Professionale" },
            { value: "creative", label: "Creativo e Distintivo" },
            { value: "custom", label: "Design Personalizzato" },
          ]}
          value={formData.design}
          onChange={handleChange}
          name="design"
          placeholder="Seleziona stile design"
        />
        <ErrorMessage message={errors.design} />
      </div>
    </motion.div>
  );
});

const Step4 = React.memo(({ formData, handleChange, errors }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    <motion.div whileHover={{ scale: 1.02 }} transition={spring}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Descrizione Dettagliata del Progetto *
      </label>
      <textarea
        name="description"
        rows={4}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
        onChange={handleChange}
        value={formData.description}
        placeholder="Descrivi nel dettaglio il tuo progetto..."
      />
      <ErrorMessage message={errors.description} />
    </motion.div>

    <motion.div whileHover={{ scale: 1.02 }} transition={spring}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Obiettivi del Progetto *
      </label>
      <textarea
        name="goals"
        rows={3}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
        onChange={handleChange}
        value={formData.goals}
        placeholder="Quali sono i principali obiettivi che vuoi raggiungere?"
      />
      <ErrorMessage message={errors.goals} />
    </motion.div>

    <motion.div whileHover={{ scale: 1.02 }} transition={spring}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Competitors
      </label>
      <textarea
        name="competitors"
        rows={3}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
        onChange={handleChange}
        value={formData.competitors}
        placeholder="Ci sono competitor o siti di riferimento che ti piacciono?"
      />
    </motion.div>

    <motion.div whileHover={{ scale: 1.02 }} transition={spring}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Link di Riferimento
      </label>
      <textarea
        name="references"
        rows={3}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
        onChange={handleChange}
        value={formData.references}
        placeholder="Hai dei siti web di riferimento per il design o le funzionalità?"
      />
    </motion.div>
  </motion.div>
));

const StepIndicator = React.memo(({ step }) => {
  const totalSteps = 4;

  return (
      <div className="mb-8">
        {/* Main container with relative positioning */}
        <div className="relative">
          {/* Step circles with labels */}
          <div className="flex justify-between items-center relative mb-12">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center relative z-10">
                  {/* Circle */}
                  <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          i < step
                              ? "bg-blue-600 text-white"
                              : i === step
                                  ? "bg-blue-600 text-white"
                                  : i === step + 1
                                      ? "bg-white border-2 border-blue-400 text-blue-600"
                                      : "bg-gray-200 text-gray-500"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={spring}
                  >
                    {i < step ? <Check size={20} /> : i}
                  </motion.div>

                  {/* Label */}
                  <span className="text-sm mt-2 text-center text-gray-600">
                {i === 1 && "Info Personali"}
                    {i === 2 && "Info Progetto"}
                    {i === 3 && "Dettagli Tecnici"}
                    {i === 4 && "Requisiti"}
              </span>
                </div>
            ))}

            {/* Progress bar - now absolutely positioned relative to the flex container */}
            <div className="absolute top-6 left-0 w-full z-0">
              {/* Background track */}
              <div className="absolute h-1 bg-gray-200 left-0 right-0" />

              {/* Active progress - width calculated based on current step */}
              <motion.div
                  className="absolute h-1 bg-blue-600"
                  initial={{ width: "0%" }}
                  animate={{
                    width: step === 1
                        ? "0%"
                        : step === 2
                            ? "33.33%"
                            : step === 3
                                ? "66.66%"
                                : "100%"
                  }}
                  transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
  );
});

const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectType: "",
    budget: "",
    deadline: "",
    platform: [],
    features: [],
    design: "",
    description: "",
    goals: "",
    competitors: "",
    referenceLinks: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validateStep = (stepNumber) => {
    const fieldsToValidate = {
      1: ["name", "email"],
      2: ["projectType", "budget", "deadline"],
      3: ["platform", "features", "design"],
      4: ["description", "goals"],
    };

    const stepErrors = {};
    fieldsToValidate[stepNumber].forEach((field) => {
      const error = validateField(field, formData[field], formData);
      if (error) stepErrors[field] = error;
    });

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleChange = useMemo(
      () => (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => {
          const newData =
              type === "checkbox"
                  ? {
                    ...prevData,
                    [name]: checked
                        ? [...prevData[name], value]
                        : prevData[name].filter((item) => item !== value),
                  }
                  : { ...prevData, [name]: value };

          setErrors((prev) => ({ ...prev, [name]: "" }));
          return newData;
        });
      },
      []
  );

  const handleSubmit = async (e) => {
    if (!validateStep(4)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Create contactForm and projectRequest objects
      const contactFormData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        role: formData.role || null,
        projectType: formData.projectType,
        budget: formData.budget,
        deadline: formData.deadline,
        description: formData.description,
        goals: formData.goals,
        competitors: formData.competitors || null,
        referenceLinks: formData.referenceLinks || null
      };

      const projectRequestData = {
        platforms: formData.platform,
        features: formData.features,
        design: formData.design
      };

      // Call the API
      const response = await contactApi.requestQuote(contactFormData, projectRequestData);

      console.log("Form submitted successfully:", response);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        projectType: "",
        budget: "",
        deadline: "",
        platform: [],
        features: [],
        design: "",
        description: "",
        goals: "",
        competitors: "",
        referenceLinks: "",
      });

      // Go back to step 1
      setStep(1);

    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitError(
          err.message || "Si è verificato un errore durante l'invio del modulo"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const currentStep = useMemo(() => {
    switch (step) {
      case 1:
        return (
            <Step1
                formData={formData}
                handleChange={handleChange}
                errors={errors}
            />
        );
      case 2:
        return (
            <Step2
                formData={formData}
                handleChange={handleChange}
                errors={errors}
            />
        );
      case 3:
        return (
            <Step3
                formData={formData}
                handleChange={handleChange}
                errors={errors}
            />
        );
      case 4:
        return (
            <Step4
                formData={formData}
                handleChange={handleChange}
                errors={errors}
            />
        );
      default:
        return null;
    }
  }, [step, formData, handleChange, errors]);

  return (
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Iniziamo a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Creare
            </span>
            </h2>
            <p className="text-lg text-gray-600">
              Raccontaci del tuo progetto e ti contatteremo per una consulenza
              gratuita
            </p>
          </motion.div>

          {submitSuccess && (
              <motion.div
                  className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
              >
                <div className="flex items-center mb-3">
                  <Check size={24} className="text-green-600 mr-2" />
                  <h3 className="text-xl font-bold">Richiesta inviata con successo!</h3>
                </div>
                <p>Grazie per averci contattato. Un membro del nostro team ti risponderà al più presto.</p>
              </motion.div>
          )}

          {submitError && (
              <motion.div
                  className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
              >
                <div className="flex items-center mb-3">
                  <AlertCircle size={24} className="text-red-600 mr-2" />
                  <h3 className="text-xl font-bold">Si è verificato un errore</h3>
                </div>
                <p>{submitError}</p>
                <motion.button
                    className="mt-3 text-red-600 font-medium"
                    whileHover={{ x: 5 }}
                    transition={spring}
                    onClick={() => setSubmitError(null)}
                >
                  Riprova
                </motion.button>
              </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <StepIndicator step={step} />
            <AnimatePresence mode="wait">
              {React.cloneElement(currentStep, { errors })}
            </AnimatePresence>

            <motion.div className="flex justify-between mt-8">
              {step > 1 && (
                  <motion.button
                      type="button"
                      className="flex items-center gap-2 px-6 py-2 text-blue-600 rounded-lg"
                      onClick={() => setStep((prev) => prev - 1)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={spring}
                      disabled={isSubmitting}
                  >
                    <ArrowLeft size={20} />
                    Indietro
                  </motion.button>
              )}

              <motion.button
                  type="button"
                  className={`ml-auto flex items-center gap-2 px-8 py-3 rounded-full font-medium shadow-lg bg-blue-600 text-white ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  onClick={() => (step === 4 ? handleSubmit : handleNext)()}
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.05,
                    boxShadow: isSubmitting ? "" : "0 20px 25px -5px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  transition={spring}
                  disabled={isSubmitting}
              >
                {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Invio in corso...
                    </>
                ) : step === 4 ? (
                    <>
                      Invia Richiesta
                      <Send size={18} />
                    </>
                ) : (
                    <>
                      Continua
                      <ArrowRight size={18} />
                    </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </div>
      </section>
  );
};

export default ContactUs;

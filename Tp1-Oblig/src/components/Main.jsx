import { useState } from 'react';
import { services } from '../utils/services';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Main = () => {
  const [showDetails, setShowDetails] = useState(null);

  const handleToggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  // Variantes para animar el título
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Variantes para animar las tarjetas
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  // Variantes para la descripción
  const descriptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <main className="container mx-auto py-12 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Bienvenidos a Nuestra Landing Page
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <motion.button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              onClick={() => handleToggleDetails(service.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showDetails === service.id ? 'Ocultar' : 'Ver más'}
            </motion.button>
            {showDetails === service.id && (
              <motion.p
                className="mt-4 text-gray-600"
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
              >
                {service.description}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Main;
